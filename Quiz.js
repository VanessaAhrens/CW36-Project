let newQuiz;

class NewQuiz {
    constructor() {
        this.playerPoints = 0;
        this.currentQuestion = 0;
        this.questions = [
            {
                q:
                    "Warm-up question: How many season has 'Game of Thrones'?",
                a: "6 seasons",
                b: "8 seasons",
                c: "4 seasons",
                d: "11 seasons",
                answer: "8 seasons"
            },
            {
                q:
                    "Question 2 - let´s go for developper: what is the name of a famous TV Serie about the beginning of tech boom in Silicon Prairie of Dallas? Hint: the name bases upon an early computer command.",
                a: "console.log",
                b: "Remove Root",
                c: "runas /user:administrator cmd",
                d: "Halt and Catch Fire",
                answer: "Halt and Catch Fire"
            },
            {
                q:
                    "Question 3: 'Friends' was a hit in 90ies and early 2000ds. What is the name of the café, where the six friends meet in every episode?",
                a: "Central Park",    
                b: "Central Perk",
                c: "Central Café",
                d: "The Central",
                answer: "Central Perk"
            },
            {
                q:
                    "Question 4: Crime, Western and Drama is the mixture, which makes 'Longmire' to a successfull serie. It´s story is basing upon...",
                a: "The novels of Craig Johnson",
                b: "'Winnetou' of Karl May ",
                c: "A script of Gary Oldman",
                d: "A project of HBO to initiate a western revival",
                answer: "The novels of Craig Johnson"
            },
            {
                q:
                    "Question 5: let´s go a bit into general education. In theatre and film exists a special technique to interact with the audience - the breaking of the fourth wall. Which latest TV serie is using this technique frequently? ",
                a: "Sex and the City",
                b: "The Good Wife",
                c: "House of Cards",
                d: "Dark",
                answer: "House of Cards"
            },
            {
                q:
                    "Question 6: What is the alias of chemistry teacher Walter in 'Breaking Bad' ",
                a: "Bohr",
                b: "Heisenberg",
                c: "Weisskopf",
                d: "Weizsäcker",
                answer: "Heisenberg"
            },
            {
                q:
                    "Question 7: 'Mad Men' is a serie with a huge list of received awards and nominations. The serie, playing in the 60s in Manhattan about daily business of advertising agencies and the personal life of the employees was also criticized due to: ",
                a: "concealment of history like Corean War",
                b: "the excessive consumption of alcohol and cigarettes",
                c: "the high number of nude scenes",
                d: "violation of animal rights",
                answer: "the excessive consumption of alcohol and cigarettes"
            },
            {
                q:
                    "Question 8: Kiernan Shipka was already acctress in 'Mad Men' and get soon main actress in a stylish 90s remake about a teenage whitch basing upon a comic serie. The TV serie is called:",
                a: "The enchanting Whitchcraft-Mysteries",
                b: "Sabrina the Teenage Witch",
                c: "Magic, Mystery & Sabrina",
                d: "The chilling adventures of Sabrina",
                answer: "The chilling adventures of Sabrina"
            },
            {
                q:
                    "Question 9: The four heroes in 'Stranger Things' are at the beginning of the first episode passionate gamers of: ",
                a: "Super Mario",
                b: "Dungeons & Dragons",
                c: "Pokémon",
                d: "Pac Man",
                answer: "Dungeons & Dragons"
            },
            {
                q:
                    "Question 10: Paolo Sorrentino created in 2016 'The Young Pope' with Jude Law as Pope Pius XIII. Who plays the nun Sister Mary, who raised the pope when he was a child in an orphanage?",
                a: "Whoopie Goldberg",
                b: "Jane Fonda",
                c: "Andie MacDowell",
                d: "Diane Keaton",
                answer: "Diane Keaton"

            }
        ]
    }
}
// I want, that with click on button "Start" the Div appears. See line 108-110 because it belongs to the onclick fct.
let myDiv = document.getElementsByClassName("question-screen");
// same for Introduction DIV shall disappear after "Start" Es wird aus Einfachheit diese Variable initialisiert, die dann wie der Button verschwindet. Einfacher als Klassen anzulegen.
let myIntro = document.getElementsByClassName("introduction")
let myResult = document.getElementsByClassName("final");
let myResolution = document.getElementsByClassName("result notvisible");

