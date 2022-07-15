// consumir un servicion 

const URI='https://accounts.spotify.com/api/token'

const DATO1="client_id=355e45cd09704be1bc28a861c96d81bf"
const DATO2="client_secret=723650dc8f2c41f69e47ad95da202e1c"
const DATO3="grant_type=client_credentials"

const PETICION={
    method:"post",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:DATO1+'&'+DATO2+'&'+DATO3

}
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta);
    //armando el token 
    const TOKEN=respuesta.token_type+" "+respuesta.access_token
    console.log(TOKEN);



    
})
.catch(function(respuesta){
    console.log(respuesta);
})