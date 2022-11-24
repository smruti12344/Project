var countInterval;

// here we start code for start counter

function startCounter(){
    var number =parseInt(document.getElementById("number").value);
    console.log(number);
    if(isNaN(number)){
        alert("please enter a number");
        //this is important for the condition when a counter is running and u enter a wrong input for new counter
    clearInterval(countInterval);
    return;
    }
    // here we check number
    if(number<1 || number>99999){
        alert("Range out of bound");
        clearInterval(countInterval);
        return;
    }
    // here we access  the current and next number
    var currentNode=document.querySelectorAll(".counter .current");
    var nextNode = document.querySelectorAll(".counter .next");
    var count=0;

    // if user clicks on "start counter" button again- remove this function and below lines if u dont consider this situation
    resetNumber(currentNode,nextNode,5);

    // clear the previous interval that was running
    clearInterval(countInterval);

    countInterval=setInterval(function(){
        if(count==number){
            clearInterval(countInterval);
            alert("counter has stoped");
            return;
        }
        increaseCount(currentNode,nextNode,4);
        count++;
    },1000);
    
}
// here we reset the number 
function resetNumber(currentNode,nextNode,end){
    for(var i=0;i<end;i++){
        currentNode[i].innerText=0;
        nextNode[i].innerText=1;
    }
}
// here we incerase count
function increaseCount(currentNode,nextNode,index){
    let current = currentNode[index];
    let next = nextNode[index];
    if(current.innerText==9){
        increaseCount(currentNode,nextNode,index-1);
    }
    next.classList.add("animate");

    setTimeout(function(){
        current.innerText=next.innerText;
        next.classList.remove("animate");
        next.innerText =parseInt(next.innerText)+1;
        if(next.innerText>9){
            next.innerText=0;
        }
    },500);
}
