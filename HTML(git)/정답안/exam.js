let score;

window.onload = function() {
    score = document.getElementsByClassName("subjectScore");
    
    for(let i = 0; i<score.length; ++i) {
        score[i].onkeyup = scoreInput;
    }
    document.getElementById("confirm").onclick = finalResult;

}

function scoreInput() {
    let subjectScore = this.value;

    if(subjectScore < 0 || subjectScore > 20) {
        alert("각 과목당 맞춘 문제수(0~20)를 입력하세요")

        this.select();
        return 
    }
    let name ;

    switch(this.id) {
        case "one" :
            name = "resultOne";
            break;
        case "two" :
            name = "resultTwo";
            break;
        case "three" :
            name = "resultThree";
            break;
        case "four" :
            name = "resultFour";
            break;
        case "five" :
            name = "resultFive";
            break;
    }

    document.getElementById(name).innerHTML = `[예상점수] ${this.value * 5}점`
}

function finalResult() {
    let failureCount = 0;
    let totalScore = 0;
    let subjectScore = document.getElementsByClassName("subjectScore");

    for(let i=0; i<subjectScore.length; ++i) {
        failureCount += (subjectScore[i].value < 8) ? 1 : 0;
        totalScore += subjectScore[i].value * 5;
    }

    document.getElementById("failureCount").innerHTML = failureCount;
    document.getElementById("avg").innerHTML = (totalScore / 5);

    if((totalScore / 5) < 60 || failureCount >= 1) {
        document.getElementById("finalResult").innerHTML = "불합격";
    } else {
        document.getElementById("finalResult").innerHTML = "합격";
    }
 }
