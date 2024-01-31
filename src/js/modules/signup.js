function signup() {
  document.addEventListener("DOMContentLoaded", () => {
    function cep() {
      const limparFormulario = () => {
        document.getElementById("rua").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("uf").value = "";
      };

      const preencherFormulario = (endereco) => {
        document.getElementById("rua").value = endereco.logradouro;
        document.getElementById("bairro").value = endereco.bairro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("uf").value = endereco.uf;
      };

      const exibirErro = (mensagem) => {
        const mensagemErro = document.getElementById("error-message");
        mensagemErro.textContent = mensagem;
        mensagemErro.classList.remove("hidden");
      };

      const eNumero = (numero) => /^[0-9]+$/.test(numero);

      const cepValido = (cep) => cep.length == 8 && eNumero(cep);

      const pesquisarCep = async () => {
        limparFormulario();
        document.getElementById("error-message").innerHTML = "";

        const cep = document.getElementById("cep").value.replace("-", "");
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        if (cepValido(cep)) {
          try {
            const response = await fetch(url);
            const endereco = await response.json();
            if (endereco.hasOwnProperty("erro")) {
              exibirErro("CEP não encontrado!");
            } else {
              preencherFormulario(endereco);
            }
          } catch (error) {
            console.error("Erro ao buscar o CEP:", error);
            exibirErro("Erro ao buscar o CEP!");
          }
        } else {
          exibirErro("CEP incorreto!");
        }
      };

      document.getElementById("cep").addEventListener("focusout", pesquisarCep);
    }

    function saveToLocalStorage() {
      const form = document.getElementById("signup-modal");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cep = document.getElementById("cep").value;
        const rua = document.getElementById("rua").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;
        const uf = document.getElementById("uf").value;

        const userData = {
          email: email,
          password: password,
          cep: cep,
          rua: rua,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
      });
    }
    cep();
    saveToLocalStorage();
  });
}

export default signup;
