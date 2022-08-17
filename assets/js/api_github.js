                                                                                                                            function renderiza_foto(foto) {
    const img_foto = document.getElementById('foto');
    img_foto.src = `${foto}`

}

function renderiza_nome(nome) {
    const h1_nome = document.getElementById('nome');
    h1_nome.innerHTML = `${nome}`
}

function renderiza_link(link) {
    const h2_link = document.getElementById('github');
    h2_link.href = `${link}`
}

const headers = new Headers();
headers.append('Authorization', 'token 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', {
    headers: headers
});

fetch("https://api.github.com/users/gusssouza", { headers: headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderiza_foto(data.avatar_url)
        renderiza_nome(data.name)
        renderiza_link(data.html_url)
    })

    .catch(error => {
        console.error('algo deu errado na requisição', error);
    })

function repos(repositorios) {
    const divrepo = document.getElementById('repo');
    divrepo.innerHTML += `
        <a href=${repositorios.html_url} class="repos" target="_blank">
        <div id="divRepo">
        ${repositorios.name}
        <br>
        <h3 class="linguagem"> Linguagem: ${repositorios.language}</h3>
        </div></a>
        `
}

fetch("https://api.github.com/users/gusssouza/repos", { headers: headers })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(repos)
     })



