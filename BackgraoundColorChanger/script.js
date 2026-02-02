const colorChangerBtn = document.querySelector('.bgColorChanger');
const resetColorBtn = document.querySelector('.resetColor');
const bodyElement = document.querySelector('body');
const unlimitedColors = document.querySelector(".ultColors");

const text = "0123456789ABCDEF";
let hexa = "#"; 




const chnageCOlor = () => {

    randomColor()
    
    bodyElement.style.backgroundColor = hexa
    console.log(hexa)
    hexa = "#"
}

const randomColor = () => {
    
    for(i = 0; i<6; i++){
        
        const color = Math.floor(Math.random()*16);
        
        hexa +=  text[color];
        console.log(hexa);
        
        
        // return hexa
    }
    
}

let resetbtn = false;
const resetColor = () => {
    resetbtn = true;
    bodyElement.style.backgroundColor = "#000000";
}

const unlimitedColorMethod = () => {
    const ultiColorMethos = setInterval(() => {
        for(i = 0; i<6; i++){
            
            const color = Math.floor(Math.random()*16);
            
            hexa +=  text[color];
            console.log(hexa);
            
            
            // return hexa
        };
        
        bodyElement.style.backgroundColor = hexa
        hexa = "#"
        if (resetbtn){
            
            clearInterval(ultiColorMethos);
            bodyElement.style.backgroundColor = "#000000";
            resetbtn = false;
        }
    },10);
    
};

colorChangerBtn.addEventListener("click",chnageCOlor);
resetColorBtn.addEventListener('click',resetColor)
unlimitedColors.addEventListener("click",unlimitedColorMethod);