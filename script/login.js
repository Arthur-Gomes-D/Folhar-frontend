document.querySelector(".formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("EmailDoUsuario").value;
  const senha = document.getElementById("SenhaDoUsuario").value;
 

  const response = await fetch(`http://localhost:3000/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha})
  });

  if (response.ok) {
    alert("Jogo cadastrado!");
    e.currentTarget.reset();
  } else {
    alert("Erro ao cadastrar jogo.");
  }
});