const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)


const dados = document.querySelector('dados_user');
const nome = document.getElementById('nome');
const matricula = document.querySelector('matricula');
const curso = document.querySelector('curso');
const turma = document.querySelector('turma');


async function infouser() {

  const { data, error } = await _supabase
    .from('alunos')
    .select('*')
  console.log(data)
  
  return data;

}
infouser()




function gett(d) {

  const dadosnome = `<h2> usuario ${d.id} e ${d.nome_aluno} e ${d.matricula} ${d.curso} ${d.turma}${d.user}</h2>`

  nome.innerHTML += dadosnome
}


async function li() {
  const todos = await infouser()

  todos.forEach(el => {
    gett(el)

  });
}
li()