document.getElementById("Start").onclick = function () {
    newQuiz = new NewQuiz(); //Zuweisung eines Objektes in den Constructor wie einen Viking! Parameter bleiben, daher hier leer //
    console.log(newQuiz.questions[0].q); //check, was ausgegeben wird: Variable gibt this.questions zurück, 0te Position und da den ersten Value des Properties q1 //
    if (myDiv[0].getAttribute("class") === "question-screen invisibleSubmit") { // wir beziehen uns auf das Attribut class im Div, wo zuvor invisible Submit ergänzt wurde. Auch in CSS, die mit visibility hidden. Wenn diese dem Namen der Klasse entspricht, dann
        myDiv[0].setAttribute("class", "question-screen"); // gehe in dieses Attribut und setze nur den Value der Klasse question-screen! Super cool, visiibilty class hidden ist weg wenn ich nun Start geclickt habe.
    }
    if (myResult[0].getAttribute("class") === "final notvisible") {
        console.log(myResult[0])
        myResult[0].setAttribute("class", "notvisible");
    }
    document.getElementsByClassName("questions-all")[0].innerHTML = newQuiz.questions[0].q;                // greift auf <p> Class question-all=[0] zu
    document.getElementsByClassName("questions-all")[1].children[0].innerHTML = newQuiz.questions[0].a;     //greift auf ul Class question-all=[1] ff. zu und gibt aus neWQuiz.aus der property this.question 0te Position aus und da .a Objekt
    document.getElementsByClassName("questions-all")[1].children[1].innerHTML = newQuiz.questions[0].b;
    document.getElementsByClassName("questions-all")[1].children[2].innerHTML = newQuiz.questions[0].c;
    document.getElementsByClassName("questions-all")[1].children[3].innerHTML = newQuiz.questions[0].d;
    document.getElementById("Start").style.display = "none";
    console.log(document.getElementsByClassName("introduction"));
    myIntro[0].style.display = "none";
}

//Prüfung, ob der ausgewählte Wert mit richtiger Anwort übereinstimmt. Dafür erstmal Ausgabe des angeklickten Wertes, die in einer Variablen gespeichert sein soll. Keine Ahnung, ob das geht.See urgent Chapter Getting the current node object DOM Manipulation >> READ and WORK THROUGH//
let liAnswers = document.getElementsByTagName('li');
let givenAnswer = ""; // muss außerhalb der Funktion erklärt werden, damit ich den gespeicherten Wert der Variable außerhalb abrufen kann.

for (let i = 0; i < liAnswers.length; i++) {
    liAnswers[i].onclick = function (e) {
        console.log(e.currentTarget.innerHTML);
        givenAnswer = e.currentTarget.innerHTML;
    }
}
// Prüfung: ausgewählter Wert = oder != richtige Antwort >> nur Frage 1.
// let givenAnswer = ""
// givenAnswer = e.currentTarget.innerHTML;
// console.log(givenAnswer)

// Value aus givenAnswer wird nun mit der richtigen Antwort aus newQuiz verglichen sobald auf Submit geklickt wird. 
// sobald Submit geklickt wird, soll this.currentQuestion um +1 hochgezählt werden. Wenn das passiert, nächste Frage. 


document.getElementById("Submit").onclick = function () {
    if (newQuiz.questions[0].answer === givenAnswer) { newQuiz.playerPoints++ }
    else { console.log("wrong") };
    console.log("playerpoints: ", newQuiz.playerPoints);
    newQuiz.currentQuestion++;
    console.log("current question: ", newQuiz.currentQuestion);
    document.getElementsByClassName("question-screen")[0].style.display = "none";
   document.getElementById("inbetweenScreen").style.display ="block"
     // mit der Einführung des Zwischenergebnis
}
// nachträglich dazu: wir wollen, dass die nächste Frage angezeigt, also führe die Funktion nextQuestion aus wenn eine Nummer! dazukommt.Invoking Fct nextQuestion by incrementatin current Question
// merk dir endlich, die Fkt lässt sich einfach durch nextQuestion(zahl) aufrufen  
//neue Fkt.: sobald Submit +1 in currentQuestions erzeugt, dann führe Zeile 101 bis Zeile 105 neu aus.
// nächste Frage hat immer andere Klasse >> wie umgehen ohne den Code zehn mal zu schreiben?
//diese Funktion geht zur nächsten Frage wenn eine Nummer als Parameter kommt

function nextQuestion(num) {
    if (newQuiz.currentQuestion >= 10) {
        document.getElementsByClassName("question-screen")[0].style.display = "none";
        document.getElementById("lastScreen").setAttribute("class", "final");
    }
    else {
        document.getElementsByClassName("question-screen")[0].style.display = "block";
        document.getElementsByClassName("questions-all")[0].innerHTML = newQuiz.questions[num].q;
        document.getElementsByClassName("questions-all")[1].children[0].innerHTML = newQuiz.questions[num].a;
        document.getElementsByClassName("questions-all")[1].children[1].innerHTML = newQuiz.questions[num].b;
        document.getElementsByClassName("questions-all")[1].children[2].innerHTML = newQuiz.questions[num].c;
        document.getElementsByClassName("questions-all")[1].children[3].innerHTML = newQuiz.questions[num].d;
    }
}

// function finalResult(num) {
//  if (newQuiz.currentQuestion === 10) {document.getElementsByClassName("final")[0]};
//  console.log("Anzeige", document.getElementsByClassName("final")[0].innerHTML)
//  }
// finalResult(10)


document.getElementById("NextQuestion").onclick = function () {
    document.getElementById("inbetweenScreen").style.display = "none";
    nextQuestion(newQuiz.currentQuestion);
}
// cannot work, because Function nextQuestion has if condition