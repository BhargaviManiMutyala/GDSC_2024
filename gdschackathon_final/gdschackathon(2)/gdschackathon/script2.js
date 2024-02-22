function validate(){
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    if(mobile === '' || password === ''){
        alert("Enter all the credentials");
        return false;
    }
    if (checkbox.checked){
        window.location.replace('admin.html');
        return false;
    }
    alert('SUCCESS');
    window.location.replace('Userpage.html');
    return false;
}
