function pessoa() {
    this.idade = 0;

    setInterval( function(){ 
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); //bind amarra a funcao no this do objeto
}

function pessoa2() {
    this.idade = 0;

    const self = this;

    setInterval( function(){
        self.idade++;
        console.log(self.idade);
    }, 1000);
}
pessoa2(); 

