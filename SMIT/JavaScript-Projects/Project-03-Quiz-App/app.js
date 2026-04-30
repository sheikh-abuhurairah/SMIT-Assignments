const correctAnswer = ["c","a","a","a"];

let result = document.querySelector(".result")
let form = document.querySelector(".quiz-form");




form.addEventListener("submit",function(e){
    e.preventDefault();

    let score = 0;
    const totalQuestion = correctAnswer.length;
    const scorePerquestion = 100 / totalQuestion;



    let userAnswer = [
    ]

    for(let i=1;i<=correctAnswer.length;i++){
        userAnswer.push(form[`q${i}`].value);
    }
  

    let output =0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`
        if(output === score){
            clearInterval(timer)
        }
        else{
            output++
        }
        
    }, 10);
    for(let i=0;i<userAnswer.length;i++){
        if(userAnswer[i] === correctAnswer[i]){
            score += scorePerquestion
        }
    }
    scrollTo(0,0)
    console.log(userAnswer);
    result.classList.remove("d-none")


    
});