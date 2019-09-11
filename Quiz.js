let newQuiz;

class NewQuiz {
    constructor() {
        this.playerPoints = 0;
        this.currentQuestion = 0;
        this.questions = [
            {
                q:
                    "Warm-up question: How many seasons did 'Game of Thrones' last?",
                a: "6 seasons",
                b: "8 seasons",
                c: "4 seasons",
                d: "11 seasons",
                answer: "8 seasons"
            },
            {
                q:
                    "Question 2 - For developers: What is the name of a famous TV series about the beginning of the 1980s tech boom in Silicon Prairie of Dallas? Hint: The name bases upon an early computer command.",
                a: "console.log",
                b: "Remove Root",
                c: "runas /user:administrator cmd",
                d: "Halt and Catch Fire",
                answer: "Halt and Catch Fire"
            },
            {
                q:
                    "Question 3: 'Friends' was a hit in the 1990s and early 2000s. What is the name of the café where the six friends meet in every episode?",
                a: "Central Park",
                b: "Central Perk",
                c: "Central Café",
                d: "The Central",
                answer: "Central Perk"
            },
            {
                q:
                    "Question 4: Crime, Western and Drama is the mixture which makes 'Longmire' a successfull series. It´s story is basing upon...",
                a: "The novels of Craig Johnson",
                b: "'Winnetou' of Karl May ",
                c: "A script of Gary Oldman",
                d: "A project of HBO to initiate a Western revival",
                answer: "The novels of Craig Johnson"
            },
            {
                q:
                    "Question 5: Let´s go a bit into general education. In theatre and film exists a special technique to interact with the audience - the breaking of the fourth wall. Which latest TV series is using this technique frequently? ",
                a: "Sex and the City",
                b: "The Good Wife",
                c: "House of Cards",
                d: "Dark",
                answer: "House of Cards"
            },
            {
                q:
                    "Question 6: What is the drug kingpin alias of chemistry teacher Walter White in 'Breaking Bad' ",
                a: "Bohr",
                b: "Heisenberg",
                c: "Weisskopf",
                d: "Weizsäcker",
                answer: "Heisenberg"
            },
            {
                q:
                    "Question 7: 'Mad Men' is an award winning series playing in the 1960s in Manhattan. It´s about the daily business of advertising agencies and the personal life of the employees. It was nevertheless also criticized for: ",
                a: "Concealment of history like Corean War",
                b: "The excessive consumption of alcohol and cigarettes",
                c: "The high number of nude scenes",
                d: "Violation of animal rights",
                answer: "the excessive consumption of alcohol and cigarettes"
            },
            {
                q:
                    "Question 8: Kiernan Shipka already starred in 'Mad Men' and soon became the main actress in a stylish 1990s remake about a teenage witch basing upon a comic series. The TV series is called:",
                a: "The enchanting Witchcraft-Mysteries",
                b: "Sabrina the Teenage Witch",
                c: "Magic, Mystery & Sabrina",
                d: "The Chilling Adventures of Sabrina",
                answer: "The Chilling Adventures of Sabrina"
            },
            {
                q:
                    "Question 9: The four heroes in 'Stranger Things' are at the beginning of the first season passionate gamers of: ",
                a: "Super Mario",
                b: "Dungeons & Dragons",
                c: "Pokémon",
                d: "Pac Man",
                answer: "Dungeons & Dragons"
            },
            {
                q:
                    "Question 10: Paolo Sorrentino created in 2016 'The Young Pope' with Jude Law as Pope Pius XIII. Who plays the nun Sister Mary, who raised the Pope when he was a child in an orphanage?",
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
    document.getElementById("answer1").innerHTML = newQuiz.questions[0].a;     //greift auf ul Class question-all=[1] ff. zu und gibt aus neWQuiz.aus der property this.question 0te Position aus und da .a Objekt
    document.getElementById("answer2").innerHTML = newQuiz.questions[0].b;
    document.getElementById("answer3").innerHTML = newQuiz.questions[0].c;
    document.getElementById("answer4").innerHTML = newQuiz.questions[0].d;
    document.getElementById("Start").style.display = "none";
    console.log(document.getElementsByClassName("introduction"));
    myIntro[0].style.display = "none";
}

//Prüfung, ob der ausgewählte Wert mit richtiger Anwort übereinstimmt. Dafür erstmal Ausgabe des angeklickten Wertes, die in einer Variablen gespeichert sein soll. Keine Ahnung, ob das geht.See urgent Chapter Getting the current node object DOM Manipulation >> READ and WORK THROUGH//

let liAnswers = document.getElementsByClassName("answering");
let givenAnswer = "";                                                // muss außerhalb der Funktion erklärt werden, damit ich den gespeicherten Wert der Variable außerhalb abrufen kann.

for (let i = 0; i < liAnswers.length; i++) {
    liAnswers[i].onclick = function (e) {
        console.log(e.currentTarget.innerHTML);
        console.log("liAnswers", liAnswers[1]);
        givenAnswer = e.currentTarget.innerHTML;
        console.log("gegebeneAntwort", givenAnswer);
    }
}

// Prüfung: ausgewählter Wert = oder != richtige Antwort >> nur Frage 1.
// let givenAnswer = ""
// givenAnswer = e.currentTarget.innerHTML;
// console.log(givenAnswer)

// Value aus givenAnswer wird nun mit der richtigen Antwort aus newQuiz verglichen sobald auf Submit geklickt wird. 
// sobald Submit geklickt wird, soll this.currentQuestion um +1 hochgezählt werden. Wenn das passiert, nächste Frage. 


//let truth = (newQuiz.questions[0].answer === givenAnswer);//

document.getElementById("Submit").onclick = function () {
    if (newQuiz.questions[0].answer === givenAnswer) { console.log("correct"), newQuiz.playerPoints++ } // {document.getElementById("inbetweenScreen").innerHTML = "This was correct!" , new Quiz.playerPoints++} lead to missing next question button 
    else { console.log("wrong") };
    console.log("check mistake", newQuiz.questions[0].answer)
    console.log("playerpoints: ", newQuiz.playerPoints);
    newQuiz.currentQuestion++;
    console.log("current question: ", newQuiz.currentQuestion);
    document.getElementsByClassName("question-screen")[0].style.display = "none";
    document.getElementById("inbetweenScreen").style.display = "block";
    document.getElementById("answeredquestions").innerHTML = newQuiz.currentQuestion; //09.09.2019 füge "answeredquestions" button ein Zähler Frage hinzu
    document.getElementById("answeredquestions").style.display = "block"; // 09.09.2019 nur sichtbar ab 1. Submit + style setting in html
    document.getElementById("playerpoints").innerHTML = newQuiz.playerPoints;   // mit der Einführung des Zwischenergebnis
    document.getElementById("playerpoints").style.display = "block";
   // let truth = newQuiz.questions[0].answer;
   // console.log("rightAnswer", truth);
   // let check = (truth === givenAnswer);
   // if (check === true) {
   // document.getElementById("inbetweenScreen").innerHTML = "This was correct!"} 
   // else {"This answer was unfortunately wrong."}
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
        document.getElementById("lastScreen").innerHTML = "You answered "+newQuiz.playerPoints+" questions correct";
        document.getElementById("playerpoints").style.display = "none";
        document.getElementById("answeredquestions").style.display = "none";
    }
    else {
        document.getElementsByClassName("question-screen")[0].style.display = "block";
        document.getElementsByClassName("questions-all")[0].innerHTML = newQuiz.questions[num].q;
        document.getElementById("answer1").innerHTML = newQuiz.questions[num].a;
        document.getElementById("answer2").innerHTML = newQuiz.questions[num].b;
        document.getElementById("answer3").innerHTML = newQuiz.questions[num].c;
        document.getElementById("answer4").innerHTML = newQuiz.questions[num].d;
    }
}

document.getElementById("NextQuestion").onclick = function () {
    document.getElementById("inbetweenScreen").style.display = "none";
    nextQuestion(newQuiz.currentQuestion);
}
// cannot work, because Function nextQuestion has if condition
//function ausgabe(ergebnis) {
//    document.getElementById("inbetweenScreen").innerHTML = (newQuiz.questions[0].answer === givenAnswer)
//};
