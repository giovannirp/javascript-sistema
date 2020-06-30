const listarClientes = () => {
    return fetch('http://localhost:3000/clientes')
        .then(res => {
            return res.json()
        })
        .then(json => {
            return json;
        })
}

const cadastrarClientes = (nome, cpf) => {
    const Json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })
        .then(resp => {
            return resp.body
        })
}


const deletaCliente = id => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: 'DELETE'
    })
}

const listarSobre = () => {
    return fetch("http://localhost:3000/sobre")
        .then(res => {
            return res.json();
        })
        .then(json => {
            return json;
        })
}

const listarInformcao = () => {
    return fetch("http://localhost:3000/informacao")
        .then(res => {
            return res.json();
        })
        .then(json => {
            return json;
        })
}

const listaFaq = () => {
    return fetch("http://localhost:3000/faq")
        .then(res => {
            return res.json();
        })
        .then(json => {
            return json;
        })
}

const listaProdutos = () => {
    return fetch("http://localhost:3000/cursos")
        .then(res => {
            return res.json();
        })
        .then(json => {
            return json;
        })
}

const detalheProdutos = id => {
    return fetch(`http://localhost:3000/cursos/${id}`,
        {
            method: 'GET'
        })
        .then(resposta => {
            return resposta.json();
        })
}