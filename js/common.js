(function() {
    
    var percent = document.querySelectorAll(".value");
    console.log(percent);
    for (var i = 0; i < percent.length; i++) {
        percent[i].onclick = percentOnClick;
        
    }
}());
function percentOnClick() {
    var newPersentageValue = prompt("Введите новое значение", 100); 
    this.innerHTML = newPersentageValue;
}; 