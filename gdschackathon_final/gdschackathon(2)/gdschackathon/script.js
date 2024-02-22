function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var pincode = document.getElementById("pincode").value;
    var password = document.getElementById("password").value;
    if(name === '' || phone === '' || pincode === '' || password === ''){
        alert("Enter all the credentials");
        return false;
    }
    window.location.replace('login.html');
    return false;
    
}   