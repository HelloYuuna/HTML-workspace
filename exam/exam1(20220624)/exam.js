// 1) Code Here : 변수 score 선언 

window.onload = function() {
    const score = document.getElementsByClassName("subjectScore");

    for(let i = 0; i<score.length; ++i) {
        // 2) Code Here
        score[i].addEventListener('keyup', scoreInput);
        // score[i].addEventListener('keyup', () => {
            // let tmp = i;
            // let correctNum = score[i].value;
            // const result = document.getElementsByClassName("subjectResult");
            
            // for (let j = 0; j < result.length; j++) {
            //     if (tmp == j) { 
            //         // console.log(score[i].value);
            //         result[j].innerHTML = `[예상점수] ${5 * correctNum} 점`;
            //     }
            // }
        // });
        
    }
    // 4-1) Code Here : id가 “confirm”인 버튼을 클릭하면 finalResult 함수를 호출하도록 이벤트 설정
    let confirm = document.getElementById("confirm");
    confirm.onclick = finalResult;
}

function scoreInput() {
    let subjectScore = this.value;
    // console.log(subjectScore);
    
    if (isNaN(subjectScore)) {
        alert("숫자만 입력해주세요");
        subjectScore = '';
    }

    // 3) Code Here : if문을 이용하여 맞은 개수의 범위가 0~20사이가 아니면 경고창 발생
    if (subjectScore < 0 || subjectScore > 20) {
        alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
        // subjectScore.select();
        return;
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
    let failureCount = 0;  // 과락 과목 수
    let totalScore = 0;    // 전체 점수
    let subjectScore = document.getElementsByClassName("subjectScore");

    for (let i = 0; i < subjectScore.length; ++i) {
       // 4-2) Code Here : 과락 과목 수를 failureCount 변수에 카운트
       // console.log(subjectScore[i].value); 입력한 값들
        if (subjectScore[i].value <= 8) {
            ++failureCount;
        }

       // 4-3) Code Here : 5과목의 합계를 totalScore 변수에 누적
        totalScore += (parseInt(subjectScore[i].value) * 5);
    }

    // 5-1) 과락 과목수를 html의 failureCount 위치에 출력
    // Code Here
    let failure = document.getElementById("failureCount");
    failure.innerHTML = failureCount;

    // 5-2) 전체 평균을 구한 값을 html의 avg 위치에 출력
    // Code Here
    let avg = document.getElementById("avg");
    avgResult = totalScore / 5;
    avg.innerHTML = avgResult;

    // 5-3) if문을 이용하여 합격 또는 불합격 여부를 html의 finalResult 위치에 출력
    // Code Here
    let finalResult = document.getElementById("finalResult");
    if (failureCount >= 1 && avgResult >= 60) {
        finalResult.innerHTML = "불합격";
    } else {
        finalResult.innerHTML = "합격";
    }
}