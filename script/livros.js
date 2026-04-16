function irParaOLivro() {
    window.location.href= "livro.html";
}
// --- LIVROS ---
async function carregarLivro() {
  const response = await fetch(`http://localhost:3000/api/livro`);
  const data = await response.json();

  document.querySelector(".areaDosLivros").innerHTML = data
    .map(c => `
                                <div class="livro" onclick="irParaOLivro()">
                    <div class="capa">
                        <img src="${c.img}" alt="capa">
                    </div>
                    <div class="textos">
                        <h3>${c.nome}</h2>
                            <p>Por ${c.autor_id}</p>
                    </div>
                </div>
      `)
    .join("");
}
carregarLivro();

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