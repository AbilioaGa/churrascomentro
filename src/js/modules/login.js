function login() {
  document.addEventListener("DOMContentLoaded", () => {
    function checkLogin() {
      const loginButton = document.querySelector("#login-button");
      loginButton.addEventListener("click", () => {
        const email = document.getElementById("floating_email").value;
        const password = document.getElementById("floating_password").value;

        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
          document.getElementById("result-button").click();
        } else {
          console.log("Credenciais inválidas. Por favor, verifique seu email e senha.");
        }
      });
    }
    checkLogin();
  });
}

export default login;