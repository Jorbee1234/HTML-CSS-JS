document.addEventListener("DOMContentLoaded", () => {

    //Carregar cards
    const cardArray = [
        {
            name: 'ash',
            img: 'images/ash.png'
        },
        {
            name: 'ash',
            img: 'images/ash.png'
        },
        {
            name:'charmander',
            img: 'images/charmander.png'
        },
        {
            name:'charmander',
            img: 'images/charmander.png'
        },
        {
            name:'eevee',
            img: 'images/eevee.png'
        },
        {
            name:'eevee',
            img: 'images/eevee.png'
        },
        {
            name:'gengar',
            img: 'images/gengar.png'
        },
        {
            name:'gengar',
            img: 'images/gengar.png'
        },
        {
            name:'greninja',
            img: 'images/greninja.png'
        },
        {
            name:'greninja',
            img: 'images/greninja.png'
        },
        {
            name:'lucario',
            img: 'images/lucario.png'
        },
        {
            name:'lucario',
            img: 'images/lucario.png'
        },
        {
            name:'pikachu',
            img: 'images/pikachu.png'
        },
        {
            name:'pikachu',
            img: 'images/pikachu.png'
        },
        {
            name:'piplup',
            img: 'images/piplup.png'
        },
        {
            name:'piplup',
            img: 'images/piplup.png'
        },
        {
            name:'trecko',
            img: 'images/trecko.png'
        },
        {
            name:'trecko',
            img: 'images/trecko.png'
        },
        {
            name:'zorua',
            img: 'images/zorua.png'
        },
        {
            name:'zorua',
            img: 'images/zorua.png'
        }
        
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');

    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var pares = [];

    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/card.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src','images/card.png');
            cards[optionTwoId].setAttribute('src','images/card.png');
            alert("Você já clicou nessa imagem");
        }
        else if(cardsChosen[0] == cardsChosen[1]){
            alert("Você formou um par");
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTwoId].setAttribute('src','images/white.png');
            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionTwoId].removeEventListener('click',flipCard);
            pares.push(cardsChosen);
        }
        else{
            cards[optionOneId].setAttribute('src','images/card.png');
            cards[optionTwoId].setAttribute('src','images/card.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = pares.length;

        if( pares.length == cardArray.length/2){
            resultDisplay.textContent = "Parabéns! Você ganhou!";
        }


    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img); 
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch,500)
        }

    }

    createBoard()
})