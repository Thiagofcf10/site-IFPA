const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)


let curso = document.querySelector("#curso").value;
let turma = document.querySelector("#turma").value;
let nome = document.querySelector("#nome").value
let matricula = document.querySelector("#matricula").value


async function Postdados() {


const { data, error } = await _supabase
  .from('alunos')
  .insert([
    { nome_aluno: nome },
    { matricula: matricula },
    { curso: curso },
    { turma: turma },

 
  ])
  .select()


}
