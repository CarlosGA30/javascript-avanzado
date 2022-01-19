let $btngatito=document.querySelector("#btn-gatito");
let $btnPerrito=document.querySelector("#btn-perrito");

$btngatito.addEventListener("click",()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp=>resp.json()).then(data=>{
        console.log(data);
        let imgGatito=document.createElement("img");
        imgGatito.className="img-gatito";
        imgGatito.src=data[0].url;
        document.body.appendChild(imgGatito);
        });

    console.log("no me presiones");
});

$btnPerrito.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp=>resp.json()).then(data=>{
        console.log(data);
        let imgPerrito=document.createElement("img");
        imgPerrito.className="img-gatito";
        imgPerrito.src=data.message;
        document.body.appendChild(imgPerrito);
        });

    console.log("no me presiones");
});

