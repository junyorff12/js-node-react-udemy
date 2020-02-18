function novoElemento(tagName, className){
    const elem = document.createElement(tagName);
    elem.className = className;
    
    return elem;
}

//factory function
function Barreira(reverse = false){
    this.elementoBarreira = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');

    this.elementoBarreira.appendChild(reverse ? corpo : borda);
    this.elementoBarreira.appendChild(reverse ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
}
/* 
const b = new Barreira(true);
b.setAltura(200);
document.querySelector('[wm-flappy]').appendChild(b.elementoBarreira); */

function ParDeBarreiras(altura, abertura, x){
    this.elementoParDeBarreiras = novoElemento('div', 'par-de-barreiras');

    this.barreiraSuperior = new Barreira(true);
    this.barreiraInferior = new Barreira(false);

    this.elementoParDeBarreiras.appendChild(this.barreiraSuperior.elementoBarreira);
    this.elementoParDeBarreiras.appendChild(this.barreiraInferior.elementoBarreira);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.barreiraSuperior.setAltura(alturaSuperior);
        this.barreiraInferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elementoParDeBarreiras.style.left.split('px')[0]);
    this.setX = x => this.elementoParDeBarreiras.style.left = `${x}px`;
    this.getLargura = () => this.elementoParDeBarreiras.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

/* const b = new ParDeBarreiras(700, 200, 400);
document.querySelector('[wm-flappy').appendChild(b.elementoParDeBarreiras); */

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3;
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            //quando o elemento sair da area do jogo
            if(par.getX() < -par.getLargura()){
                //X recebe X mais ESPAÇO entre BARREIRAS * a quantidade de BARREIRAS,
                // isso coloca o X a um espaço de distancia da ultima barreira. ou seja, o inicio.  
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouMeio = par.getX() + deslocamento >= meio 
                && par.getX() < meio;
            
            if(cruzouMeio) notificarPonto();

        })
    }
}    


function Passaro(alturaDoJogo){
    let voando = false;

    this.elementoPassaro = novoElemento('img', 'passaro');
    this.elementoPassaro.src = 'imgs/passaro.png';
    
    this.getY = () => parseInt(this.elementoPassaro.style.bottom.split('px')[0]);
    this.setY = y => this.elementoPassaro.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaDoJogo - this.elementoPassaro.clientHeight;
        
        if (novoY <= 0){
            this.setY(0);
        }else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        }else {
            this.setY(novoY);
        }
    }
    
    this.setY(alturaDoJogo / 2);
    
    
}    

function Progresso() {
    this.elementoProgresso = novoElemento('span', 'progresso');
    this.atualizarPontos = pontos => {
        this.elementoProgresso.innerHTML = pontos;
    }
    
    this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top;
    
        return horizontal && vertical;
}

function colidiu(passaro, barreiras){
    let colidiu = false;

    barreiras.pares.forEach(elementoParDeBarreiras => {
        if (!colidiu) {
            const superior = elementoParDeBarreiras.barreiraSuperior.elementoBarreira;
            const inferior = elementoParDeBarreiras.barreiraInferior.elementoBarreira;

            colidiu = estaoSobrepostos(passaro.elementoPassaro, superior)
                ||  estaoSobrepostos(passaro.elementoPassaro, inferior);
        }
    })

    return colidiu;
}

/* const barreiras  = new Barreiras(700, 1200, 200, 400);
const passaro = new Passaro(700);
const areaDoJogo = document.querySelector('[wm-flappy]');
areaDoJogo.appendChild(new Progresso().elementoProgresso);
areaDoJogo.appendChild(passaro.elementoPassaro);
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elementoParDeBarreiras));

setInterval(() => {
    barreiras.animar();
    passaro.animar();
} , 20);
 */

function FlappyBird() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;

    const progresso = new Progresso();
    const barreiras = new Barreiras(altura, largura, 200, 400,
        progresso.atualizarPontos(++pontos)
        );
    const passaro = new Passaro(altura);

    areaDoJogo.appendChild(progresso.elementoProgresso);
    areaDoJogo.appendChild(passaro.elementoPassaro);
    barreiras.pares.forEach( par => areaDoJogo.appendChild(par.elementoParDeBarreiras));

    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();

            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador);
            }
        }, 20);
    }

}

new FlappyBird().start();

