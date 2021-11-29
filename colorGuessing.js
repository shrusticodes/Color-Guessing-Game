
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');

window.addEventListener('load', function generateColor(){
      let color1 = '#';
    const colorArray1 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray1.length)];
        color1 += colorArray1[mathRandom]; 
    }
    let color2 = '#';
    const colorArray2 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray2.length)];
        color2 += colorArray2[mathRandom]; 
    }
    let color3 = '#';
    const colorArray3 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray3.length)];
        color3 += colorArray3[mathRandom]; 
    }
    let color4 = '#';
    const colorArray4 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray4.length)];
        color4 += colorArray4[mathRandom]; 
    }
    let color5 = '#';
    const colorArray5 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray5.length)];
        color5 += colorArray5[mathRandom]; 
    }
    let color6 = '#';
    const colorArray6 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray6.length)];
        color6 += colorArray6[mathRandom]; 
    }

    div1.style.background = color1;
    div2.style.background = color2;
    div3.style.background = color3;
    div4.style.background = color4;
    div5.style.background = color5;
    div6.style.background = color6;

    function randCol(){
        randomColors = [ color1, color2, color3, color4, color5, color6];
        return randomColors[Math.floor(Math.random() * randomColors.length)];
    }

    const headline = document.getElementById('GtC');

    let correctTurns = 0;
    let wrongTurns = 0;

    const top_container = document.getElementById('top-container');
    top_container.style.background  = randCol();


    randomColor = [color1, color2, color3, color4, color5, color6];

    
    const divs = document.querySelectorAll('.colorDiv');

    divs.forEach(el => el.addEventListener('click', function(){
        
            if(top_container.style.background === el.style.background){
                correctTurns++
                headline.innerHTML = `<h1>${correctTurns}</h1>`;
                generateColor();
            }else{
                wrongTurns++
            }
        
    }))

});
