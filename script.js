//Nawiązania do pliku css
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//event
keys.forEach(key=>{
    key.addEventListener("click",calculate)
});

//funkcja wywoływana przez event
function calculate()
{
        let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "";
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
    return;
    };

    if(buttonText==="DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        result.innerText = "";
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
    return;
    }

    if(buttonText==="="){
        result.innerText = eval(output.innerText)
        result.style.animation = "small 0.5s ease-in-out";
        output.style.animation = "big 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
            if(output.innerText===""){
                    result.innerText = "";
            }
    return;
    }

    else{
        output.textContent += buttonText;
    return;
    }


};

