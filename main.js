let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px';

//tag.className grabs first instance of tag with the className.

let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = 'green';

let hiddenDino = document.querySelector('#hide-me');
hiddenDino.style.display = 'none';

let firstDino = document.querySelector('#triceratops');
firstDino.style.width = '324px';


//EVENT LISTENERS

spanMess.addEventListener('click', function(){
    spanMess.style.color = 'orange';
});

firstDino.addEventListener('click', function(){
    firstDino.style.border="3px solid red" ;
})

let featherDino = document.querySelector('#feathers');
featherDino.addEventListener('click', function(){
    featherDino.style.opacity = 0.5;
})


let rowOfDinos = document.querySelector('#row');
rowOfDinos.addEventListener('click', function(){
    rowOfDinos.style.background = 'blue';
})

let biggyDino = document.querySelector('#biggify');
biggyDino.addEventListener('mouseover', function(){
    biggyDino.style.width = '200px';
});

// added a mouseleave event that resizes to original size
biggyDino.addEventListener('mouseleave', function(){
    biggyDino.style.width = '162px';
});

let row = document.querySelector('#row');
let swColorBtn = document.querySelector('#toggle');

row.style.background = 'white';
swColorBtn.addEventListener('click', function(){
        console.log('Testing button');
        if(row.style.background === 'white'){
            row.style.background = 'purple';
        } else if(row.style.background === "purple"){
            row.style.background = 'white';
        };

    });
    
    // if(row.style.background === ''){
    //     row.style.background = 'red';
    // } else {
    //     row.style.background = 'white';
    // }
    
// });

   

// let switchBG = document.querySelector('#toggle');

// switchBG.addEventListener('click', resetBG);

// function resetBG(){
//     rowOfDinos.style.background = 'white';

