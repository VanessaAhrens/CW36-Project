let newQuiz;

class NewQuiz {
    constructor() {
        this.playerPoints = 0;
        this.currentQuestion = 0;
        this.questions = [
            {
                q:
                    "Warm-up question: How many season has 'Game of Thrones'?",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "8"
            },
            {
                q:
                    "Question 2 - let´s go for developper: what is the name of a famous TV Serie about the beginning of tech boom in Silicon Prairie of Dallas? Hint: the name bases upon an early computer command '(HCF)'.",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "8"
            },
            {
                q:
                    "This is question: 3",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 4",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 5",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 6",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 7",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 8",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 9",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q:
                    "This is question: 10",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"

            }
        ]
    }
}
// I want, that with click on button "Start" the Div appears. See line 108-110 because it belongs to the onclick fct.
let myDiv = document.getElementsByClassName("question-screen");
// same for Introduction DIV shall disappear after "Start"
let myIntro = document.getElementsByClassName("introduction")

document.getElementById("Start").onclick = function () {
    newQuiz = new NewQuiz(); //Zuweisung eines Objektes in den Constructor wie einen Viking! Parameter bleiben, daher hier leer //
    console.log(newQuiz.questions[0].q1); //check, was ausgegeben wird: Variable gibt this.questions zurück, 0te Position und da den ersten Value des Properties q1 //
    if (myDiv[0].getAttribute("class") === "question-screen invisibleSubmit") { // wir beziehen uns auf das Attribut class im Div, wo zuvor invisible Submit ergänzt wurde. Auch in CSS, die mit visibility hidden. Wenn diese dem Namen der Klasse entspricht, dann
        myDiv[0].setAttribute("class", "question-screen"); // gehe in dieses Attribut und setze nur den Value der Klasse question-screen! Super cool, visiibilty class hidden ist weg wenn ich nun Start geclickt habe.
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
    nextQuestion(newQuiz.currentQuestion) // nachträglich dazu: wir wollen, dass die nächste Frage angezeigt, also führe die Funktion nextQuestion aus wenn eine Nummer! dazukommt.Invoking Fct nextQuestion by incrementatin current Question
}                                         // merk dir endlich, die Fkt lässt sich einfach durch nextQuestion(zahl) aufrufen  
//neue Fkt.: sobald Submit +1 in currentQuestions erzeugt, dann führe Zeile 101 bis Zeile 105 neu aus.
// nächste Frage hat immer andere Klasse >> wie umgehen ohne den Code zehn mal zu schreiben?
function nextQuestion(num) {                                                                                    //diese Funktion geht zur nächsten Frage wenn eine Nummer als Parameter kommt
    document.getElementsByClassName("questions-all")[0].innerHTML = newQuiz.questions[num].q;
    document.getElementsByClassName("questions-all")[1].children[0].innerHTML = newQuiz.questions[num].a;
    document.getElementsByClassName("questions-all")[1].children[1].innerHTML = newQuiz.questions[num].b;
    document.getElementsByClassName("questions-all")[1].children[2].innerHTML = newQuiz.questions[num].c;
    document.getElementsByClassName("questions-all")[1].children[3].innerHTML = newQuiz.questions[num].d;
}
