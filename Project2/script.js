let flag=0;
function controller(x){
    flag=flag+x;
    slideshow(flag);

}

slideshow(flag);

function slideshow(num){
    let slides=document.getElementsByClassName("bigimage");
    if(num>slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;

    }
    //console.log(slides)
    for(let y of slides){
        y.style.display="none";
    }
   




    slides[num].style.display="block";

}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
