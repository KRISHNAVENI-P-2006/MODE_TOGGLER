let body=document.querySelector('body');
let curr="light";
let btn=document.querySelector('button');
let change=()=>{
    if(curr=="light"){
        curr="dark";
        body.style.backgroundColor="Black";
        console.log("Dark");
    }
    else{
        curr="light";
        body.style.backgroundColor="White";
        console.log("Light");
    }
}
btn.addEventListener("click",change);
