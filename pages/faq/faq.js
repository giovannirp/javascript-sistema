const acordion = document.getElementsByClassName("accordion");
const corpoFaq = document.getElementById("faq");

const exibeFaq = (id, titulo, informacao) => {
    const linhaFaq = document.createElement("div");
    const conteudoFaq = `
        <button class="accordion">${titulo}</button>
        <div class="panel">
        <p>${informacao}</p>
        </div>
    `;

    linhaFaq.innerHTML = conteudoFaq;
    return linhaFaq;
}

listaFaq().then(exibe => {
    exibe.forEach((item, index) => {
        console.log(acordion)
        corpoFaq.appendChild(exibeFaq(item.id, item.titulo, item.informacao));
        acordion[index].addEventListener("click", event => {
            acordion[index].classList.toggle("active");

            const panel = acordion[index].nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })

    })
})
