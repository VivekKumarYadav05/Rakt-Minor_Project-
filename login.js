function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if((username=="rakt" || username=="rakt@gmail.com" )&& password=="rakt@"){
        window.open("index.html");
        return false;
    }
    else{
        alert("Please enter a valid username or password");
        window.open("login.html");
        
    }

}