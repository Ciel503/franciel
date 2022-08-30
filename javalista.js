
let dvc = document.getElementById("container");

//Turma 6
let novadv6 = document.createElement("div");
novadv6.id = "pdv6"

dvc.insertAdjacentElement("afterbegin", novadv6);

db.collection("6ºAno").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let dados = doc.data();
        console.log(dados.nome);

        novadv6.innerHTML += (
            "<div id='dvr1'>" +
            "nome: " + dados.nome + " <br><br>" +
            "1ºB: " + dados.b1 + " <br>" +
            "2ºB: " + dados.b2 + " <br>" +
            "3ºB: " + dados.b3 + " <br>" +
            "4ºB: " + dados.b4 + " <br>" +
            "Faltas: " + dados.faltas + " <br>" +
            "Obs: "+"<br>"+"........" + dados.obs + "<br> <hr>"

            + "</div>"



        );



    });
})

let pdv6 = document.getElementById("pdv6");
function ano6() {
    pdv6.style.display = "block";
    pdv8.style.display = "none";
    pdv.style.display = "none";
    pdv9.style.display = "none";
    
    
    
}




// Turma 7
let novadv = document.createElement("div");
novadv.id = "pdv"

dvc.insertAdjacentElement("afterbegin", novadv);

db.collection("7ºAno").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let dados = doc.data();
        console.log(dados.nome);

        novadv.innerHTML += (
            "<div id='dvr1'>" +
            "nome: " + dados.nome + " <br><br>" +
            "1ºB: " + dados.b1 + " <br>" +
            "2ºB: " + dados.b2 + " <br>" +
            "3ºB: " + dados.b3 + " <br>" +
            "4ºB: " + dados.b4 + " <br>" +
            "Faltas: " + dados.faltas + " <br>" +
            "Obs: "+"<br>"+"........" + dados.obs + "<br> <hr>"

            + "</div>"



        );



    });
})

let pdv = document.getElementById("pdv");
function ano7() {
    
    pdv.style.display = "block";
    pdv6.style.display = "none";
    pdv8.style.display = "none";
    pdv9.style.display = "none";

    
    
}

// 8 ano turma8
let novadv8 = document.createElement("div");
novadv8.id = "pdv8"

dvc.insertAdjacentElement("afterbegin", novadv8);

db.collection("8ºAno").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let dados = doc.data();
        console.log(dados.nome);

        novadv8.innerHTML += (
            "<div id='dvr1'>" +
            "nome: " + dados.nome + " <br><br>" +
            "1ºB: " + dados.b1 + " <br>" +
            "2ºB: " + dados.b2 + " <br>" +
            "3ºB: " + dados.b3 + " <br>" +
            "4ºB: " + dados.b4 + " <br>" +
            "Faltas: " + dados.faltas + " <br>" +
            "Obs: "+"<br>"+"........" + dados.obs + "<br> <hr>"

            + "</div>"



        );



    });
})

let pdv8 = document.getElementById("pdv8");
function ano8() {
    pdv6.style.display = "none";
    pdv9.style.display = "none";
    pdv.style.display = "none";
    pdv8.style.display = "block";
    
    
    
}

//turma 9 nono ano
let novadv9 = document.createElement("div");
novadv9.id = "pdv9"

dvc.insertAdjacentElement("afterbegin", novadv9);

db.collection("9ºAno").onSnapshot((snapshot) => {
    snapshot.forEach((doc) => {
        let dados = doc.data();
        console.log(dados.nome);

        novadv9.innerHTML += (
            "<div id='dvr1'>" +
            "nome: " + dados.nome + " <br><br>" +
            "1ºB: " + dados.b1 + " <br>" +
            "2ºB: " + dados.b2 + " <br>" +
            "3ºB: " + dados.b3 + " <br>" +
            "4ºB: " + dados.b4 + " <br>" +
            "Faltas: " + dados.faltas + " <br>" +
            "Obs: "+"<br>"+"........" + dados.obs + "<br> <hr>"

            + "</div>"



        );



    });
})

let pdv9 = document.getElementById("pdv9");
function ano9() {
    pdv6.style.display = "none";
    pdv8.style.display = "none";
    pdv.style.display = "none";
    pdv9.style.display = "block";
    
    
    
}
