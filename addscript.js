function next() {
    let inpnome = document.getElementById("a");
    inpnome.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("b1").focus();
        }
    });

    b1.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("b2").focus();
        }
    });
    b2.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("b3").focus();
        }
    });
    b3.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("b4").focus();
        }
    });
    b4.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("faltas").focus();
        }
    });
    faltas.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("obs").focus();
        }
    });
    obs.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("btn1").click();
        }
    });

}
next()

let ano = document.getElementById("ano");
let auxAno = 0;


function a6() {
    ano.innerText = "6° ANO" 
    auxAno = "6° ANO";   
    auxF = "6ºAno"; 
}
function a7() {
    ano.innerText = "7° ANO" 
    auxAno = "7° ANO";  
    auxF = "7ºAno";  
}
function a8() {
    ano.innerText = "8° ANO" 
    auxAno = "8° ANO";  
    auxF = "8ºAno";  
}
function a9() {
    ano.innerText = "9° ANO" 
    auxAno = "9° ANO";  
    auxF = "9ºAno";  
}
///////////////////////////////////////////
function erro() {
    alert("sinto muito esses dados não foram adicionados :( ")
    
}
function salvo() {
    alert("adicionado com sucesso :)")
    
}

    
function f1() {

    let inpnome = document.getElementById("a").value;
    let inpb1 = document.getElementById("b1").value;
    let inpb2 = document.getElementById("b2").value;
    let inpb3 = document.getElementById("b3").value;
    let inpb4 = document.getElementById("b4").value;
    let inpfaltas = document.getElementById("faltas").value;
    let inpobs = document.getElementById("obs").value;
    

 


    if (inpnome == "" || auxAno == 0) {
        alert("É obrigatorio Preencher o nome do Aluno e Escolha a Tuma")

    } else {
        let inpl1 = document.getElementById("l1");
        let inpl2 = document.getElementById("l2");
        let inpl3 = document.getElementById("l3");
        let inpl4 = document.getElementById("l4");
        let inpl5 = document.getElementById("l5");
        let inpl6 = document.getElementById("l6");
        let inpl7 = document.getElementById("l7");
        let lano = document.getElementById("lano");
        

        lano.innerText = auxAno;
        inpl1.innerText = "Nome: " + inpnome;
        inpl2.innerText = "Primeiro Bimestre: " + inpb1;
        inpl3.innerText = "Segundo Bimestre: " + inpb2;
        inpl4.innerText = "Terceiro Bimestre: " + inpb3;
        inpl5.innerText = "Quarto Bimestre: " + inpb4;
        inpl6.innerText = "Número de faltas: " + inpfaltas;
        inpl7.innerText = "Anotaçõs: " + inpobs;
        
        
    
        if (inpb1 == "" ) {
            inpb1 = 0;
            
        }
        if (inpb2 == "" ) {
            inpb2 = 0;
            
        }
        if (inpb3 == "" ) {
            inpb3 = 0;
            
        }
        if (inpb4 == "" ) {
            inpb4 = 0;
            
        }
        if (inpfaltas == "" ) {
            inpfaltas = 0;
            
        }

       //adicionar input
        db.collection(auxF).doc(inpnome).set({
            nome: (inpnome),
            b1: parseInt(inpb1),
            b2: parseInt(inpb2),
            b3: parseInt(inpb3),
            b4: parseInt(inpb4),
            faltas: parseInt(inpfaltas),
            obs: (inpobs),

        }).then(salvo).catch(erro)

        //limpar input
        const campo1 = document.getElementById("a");
        const campo2 = document.getElementById("b1");
        let campo3 = document.getElementById("b2");
        let campo4 = document.getElementById("b3");
        let campo5 = document.getElementById("b4");
        let campo6 = document.getElementById("faltas");
        let campo7 = document.getElementById("obs");
        let campoano = document.getElementById("ano");
        campo1.value = "";
        campo2.value = "";
        campo3.value = "";
        campo4.value = "";
        campo5.value = "";
        campo6.value = "";
        campo7.value = "";
        campoano.innerText = "";
        auxAno = 0;

    }


}



//////////////////////////





