function EUsuario() {
    const logado = localStorage.getItem("logado")

    if (logado == "false") {
        window.location.href = "index.html"
    }
}
EUsuario()