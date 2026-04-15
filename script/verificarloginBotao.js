function irPaginaDeLogin() {

    const logado = localStorage.getItem("logado")
    const adm = localStorage.getItem("adm")
    
    if (logado == "true") {
        if (adm == "true") {
            window.location.href = "admin.html"
        }else{
            window.location.href = "usuario.html"
        }
    } else {
        window.location.href = "index.html";
    }
}