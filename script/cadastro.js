document.querySelector(".formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeDeUsuario").value;

  const email = document.getElementById("EmailDoUsuario").value;
  
  const senha = document.getElementById("senha").value;

  const cpf = document.getElementById("cpfDoUsuario").value;
  
  const telefone = document.getElementById("telefone").value;
  
  const rua = document.getElementById("enderecoDoUsuario").value;
  
  const numero= document.getElementById("numeroDaCasaDoUsuario").value;
  
  const bairro = document.getElementById("bairoDoUsuario").value;
  
  const img = document.getElementById("imgDoUsuario").value;

  const response = await fetch(`http://localhost:3000/api/cliente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        nome, email, telefone, rua, numero, bairro, img, senha, cpf
    })
  });

  if (response.ok) {
    alert("usuario cadastrado!");
    e.currentTarget.reset();
    console.log("usuario cadastrado")
  } else {
    alert("Erro ao cadastrar usuario.");
  }
});