
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(resp=>resp.json()).then(data=>{
        console.log(data);
        data.forEach(e => {
            creaCard(e.url,e.title);
        });
        });

    console.log("no me presiones");
    function creaCard(img,titulo){
        let divCard=document.createElement("div");
        let imgCard=document.createElement("img");
        let divBody=document.createElement("div");
        let tituloCard=document.createElement("h5");
        divCard.className="card";
        imgCard.className="card-img-top";
        divBody.className="card-body";
        tituloCard.className="card-text";
        imgCard.src=img;
        tituloCard.textContent=titulo;
        divCard.appendChild(imgCard);
        divBody.appendChild(tituloCard);
        divCard.appendChild(divBody);
        document.body.appendChild(divCard);
    }