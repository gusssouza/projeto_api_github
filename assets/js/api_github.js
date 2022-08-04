

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

fetch("https://api.github.com/users/gusssouza", {headers: headers})                                
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderiza_foto(data.avatar_url)
        renderiza_nome(data.name)
        renderiza_link(data.html_url)

    })

    .catch(error => {                                                   
        console.error('algo deu errado na requisição', error);

    }

    )

function repos(repositorios) {
    const divrepo = document.getElementById('repo');
    divrepo.innerHTML += `
        <div id="divRepo">
        <a href=${repositorios.html_url} class="repos" target="_blank">${repositorios.name}</a><br>
        </div>
        `
}
fetch("https://api.github.com/users/gusssouza/repos", {headers: headers})                                
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(repos)


    })



