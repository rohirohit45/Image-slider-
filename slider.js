const left = document.querySelector(".left_arw")
const right = document.querySelector(".right_arw");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image")
const len = image.length;
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
for(let i = 0; i < len;++i){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const remove_back = ()=>{
    buttons.forEach(button =>{
        button.style.backgroundColor = "transparent";
    })
}
buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        remove_back();
        slider.style.transform = `translateX(-${i*700}px)`;
        slideNumber = i+1;
        button.style.backgroundColor = "white";
    })
})

const lastslide = () => {
        slideNumber = len;
        buttons[slideNumber-1].style.backgroundColor = "white";
        slider.style.transform = `translateX(-${(slideNumber-1)*700}px)`;
};
const prevslide = ()=>{
    buttons[slideNumber-2].style.backgroundColor = "white";
    slider.style.transform = `translateX(-${(slideNumber-2)*700}px)`;
    slideNumber--;
};
const firstslide = () =>{
    slideNumber = 1;
    buttons[slideNumber-1].style.backgroundColor = "white";
    slider.style.transform = `translateX(0px)`;
};
const nextslide = ()=>{
    buttons[slideNumber].style.backgroundColor = "white";
    slider.style.transform = `translateX(-${slideNumber*700}px)`;
    slideNumber++;
};
left.addEventListener("click",()=>{
    remove_back();
    console.log(slideNumber);
    (slideNumber <= 1) ? lastslide() : prevslide();
})
right.addEventListener("click",()=>{
    remove_back();
    console.log(slideNumber);
    (slideNumber >= len) ? firstslide() : nextslide();
})








