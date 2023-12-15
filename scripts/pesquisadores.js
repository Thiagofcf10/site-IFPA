const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)


const lista = document.querySelector('#lista');
const integradores = document.querySelector("#integradores");
const extensao = document.querySelector("#extensao");
const conclusao = document.querySelector("#conclusao");
const todaslista = document.querySelector("#todaslista")


async function getlista(){

  const {data, error} = await _supabase
  .from('alunos')
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
    margin-bottom: 15px;
    margin-right: 20px;
    border-radius: 15px;
    height: 10%;
    width: 30%;
    
}
img{
  height: 35%;
  width: 35%;
}
.tituloL{
    background-color: #003C00;
    color: #8aeb8a;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 290%;
    padding: 2%;
    padding-left: 2%;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
}
.info{
    background-color: rgb(255, 255, 255);
    color: #003C00;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 190%;
    padding: 20px;
    padding-left: 2%;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
}
  @media screen and (max-width: 1950px) {
    .itens {
      color: rgb(255, 255, 255);
      background-color: #003C00;
      padding: 1%;
      margin-bottom: 15px;
      margin-right: 20px;
      border-radius: 15px;
      height: 10%;
      width: 100%;
    }
    img{
      height: 20%;
      width: 20%;
    }
  .tituloL{
      font-size: 270%;
      padding: 2%;
      padding-left: 2%;
  }
  .info{
      font-size: 170%;
      padding: 20px;
      padding-left: 2%;
      border-radius: 10px;

  }
}


</style>
<div class="itens">
  <img src="imagens/account_avatar_face_man_people_profile_user_icon_123197.svg">
  <h2 class="tituloL" data-id="${listaU.id}">Aluno:&nbsp;&nbsp;${   listaU.nome_aluno}</h2>
  <h3 class="info"> Matricula:&nbsp;${listaU.matricula}</h3>
  <h3 class="info"> Curso:&nbsp;${listaU.curso}</h3>
  <h3 class="info"> Turma:&nbsp;${listaU.turma}</h3>
  <h3 class="info"> Orientador&nbsp;${listaU.coordenador}</h3>
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