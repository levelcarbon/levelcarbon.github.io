
function menuOpen(){
    document.getElementById("menu").style.right = "0";
    document.getElementById("menu").style.transition = "all .2s linear";
}

function menuClose(){
    document.getElementById("menu").style.right = "-100%";
    document.getElementById("menu").style.transition = "all .2s linear";
}