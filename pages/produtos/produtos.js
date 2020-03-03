const corpoProduto = document.getElementById("produto");

const exibeProdutos = (id, titulo, tagCurso, imagePath, mensagem) => {
    const linhaProdutos = document.createElement("div");
    linhaProdutos.classList = "dd"

    const conteudoProduto = `
        <div class="card">
            <div class="card-image">
            <img src="${imagePath}" />
            <span class="card-title">${titulo}</span>
            <a href="produtos-detalhes.html?id=${id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <strong>${tagCurso}</strong>
            <p>${mensagem}</p>
            </div>
        </div>
    `;

    linhaProdutos.innerHTML = conteudoProduto;
    return linhaProdutos;
}

listaProdutos().then(exibe => {
    exibe.forEach(indice => {
        corpoProduto.appendChild(exibeProdutos(indice.id, indice.titulo, indice.tagCurso, indice.imagePath, indice.mensagem))
    })
})