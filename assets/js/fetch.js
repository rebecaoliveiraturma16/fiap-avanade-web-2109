const cep = document.querySelector("#cep");

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "");

    if(search.length  < 8 ){
        alert("CEP inválido!");
        cep.focus();
        return;
    }

    const options = {
        method:"GET",
        mode: "cors",
        cache:"default"
    }
    //recurso assíncrono retorna uma promise por que eu não sei se vai funcionar.
    fetch (`https://viacep.com.br/ws/${search}/json`, options)

    });