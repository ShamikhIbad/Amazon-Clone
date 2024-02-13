const imgs = document.querySelectorAll('#headerSlider ul img');
const arrowleft = document.querySelector('.iconleft');
const arrowright = document.querySelector('.iconright');
const recContainerScroll= document.querySelectorAll('.rectangleBoxSliding');


let image = 0;

function imageSlide(){
    for(let i=0 ; i<imgs.length ; i++){
      imgs[i].style.display= 'none';
    }
    imgs[image].style.display= 'block';
}
imageSlide();

arrowleft.addEventListener("click",(e)=>{
    if(image > 0){
        image--;
    }else{
        image = imgs.length-1;
    }
    imageSlide();
})

arrowright.addEventListener("click",(e)=>{
    if(image < imgs.length-1){
        image++;
    }else{
         image = 0;
    }
    imageSlide();
})


/* NOW JS OF RECTANGLEBOXSLIDING */

for(const singlePic of recContainerScroll){
    singlePic.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        singlePic.scrollLeft += evt.deltaY;
    })
}