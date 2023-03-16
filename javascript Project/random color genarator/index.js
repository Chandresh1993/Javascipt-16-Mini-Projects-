const conatinerE1=document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerE1=document.createElement('div');
    colorContainerE1.classList.add("color-container");
    conatinerE1.appendChild(colorContainerE1);
    
}

randomColor();

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLendth=6;
    let colorCode=''
    let color =""
    for (let index = 0; index < colorCodeLendth; index++) {
        const randomNum= Math.floor(Math.random() * chars.length);
        colorCode +=chars.substring(randomNum, randomNum +1);
        console.log(colorCode, randomNum);
        
        
    }
}