const formCadastroCliente = document.querySelector('[data-form-clientes]');

formCadastroCliente.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]').value;
    const cpf = event.target.querySelector('[data-cpf]').value;

    cadastrarClientes(nome, cpf);

})