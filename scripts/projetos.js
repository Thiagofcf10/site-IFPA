const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)
//const ul = document.createElement('ul');
//const li = document.createElement('li');


const lista = document.querySelector('#lista');
const integradores = document.querySelector("#integradores");
const extensao = document.querySelector("#extensao");
const conclusao = document.querySelector("#conclusao");
const todaslista = document.querySelector("#todaslista")


async function getlista(){

  const {data, error} = await _supabase
  .from('projetos')
  .select('*')
  console.log(data)


  return data
}

function listagem(listaU) {
  const itenslista = ` 
  <style>
  .itens {
      color: rgb(255, 255, 255);
      background-color: #003C00;
      padding: 1%;
      margin: 0px;
      margin-bottom: 15px;
      margin-right: 20px;
      margin-left: 40px;
      border-radius: 15px;
      
  }
  .tituloL{
      background-color: #003C00;
      color: #8aeb8a;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 35px;
      padding: 20px;
      padding-left: 2%;
      border-radius: 10px;
      margin-left: 20px;
      margin-right: 20px;
  }
  .info{
      background-color: rgb(255, 255, 255);
      color: #003C00;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 25px;
      padding: 20px;
      padding-left: 2%;
      border-radius: 10px;
      margin-left: 20px;
      margin-right: 20px;
  }
  .tituloL text { color: aqua;}

</style>
<div class="itens">
  <h2 class="tituloL" data-id="${listaU.id}">Nome do projeto:&nbsp;&nbsp;${   listaU.nome_projetos}</h2>
  <h3 class="info">Area de pesquisa:&nbsp;${listaU.area_de_pesquisa}</h3>
  <h3 class="info">Nome do pesquisador:&nbsp;${listaU.nome_pesquisadores}</h3>
  <h3 class="info"> Data de publicação da pesquisa:&nbsp;${listaU.data_publicacao}</h3>
  <h3 class="info"> Orientador da pesquisa:&nbsp;${listaU.orientador}</h3>
</div>
`
todaslista.innerHTML += itenslista

}

async function listageral(){
  const todos = await getlista()

  todos.forEach(el => {
    listagem(el)
    
  });
}
listageral()






