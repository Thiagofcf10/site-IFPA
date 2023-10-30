const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)

const listprojetos = document.querySelector(".lista");
const inputpesqui = document.querySelector("");

/*async function getlista() {
    const listagem = await fetch(_supabase);

    const data = await listagem.json();

    data.map((post) => {
        const div = document.createElement('div');
        const nome_projetos = document.createElement('h1');
        const nome_pesquisadores = document.createElement('h2');
        const data_publicacao = document.createElement('h2');
        const orientador = document.createElement('h2');
        const area_de_pesquisa = document.createElement('h2');

        nome_projetos.innerHTML.post.nome_projetos;
        nome_pesquisadores.innerHTML.post.nome_pesquisadores;
        data_publicacao.innerHTML.post.data_publicacao;
        orientador.innerHTML.post.orientador;
        area_de_pesquisa.innerHTML.post.area_de_pesquisa;

        div.appendChild(nome_projetos);
        div.appendChild(nome_pesquisadores);
        div.appendChild(data_publicacao);
        div.appendChild(orientador);
        div.appendChild(area_de_pesquisa);

        postlist.appendChild(div);

    });
}
getlista()*/
/*
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const div = document.getElementById('#lista');

fetch(supabaseUrla)
.then((resp) => resp.json())
.then(function(data) {
  let #lista = data.results;
  return #lista.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});*/