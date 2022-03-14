
var bauMiao = document.getElementById('btn');

class User {
    constructor(n, c, e, p) {
        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.password = p;
    }
}


bauMiao.addEventListener('click', function (e) {
    e.preventDefault()
    // FASE 1: CREAZIONE VARIABILI
    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let campi = document.querySelectorAll('input')
    let formValido = true;
    console.log(campi);
    // FASE 2: VERIFICA VALIDITA' CAMPI   
    campi.forEach(element => {
        if (element.value == '') {
            formValido = false;
            //document.querySelector(`#${element.id} ~ div `).innerHTML = 'inserisci i dati'
            element.nextElementSibling.textContent = 'inserisci i dati'
        } else {
            element.nextElementSibling.textContent = '';
        }
    });

    if (formValido) {
        // FASE 3: CREAZIONE OBJ USER TRAMITE VARIABILI DI CUI SOPRA 
        var utente1 = new User(nome, cognome, email, pass);
        console.log(utente1);
        

        // FASE 4: SALVATAGGIO DELL'OBJ DI CUI IN FASE 3
        salva(utente1);
        location.href = "pagina.html";
    }
    
});

function salva(u) {
    let elementiSalvati = localStorage.getItem('utenti');
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    db.push(u);
    localStorage.setItem('utenti', JSON.stringify(db))
}


