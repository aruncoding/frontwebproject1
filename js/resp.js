// automatic slider javascript code
const txts = document.querySelector('.blogs-content-a').children,
txtsLen = txts.length;
let index=0;
const textInTimer=3000;
textOutTimer=2800;

function animateText(){
    for(let i=0; i<txtsLen; i++){
        txts[i].classList.remove('text-in', 'text-out');
    }
txts[index].classList.add('text-in');

setTimeout(function(){
    txts[index].classList.add('text-out');
},textOutTimer)


setTimeout(function(){

    if(index==txtsLen-1){
        index=0;
    }
    else{
        index++;
    }
    animateText()
},textInTimer);
}

window.onload = animateText;

// back to top javascript coding

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }

})


//toggle section javascript code

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
menu = document.querySelector('.navbar-menu');
search = document.querySelector('.navbar-search')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-resp')
    menu.classList.toggle('v-resp')
    search.classList.toggle('v-resp')
})
