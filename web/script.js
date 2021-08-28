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
    new Verb("To Come", "Came", "Come", "Vir")
];

var viewed = [];
var isPortuguese = false;
var isHidden = false;
var current;

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

this.random();