const corpoSobre = document.getElementById("sobre");
const exibeSobre = (id, titulo, imagePath, mensagem) => {
    const divLinha = document.createElement('div');
    const conteudoSobre = `
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

/***************** informacao **************************/
const informacao = document.getElementById("informacao");
const accordion = document.getElementsByClassName("accordion");

const exibeInformacao = (id, descricao, empresa, mensagem) => {
    const linhaInformacao = document.createElement("div");

    const conteudoInformacao = `
        <button class="accordion">${descricao}</button>
        <div class="panel">
            <p>${mensagem}</p>
        </div>
    `;

    linhaInformacao.innerHTML = conteudoInformacao;
    return linhaInformacao;
}

listarInformcao().then(exibe => {
    exibe.forEach((item, index) => {
        informacao.appendChild(exibeInformacao(item.id, item.descricao, item.empresa, item.mensagem))
        accordion[index].addEventListener("click", event => {
            accordion[index].classList.toggle("active");
            const panel = accordion[index].nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

        })
    })
})