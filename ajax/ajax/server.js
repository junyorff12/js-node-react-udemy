const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');

  },

  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.end('Deu bug...');
    }

    res.end('funfou...');
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.get('/parOuImpar', (req, res) => {
   const par  = parseInt(req.query.numero) % 2 === 0;
   res.send({
     resposta: par ? 'par' : 'impar'
   })
})


app.get('/teste', (req, res) => { res.send('tudo ok') });

app.listen(8080, () => console.log('Executando...'));
