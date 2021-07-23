let amount = document.getElementById("amount"),
    myRange = document.getElementById("myrange"),
    selector = document.getElementById("selector"),
    progress = document.getElementById("progress"),
    myLabel = document.getElementById("label"),
    myBall = document.getElementById("ball");

amount.textContent = "$"+ myRange.value;
myRange.oninput = function(){
    selector.style.left = myRange.value+"%";
    
    progress.style.width=myRange.value+"%"; 
    amount.textContent = "$"+ myRange.value;
}

myLabel.onclick = function(){
    myLabel.classList.toggle("active");
}