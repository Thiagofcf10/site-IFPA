
_supabase.auth().anAuthStateChanged(user => {

    if (!user) {
        window.location.href = "index.html"
    }

    else
        window.location.href = "login.html"

})



let { data, error } = await _supabase.auth.signInWithPassword({
    email: email,
    password: senha,

});