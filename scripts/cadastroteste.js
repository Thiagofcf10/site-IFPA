const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'



// Insere os dados no banco de dados Supabase
const nomeU = document.getElementById('nomeU');
const matriculaA = document.getElementById('matriculaA');
const cursoA = document.getElementById('cursoA');
const turmaA = document.getElementById('turmaA');

const _supabase = supabase.createClient(supabaseUrl, supabaseKey)



async function dadosP() {
  

const {data, error } = await _supabase.from('alunos').insert(
  [{ 
      nome_aluno: nomeU.value,
      matricula: matriculaA.value,
      curso: cursoA.value,
      turma: turmaA.value, }]);
 
if (error){
  alert("algo deu errado");
  console.log(error) }

  else {
    console.log(data);
}


}

