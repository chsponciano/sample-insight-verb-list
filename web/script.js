const verb_url = "https://serene-bayou-96328.herokuapp.com";
let viewed = [];
let isPortuguese = false;
let isHidden = false;
let current;

class Verb {
    constructor(baseForm, past, pastParticiple, translation) {
        this.baseForm = baseForm;
        this.past = past;
        this.pastParticiple = pastParticiple;
        this.translation = translation;
    }
}

const verbs = [
    new Verb("To Be", "Was/Were", "Been", "Ser/estar"),
    new Verb("To Bring", "Brought", "Brought", "Trazer"),
    new Verb("To Buy", "Bought", "Bought", "Comprar"),
    new Verb("To Come", "Came", "Come", "Vir"),
    new Verb("To Cost", "Cost", "Cost", "Custar"),
    new Verb("To Cut", "Cut", "Cut", "Cortar"),
    new Verb("To Do", "Did", "Done", "Fazer"),
    new Verb("To Drink", "Drank", "Drunk", "Beber"),
    new Verb("To Drive", "Drove", "Driven", "Dirigir"),
    new Verb("To Eat", "Ate", "Eaten", "Comer"),
    new Verb("To Find", "Found", "Found", "Encontrar"),
    new Verb("To Get", "Got", "Got/Gotten", "Pegar, Conseguir, Receber"),
    new Verb("To Give", "Gave", "Given", "Dar"),
    new Verb("To Go", "Went", "Gone", "Ir"),
    new Verb("To Have", "Had", "Had", "Ter"),
    new Verb("To Keep", "kept", "Kept", "Manter, Continuar"),
    new Verb("To Know", "Knew", "Known", "Saber"),
    new Verb("To Learn", "Learned/Learnt", "Learned/Learnt", "Aprender"),
    new Verb("To Leave", "Left", "Left", "Sair, Deixar"),
    new Verb("To Lend", "Lent", "Lent", "Emprestar"),
    new Verb("To Let", "Let", "Let", "Deixar, Permitir"),
    new Verb("To Make", "Made", "Made", "Fazer"),
    new Verb("To Meet", "Met", "Met", "Conhecer, Encontrar"),
    new Verb("To Pay", "Paid", "Paid", "Pagar"),
    new Verb("To Put", "Put", "Put", "Colocar, Pôr"),
    new Verb("To Read", "Read", "Read", "Ler"),
    new Verb("To Ride", "Rode", "Ridden", "Andar (de moto, à cavalo)"),
    new Verb("To Run", "Ran", "Run", "Correr"),
    new Verb("To Say", "Said", "Said", "Dizer"),
    new Verb("To See", "Saw", "Seen", "Ver"),
    new Verb("To Sell", "Sold", "Sold", "Vender"),
    new Verb("To Send", "Sent", "Sent", "Enviar"),
    new Verb("To Sit", "Sat", "Sat", "Sentar"),
    new Verb("To Sleep", "Slept", "Slept", "Dormir"),
    new Verb("To Speak", "Spoke", "Spoken", "Falar, Conversar"),
    new Verb("To Spend", "Spent", "Spent", "Gastar, Passar (tempo)"),
    new Verb("To Swin", "Swan", "Swum", "Nadar"),
    new Verb("To Take", "Took", "Taken", "Pegar"),
    new Verb("To Teach", "Taught", "Taught", "Ensinar"),
    new Verb("To Tell", "Told", "Told", "Dizer, Contar"),
    new Verb("To Think", "Thought", "Thought", "Pensar"),
    new Verb("To Understand", "Understood", "Understood", "Entender"),
    new Verb("To Withdraw", "Withdrew", "Withdrawn", "Sacar (dinheiro)"),
    new Verb("To Write", "Wrote", "Written", "Escrever")
];

function display(verb) {
    current = verb;
    document.getElementsByClassName("sorted")[0].innerText = (isPortuguese) ? verb.translation : verb.baseForm; 
    document.getElementsByClassName("card-past")[0].innerText = verb.past; 
    document.getElementsByClassName("card-past-participle")[0].innerText = verb.pastParticiple;
    document.getElementsByClassName("card-title-switch")[0].innerText = (isPortuguese) ? "BASE FORM" : "TRANSLATION";
    document.getElementsByClassName("card-switch")[0].innerText = (!isPortuguese) ? verb.translation : verb.baseForm;
}

function random() {
    const index = Math.floor(Math.random() * verbs.length);
    if (viewed.includes(index)) {
        random();
    } else {
        if ((viewed.length + 1) == verbs.length) {
            viewed = [];
        }
        viewed.push(index);
        this.display(verbs[index]);
    }
}

function changeLanguage() {
    isPortuguese = !isPortuguese;
    this.display(current);
}

function changeHidden() {
    isHidden = !isHidden;
    document.getElementsByClassName("second-display")[0].hidden = isHidden;
}

function openTable() {
    const table = document.getElementById("verb-table");

    for (let index = 0; index < verbs.length; index++) {
        let verb = verbs[index];
        let row = table.insertRow(index + 1);
        row.insertCell(0).innerHTML = verb.baseForm;
        row.insertCell(1).innerHTML = verb.past;
        row.insertCell(2).innerHTML = verb.pastParticiple;
        row.insertCell(3).innerHTML = verb.translation; 
    }
}


function openRandom() {
    window.open(verb_url, "_self");
}

function openList() {
    window.open(verb_url + "?list", "_self");
}

function playAudioInTranslate(element) {
    if ((element.className == "sorted" && isPortuguese) || (element.className.includes("card-switch") && !isPortuguese)) {
        return;
    } 

    let text = element.textContent;
    let src = 'audios/' + text.toLocaleLowerCase().replace(' ', '').replace('/', '') + '.mp3';
    const audio = document.getElementsByClassName("speech")[0];
    audio.src = encodeURI(src);
    audio.play();
}