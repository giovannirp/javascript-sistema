const removeCliente = id => {
    if (confirm("Deseja deletar um cliente ?")) {
        deletaCliente(id);
    }
}
const corpoTabela = document.querySelector("[data-conteudo-tabela]");
const exibeCliente = (id, nome, cpf) => {
    const linha = document.createElement('tr');
    const conteudoLinha =
        `
        <td>${id}</td>
        <td>${nome}</td>
        <td>${cpf}</td>
        <td><button class="btn btn-danger red" onclick="removeCliente(${id})">Excluir</button></td>
    `;
    linha.innerHTML = conteudoLinha;
    return linha;
}

listarClientes().then(exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.id, indice.nome, indice.cpf))
    })
}

)