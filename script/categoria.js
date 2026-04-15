// --- CATEGORIAS ---
async function carregarCategorias() {
  const response = await fetch(`http://localhost:3000/api/categoria`);
  const data = await response.json();

  document.getElementById("categoria").innerHTML = data
    .map(c => `
         <img src="${c.img}" alt="Ilustração de um livro">
                    <h3>Aventura</h3>
        <span>#${c.id} ${c.nome}</span>
        
        <a href="update_categoria.html?id=${c.id}" class="edit-icon" title="Editar categoria">
          <i class="bi bi-pencil-square"></i>
        </a>

        <i class="bi bi-trash delete-icon" title="Excluir categoria" onclick="excluirCategoria(${c.id})"></i>
      `)
    .join("");
}