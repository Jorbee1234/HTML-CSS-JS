let perguntas = [
    
{
    titulo: 'Cachorro',
    alternativa:['Gat', 'Cat', 'Gate','Dog'],
    correta:3
},
{
    titulo: 'Water',
    alternativa:['Terra', 'Agua', 'Fogo','Ar'],
    correta:1
},
{
    titulo: 'Chuva',
    alternativa:['Sun', 'Ocean', 'Rain','Cold'],
    correta:2
},
{
    titulo: 'Fire',
    alternativa:['Fogo', 'Agua', 'Ar','Terra'],
    correta:0
},
{
    titulo: 'Car',
    alternativa:['Carro', 'Onibus', 'Trem','Metro'],
    correta:0
},
{
    titulo: 'Cat',
    alternativa:['Cachorro', 'Coelho', 'Gato','Elefante'],
    correta:2
},
{
    titulo: 'Soccer',
    alternativa:['Basquete', 'Futebol', 'Boliche','Volei'],
    correta:1
},
{
    titulo: 'air plain',
    alternativa:['Paraquedas', 'Asa delta', 'Helicoptero','Aviao'],
    correta:3
}
]

let app = {
start: function(){
    this.Atualpos = 0;
    this.Totalpontos = 0;
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index)=>{
        element.addEventListener('click', ()=>{
            this.checaResposta(index); 
        });
    });
    this.atualizaPontos();
    app.mostraquestao(perguntas[this.Atualpos]);
},
mostraquestao: function(q){
    this.qatual = q;
    
    let tituloDiv = document.getElementById('titulo');
    tituloDiv.textContent = q.titulo;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativa[index];
    })
},

proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }
},

checaResposta: function(user){
    if(this.qatual.correta == user){
        this.Totalpontos++;
        this.mostraresposta(true);
    }
    else{
        this.mostraresposta(false);
    }
    this.atualizaPontos();
    this.proximaperg();
    this.mostraquestao(perguntas[this.Atualpos])
},

atualizaPontos: function(){
    let score = document.getElementById('pontos');
    score.textContent = `Sua pontuação é: ${this.Totalpontos}`;
},

mostraresposta: function(correto){
    let resultadoDiv = document.getElementById('resultado');
    let resultado = '';
    if(correto == true){
        resultado = 'Resposta Correta';
    }
    else{
        let pergunta = perguntas[this.Atualpos];
        let cindice = pergunta.correta;
        let ctexto = pergunta.alternativa[cindice];
        resultado = `Incorreto! A resposta certa: ${ctexto}`;
    }
    resultadoDiv.textContent = resultado;
}
};

app.start();