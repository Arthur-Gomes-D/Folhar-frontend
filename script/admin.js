function EAdmin(){
    const admin = localStorage.getItem("adm")
    if(admin == "false"){
        window.location.href = "index.html"
        
    }
}
EAdmin()