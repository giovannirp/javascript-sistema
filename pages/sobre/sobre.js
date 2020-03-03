const corpoSobre = document.getElementById("sobre");

const exibeSobre = (id, titulo, imagePath, mensagem) => {
    const divLinha = document.createElement('div');
    const conteudoSobre = `
        <div><img src="${imagePath}" /></div>
        <div><strong>${titulo}</strong></div>
        <div><p>${mensagem}</p></div>
    `;
    divLinha.innerHTML = conteudoSobre;
    return divLinha;
}

listarSobre().then(exibe => {
    exibe.forEach(indice => {
        corpoSobre.appendChild(exibeSobre(indice.id, indice.titulo, indice.imagePath, indice.mensagem))
    })
})