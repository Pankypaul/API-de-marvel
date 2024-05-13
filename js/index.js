const publicKey = "6128efe0f03d1989a4a6f5e4ecb82add";
const privateKey = "15968d4932a861a92e25f365c91c5be327b8488f";

//Funcion para generarr el hash necesario para la autenticación
const generateHash = (timestamp, privatekey, publicKey)=> {
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
    return hash;

}

//Función para hace una solicitud a la API de Marvel
const getMarvelData = (offset) =>{

    const timestamp = new Date ().getTime().toString();
    const hash = generateHash(timestamp, private, publicKey);
    const limit = 20;
    const apiUrl= ``
    fetch(apiurl)
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response aws not ok')
            }
            return response.json();
        })
        .then ((data)=>{
            console.log('There was a problem with the fetch operation:',error);

        });
}
const renderHeroes = (heroes)=>{

}