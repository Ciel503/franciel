

let dvc = document.getElementById("container");

let novadv6 = document.createElement("div");
novadv6.id = "pdv6"
dvc.insertAdjacentElement("afterbegin", novadv6);
let pdv6 = document.getElementById("pdv6");


let novadv7 = document.createElement("div");
novadv7.id = "pdv7"
dvc.insertAdjacentElement("afterbegin", novadv7);
let pdv7 = document.getElementById("pdv7");

let novadv8 = document.createElement("div");
novadv8.id = "pdv8"
dvc.insertAdjacentElement("afterbegin", novadv8);
let pdv8 = document.getElementById("pdv8");

let novadv9 = document.createElement("div");
novadv9.id = "pdv9"
dvc.insertAdjacentElement("afterbegin", novadv9);
let pdv9 = document.getElementById("pdv9");



let global6 = {
    g : novadv6,
    metodo: iniciar
}
let global7 = {
    g : novadv7,
    metodo: iniciar
}
let global8 = {
    g : novadv8,
    metodo: iniciar
}
let global9 = {
    g : novadv9,
    metodo: iniciar
}

mostrar6 = iniciar.bind(global6)
mostrar7 = iniciar.bind(global7)
mostrar8 = iniciar.bind(global8)
mostrar9 = iniciar.bind(global9)

let auxT = "";

var check6 = false;
function ano6() {
    auxT = "6ºAno";
    pdv7.style.display = "none";
    pdv8.style.display = "none";
    pdv9.style.display = "none";

    if (pdv6.style.display === "none") {
        pdv6.style.display = "block" 
    }else{
        pdv6.style.display = "none"
    }
    
    if(check6 == false){
        mostrar6();
        check6 = true;
    }
    
}

var check7 = false
function ano7() {
    pdv8.style.display = "none";
    pdv9.style.display = "none";
    pdv6.style.display = "none";
    auxT = "7ºAno";

    if (pdv7.style.display === 'none') {
        pdv7.style.display = 'block' 
    }else{
        pdv7.style.display ='none'
    }
    if (!check7) {
        mostrar7()
        check7 = true
    }
     

}

var check8 = false
function ano8() {
    pdv7.style.display = "none";
    pdv9.style.display = "none";
    pdv6.style.display = "none";
    auxT = "8ºAno";

    if (pdv8.style.display === 'none') {
        pdv8.style.display = 'block' 
    }else{
        pdv8.style.display ='none'
    }
    if (!check8) {
        mostrar8()
        check8 = true
    }
     
}


var check9 = false
function ano9() {
    pdv8.style.display = "none";
    pdv7.style.display = "none";
    pdv6.style.display = "none";
    auxT = "9ºAno";

    if (pdv9.style.display === 'none') {
        pdv9.style.display = 'block' 
    }else{
        pdv9.style.display ='none'
    }
    if (!check9) {
        mostrar9()
        check9 = true
    }
     

}


function iniciar() {
    db.collection(auxT).get().then((snapshot) => {
    
        snapshot.forEach((doc) => {
            let dados = doc.data();
            this.g.innerHTML += (
                
                `<div id='cont'> 
                    <div id='ed'>
                     
                        <br><label id='mynome'>nome: </label><br><hr>
                        <br><label id='myb1'>1ºB:</label> <br><hr>
                        <br><label id='myb2'>2ºB:  </label> <br><hr>
                        <br><label id='myb3'>3ºB: </label> <br><hr>
                        <br> <label id='myb4'>4ºB: </label><br><hr>
                        <label id='myfaltas'><br>Faltas</label> <hr>
                        <label id='myobs'>Obs: <br></label>
  
                    </div>
        
                    
                    <form onsubmit="return setAction(this)" id='inp'>
                        <input id="a"type="text" value='${dados.nome}' disabled><br>
                        <input id="b1"type="number" value='${dados.b1}'><br>
                        <input id="b2" type="number" value='${dados.b2}'><br>
                        <input id="b3" type="number" value='${dados.b3}'><br>
                        <input id="b4" type="number" value='${dados.b4}'><br>
                        <input id="faltas" type="number" value='${dados.faltas}'><br>
                        <input id="obs" value='${dados.obs}'></input><br>      
                        <input id="submit" type="submit" value="Salvar">
                        <input id="ids"type="text"  value='${doc.id}'><br>
                    </form>
                </div>`
            );       
            
        });
        
    })
    
  
}



function erro() {
    alert("sinto muito esse documento não foi salvo  :( ")
    
}
function salvo() {
    alert("salvo com sucesso :)")
    
}

function setAction(form) {

    db.collection(auxT).doc(form.ids.value).update({
        nome:(form.a.value),
        b1:(form.b1.value),
        b2:(form.b2.value),
        b3:(form.b3.value),
        b4:(form.b4.value),
        faltas:(form.faltas.value),
        obs:(form.obs.value)
    }).then(salvo).catch(erro)
    


    return false;

}

