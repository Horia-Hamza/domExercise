

var imgList =Array.from (document.querySelectorAll('.item img'));
var lightBox = document.querySelector('.lightbox');
var lighetBoxInner = document.querySelector('.lighetboxinner');
var brevBtn =document.getElementById('prev');
var nextBtn = document.getElementById('next');
var closeBtn = document.getElementById('close');
var currentImgIndex =0;

for(var i =0 ; i<imgList.length ; i++){

    imgList[i].addEventListener('click' , function(e){

        var imgUrl = e.target.getAttribute('src');

        lighetBoxInner.style.backgroundImage =`url(${imgUrl})`;

        lightBox.classList.replace('d-none' , 'd-flex')
       var currentImgIndex = imgList.indexOf(e.target);
        console.log(currentImgIndex);
    }) 
}

function nextFunc() {
    currentImgIndex ++;
    if (currentImgIndex==imgList.length){
        currentImgIndex=0;
    }
   var imgUrl = imgList[currentImgIndex].getAttribute('src');
   lighetBoxInner.style.backgroundImage =`url(${imgUrl})`;
}
nextBtn.addEventListener('click' , nextFunc);

function prevFunc() {
    currentImgIndex --;
    if (currentImgIndex==-1){
        currentImgIndex=imgList.length-1;
    }
   var imgUrl = imgList[currentImgIndex].getAttribute('src');
   lighetBoxInner.style.backgroundImage =`url(${imgUrl})`;
}
brevBtn.addEventListener('click' ,prevFunc);

function closefunc() {
    lightBox.classList.replace('d-flex' , 'd-none')

}

closeBtn.addEventListener('click' , closefunc);

document.addEventListener('keydown' , function(e){
    console.log(e.code);
 if(e.code=='ArrowRight') {
    nextFunc()
 }
 else if(e.code=='ArrowLeft'){
    prevFunc()
 }
  else if(e.code=='Escape'){
    closefunc() 
  }
})


lightBox.addEventListener('click', function(e){
    if(e.target != lighetBoxInner && e.target!=nextBtn && e.target!=brevBtn){
        closefunc()
    }
    
})



   

