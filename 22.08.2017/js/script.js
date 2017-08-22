
function myFunction() {
    var count=1;
    var x = document.createElement("INPUT");
    x.setAttribute("type", "Text");
    x.setAttribute("placeholder","Is yeri" + count++);
    count++;
    document.body.appendChild(x) ;
    x.style.display=("block")
    x.style.marginTop=("20px")
    var y = document.createElement("INPUT");
    y.setAttribute("type","button");
    y.setAttribute("value", "Clouse");
    y.setAttribute("click", function(){
     document.removeChild(input)
    })
    document.body.appendChild(y);
    
}