function cek()
{
    if (document.login.Email.value=="" && document.login.pass.value=="") 
    {
        alert("Email dan Password harus diisi");
        document.login.Email.focus();
        return false;
    }
    else if (document.login.Email.value=="") 
    {
        alert("Email harus diisi");
        document.login.Email.focus();
        return false;
    }
    else if (document.login.pass.value=="")
    {
        alert("Password harus diisi");
        document.login.pass.focus();
        return false;
    }
    else{
        return true;
        document.location("index.html");
    }
}


