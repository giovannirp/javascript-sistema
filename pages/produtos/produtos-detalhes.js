const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const titulo = document.querySelector('.title-produto');
const mensagemProduto = document.querySelector('.mensagem-produto');
const tagProduto = document.querySelector('.tag-produto');
const divProdutoImg = document.querySelector('.produtoImg');
const imgCreate = document.createElement('img');

detalheProdutos(id).then(dados => {
    titulo.innerHTML = dados.titulo;
    mensagemProduto.innerHTML = dados.mensagemDetalhes;
    tagProduto.innerHTML = dados.tagCurso;
    divProdutoImg.src = dados.imagePath;
})

