let susername="";//both are use to temepavally save the program
let spassword="";
function onclickbutton(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rpassword = document.getElementById('rpassword').value;
    if(username==="" || password===""){
        alert("Fill the both boxes");
        return;//it help to with out empty the box
    }
    if(password.length < 8){
        alert("password must be atleast 8 charactar")
        return;
    }
    if(rpassword.length < 8){
        alert("password must be atleast 8 charactar")
        return;
    }
    if(password==rpassword){
        susername=username;
        spassword=password;
        window.alert("Now login with your correct username and password");
    }
    else{
        window.alert("Enter correct password")
    }
}
function onclickbutton2(){
    const usernames = document.getElementById('usernames').value;
    const passwords = document.getElementById('passwords').value;
    const checkb = document.getElementById('checkb');
    if(usernames==="" || passwords===""){
        alert("Fill the both boxes");
        return;// it helps to dont think both are same (new and login are same)
    }
    if(passwords.length < 8){
        alert("Password must be atleast 8 charactar")
        return;
    }
    if(checkb.checked){
        
    }
    else{
        alert("Read about us and checked the remember");
        return;
    }
    if(usernames === susername && passwords === spassword || usernames === "surya" && passwords === "12223242"){
        window.location.href="result.html";
    }
    else{
        window.alert("Didn't have a account");
    }
}