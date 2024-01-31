function recoverPassword() {
  document.addEventListener("DOMContentLoaded", function () {
    const recoverPasswordButton = document.getElementById("recoverPasswordLink");

    recoverPasswordButton.addEventListener("click", function (event) {
      event.preventDefault();

      // Obtém o e-mail digitado pelo usuário
      const emailInput = document.getElementById("emailRecoverPasswordLink");
      const userEmail = emailInput.value.trim();

      // Verifica se o e-mail do usuário é igual ao do Local Storage
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      if (!storedUserData || userEmail !== storedUserData.email) {
        console.error("O e-mail fornecido não corresponde ao e-mail armazenado.");
        return;
      }

      // Obtém a senha do Local Storage
      const storedPassword = storedUserData.password;

      // Envia a solicitação para a API
      fetch("https://churrascomentro-api-email.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: storedPassword, // Enviando a senha recuperada do Local Storage
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao enviar e-mail.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Resposta da API:", data);
          // Exibir mensagem de sucesso para o usuário
        })
        .catch((error) => {
          console.error("Erro na solicitação:", error);
          // Exibir mensagem de erro para o usuário
        });
    });
  });
}

export default recoverPassword;
