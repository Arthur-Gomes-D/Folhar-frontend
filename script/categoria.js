// --- CATEGORIAS ---
async function carregarCategorias() {
  const response = await fetch(`http://localhost:3000/api/categoria`);
  const data = await response.json();

  document.querySelector(".categorias").innerHTML = data
    .map(c => `
                  <div class="categoria" onclick="window.location.href='livros.html'">
                    <img src="${c.img}"
                        alt="imagem da capa">
                    <h3>${c.nome}</h3>
                </div>
      `)
    .join("");
}
carregarCategorias();