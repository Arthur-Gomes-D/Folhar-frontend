function EUsuario() {
    const logado = localStorage.getItem("adm")

    if (logado == "false") {
        window.location.href = "index.html"
    }
}
EUsuario()