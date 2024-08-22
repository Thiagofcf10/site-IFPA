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
    
    async function sign() {
        
        const _supabase = supabase.createClient(supabaseUrl, supabaseKey)
    
          
      const { data, error } = await _supabase.auth.signInWithPassword({
        email: emailC.value,
        password: senha.value,
      })
      if (error){
        console.log(error);
        alert('usuaruio não cadastrado')
        setTimeout(() => {
          window.location.href = 'cadastroA.html'
        }, 5000)
      }
      else{
        console.log(data);
        alert('logado com sucesso')
        setTimeout(() => {
          window.location.href = 'index.html'
        }, 10000)
      }
    }   
  

  
/*   function loginuser() {
      _supabase.auth.gerSession().then(({data: {session}}) => {
        setSession(session);
      })
      
      _supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
      })
    
    }
                  setTimeout(() => {
              window.location.href = 'index.html'
            }, 1000)
          }

              async function loginuser(){
      const localuser = await _supabase.auth.getSession();
      console.log(localuser);
    }
  
)
*/



    
 /* else {


  alert('usuario não logado');
  setTimeout(() => {
    window.location.href = 'login.html'
  }, 1000)

}*/

/*
      const { error: profileError } = await _supabase.from('usuarios').insert([{ id: data.user.id, email: email }]);
 
            if (profileError) {
                throw profileError;
            }
 
*/
