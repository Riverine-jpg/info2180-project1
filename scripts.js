/* Add your JavaScript to this file */
let check = 0;
let arr = new Array();
let sol = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let plays = 0;

(function(window,document,undefined){
    window.onload = init;
    function init(){
        
        var btn = document.getElementsByClassName("btn")[1];
        btn.addEventListener("click",function(event){
            event.preventDefault();
            var msg = document.getElementsByClassName("message")[0];
            var mail = document.getElementById("email").value
            if(validemail(mail)){
                msg.textContent = "Thank you! Your email address " + mail + " has been added to our mailing list!";
            }else{
                msg.textContent = "Please enter a valid email address.";
            }
            
        })
        
    }
})(window,document,undefined)

function validemail(mail){
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(mail);
}