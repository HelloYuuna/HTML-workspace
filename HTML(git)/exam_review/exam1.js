window.onload = function () {
	const score = document.getElementsByClassName("subjectScore");
	
	let btn_confrim = document.getElementById("confirm");
	btn_confrim.onclick = getFinalResult;

	/* TODO 왜? 버튼 클릭도 안했는데 score변수가 넘어가버리는걸까? */
	// btn_confrim.onclick = getFinalResult(score); 

	for (let i = 0; i < score.length; ++i) {
		// score[i].addEventListener('keyup', scoreInput);
		score[i].onkeyup = scoreInput;
	}

}

function scoreInput() {
	let subjectScore = this.value;

	if (isNaN(subjectScore)) {
		alert("숫자만 입력해주세요");
		this.value = "";
		// subjectScore = ""; TODO 이거 안되는 이유???
		this.select();
		return;
	}

	if (subjectScore > 20) {
		alert("0~20사이로 입력해주세요");
		this.value = "";
		// subjectScore = "";
		this.select();
		return;
	}

	let resultName;
	
	switch (this.id) {
		case "one":
			resultName = "resultOne";
			break;
		case "two":
			resultName = "resultTwo";
			break;
		case "three":
			resultName = "resultThree";
			break;
		case "four":
			resultName = "resultFour";
			break;
		case "five":
			resultName = "resultFive";
			break;
	}
	
	let resultScore = document.getElementById(resultName);
	resultScore.innerHTML = ` ${subjectScore * 5} `;
}

function getFinalResult() {
	// TODO subjectScore 다시 선언하는이유?
	let score = document.getElementsByClassName("subjectScore"); 
	let cntByfailSub = 0; //과락과목수
	let totalScore = 0; //전체총점
	let avgScore = 0; //전체평균

	for (let i = 0; i < score.length; ++i) {
		if (score[i].value * 5 <= 40) {
			++cntByfailSub;
		}

		totalScore += score[i].value * 5;
		avgScore = parseFloat(totalScore / 5);
	}

	let failCnt = document.getElementById("failCnt");
	failCnt.innerHTML = cntByfailSub;

	let avg = document.getElementById("avg");
	avg.innerHTML = avgScore;

	let isPass = document.getElementById("finalResult");

	if (cntByfailSub >= 0) {
		isPass.style.background = "#B60037";
		isPass.innerHTML = '불합격';
		// TODO 여기서 불합격 조건에 만족하지 않아도 무조건 return됨.. avgScore값이 사라짐
		// return; 
	}
	
	if (avgScore >= 60) {
		isPass.style.background = "#21B300";
		isPass.innerHTML = '합격';
	}
}