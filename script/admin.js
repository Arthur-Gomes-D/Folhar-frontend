function EAdmin(){
    const admin = localStorage.getItem("adm")
    if(admin == "false"){
        window.location.href = "index.html"   
    }
}
EAdmin()
async function EAdmin() {
  const response = await fetch(`http://localhost:3000/cliente`);
  const data = await response.json();
  const select = document.getElementById("jogo-categoria_id");
  select.innerHTML = data
    .map(c => `<option value="${c.id}">${c.nome}</option>`)
    .join("");
}
