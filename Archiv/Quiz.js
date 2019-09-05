let newQuiz;

class NewQuiz {
    constructor() {
        this.playerPoints = 0;
        this.questions = [
            {
                q1:
                    "Warm-up question: How many season has 'Game of Thrones'?",
                a: "6",
                b: "8",
                c: "4",
                d: "11",
                answer: "b"
            },
            {
                q2:
                    "Question 2 - let´s go for developper: what is the name of a famous TV Serie about the beginning of tech boom in Silicon Prairie of Dallas? Hint: the name bases upon an early computer command '(HCF)'."

            },
        ]
    }
}
document.getElementById("Start").onclick = function() {
    newQuiz = new NewQuiz(); //Zuweisung eines Objektes in den Constructor wie einen Viking! Parameter bleiben, daher hier leer //
    console.log(newQuiz.questions[0].q1); //check, was ausgegeben wird: Variable gibt this.questions zurück, 0te Position und da den ersten Value des Properties q1 //
    document.getElementsByClassName("questions-all")[0].innerHTML = newQuiz.questions[0].q1;  // wir wollen dass im div die Klasse Questions all erscheint //
}

document.getElementsByClassName("Start").onclick = function() {
    newAnswer = new NewQuiz();
    console.log(newAnswer.questions[1,2,3,4].q1);
}
// would it not be easier to do it in the same function?//