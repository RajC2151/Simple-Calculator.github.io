function display(value){
    document.getElementById("result").value+=value;
}
function clearScreen(){
    document.getElementById("result").value="";
}
function cal(){
    var a=document.getElementById("result").value;
    var r=eval(a);
    document.getElementById("result").value=r;
}