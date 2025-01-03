const supabaseUrl = 'https://eklotjekflmuuqycnqnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrbG90amVrZmxtdXVxeWNucW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMzkxNjQsImV4cCI6MjAxMjkxNTE2NH0._WkAqYcJHdpBj0S-pgCreX9KvCxClKQc233t6qHIiOU'



/* if (senha == false ){
   alert('As senhas digite a senha!');
   return;
 }
   */
// Insere os dados no banco de dados Supabase
const emailC = document.getElementById('emailC');
const senha = document.getElementById('senha');
const nomeU = document.getElementById('nomeU');
const matriculaA = document.getElementById('matricula');
const cursoA = document.getElementById('curso');
const turmaA = document.getElementById('turma');



async function cadastro() {

  const _supabase = supabase.createClient(supabaseUrl, supabaseKey)


  const { data, error } = await _supabase.auth.signUp({
    email: emailC.value,
    password: senha.value,
    options: {
      data: {

      },
    }
  })

  if (error) {
    console.log(error);
    alert('erro no cadastro tente novamente')
    setTimeout(() => {
      window.location.href = 'cadastroA.html'
    }, 2000)
  }
  else {
    console.log(data);
    alert('Cadastrado com sucesso vc será redirecionado para pagina de login')
    setTimeout(() => {
      window.location.href = 'login.html'
    }, 2000)
  }
}


async function dadosP() {
  
const {data, error} = await _supabase.from('alunos').insert(
  {  email: emailC.value,
      nome_aluno: nomeU.value,
      matricula: matriculaA.value,
      curso: cursoA.value,
      turma: turmaA.value, });
 
if (error){
  alert("algo deu errado");
  throw error;}

  else {
    console.log(data);
    alert('sucesso')
}


}





