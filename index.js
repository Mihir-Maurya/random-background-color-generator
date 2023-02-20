const containerEl = document.querySelector(".container");
containerEl.style.backgroundColor = randomColorGenerator();
containerEl.innerText = randomColorGenerator();  
function randomColorGenerator(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "#";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        color +=chars[randomNum];
    }
    return color;
}