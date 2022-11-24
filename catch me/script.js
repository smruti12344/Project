// access the element by id
var box = document.getElementById("box");
box.style.top= box.offsetTop + "px";
box.style.left = box.offsetLeft + "px";

// box.style.top= Math.floor(Math.random()*1).toString()+"px";
// box.style.left= Math.floor(Math.random()*1).toString()+"px";
box.addEventListener('mousemove', function(){
    let viewport_width=window.innerWidth;
    let viewport_height=window.innerHeight;

    let box_height=box.clientHeight;
    let box_width=box.clientWidth;


    box.style.top = box.offsetTop/(viewport_height-box_height)+"px";
    box.style.left = box.offsetLeft/(viewport_width-box_width)+"px";
    console.log(box.offsetTop);
    console.log(box.offsetLeft);
    // box.style.top= Math.floor(Math.random()*(viewport_height-box_height)).toString()+"px";
    // box.style.left = Math.floor(Math.random()*(viewport_width-box_width)).toString()+"px";
})