function alugarLivro(){
    alert("Livro alugado")
}
function estaLogado(){
    const logado = localStorage.getItem("logado")
    if(logado == "false"){
        window.location.href = "usuario.html"
        
    }
}estaLogado()