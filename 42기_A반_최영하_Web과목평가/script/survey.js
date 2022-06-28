window.onload = function () {
	document.getElementById("btn_commit").onclick = check;
}

function check() {
	//이름
	let usrname = document.getElementById("usrname");
	
	if (usrname.value.length == 0) {
		alert("이름을 입력해주세요");
		usrname.select();
		usrname.focus();
		return;
	}

	//전화번호
	let tel = document.getElementById("tel");
	let telnumber = document.getElementById("telnumber");

	if (telnumber.value.length != 8 || isNaN(telnumber.value)) {
		alert("-를 제외한 정확한 길이의 숫자만 입력해주세요");
		telnumber.select();
		telnumber.focus();
		return;
	}
	
	let phone = tel.value + telnumber.value;

	//이메일
	let email = document.getElementById("email");

	if (!email.value.includes("@")) {
		alert("정확한 이메일타입으로 입력해 주세요");
		email.select();
		email.focus();
		return;
	}

	// 직업군
	let job = document.getElementById("job");

	// 구글 서비스
	let service = document.getElementsByName("service");
	let serviceValue;
	for (let i = 0; i < service.length; ++i) {
		if (service[i].checked) {
			serviceValue = service[i].value;
		}
	}

	// 강화도구
	let browser = document.getElementsByClassName("browser");
	let browserArr = [];
	for (let i = 0; i < browser.length; i++) {
		if (browser[i].checked) {
			browserArr.push(browser[i].value);
		}
	}

	//코멘트
	let comment = document.getElementById("etc").value;
	if (comment.length == 0) {
		comment = '없음';
	}

	let finalResult = document.getElementById("result");
	var result = "<h2>설문 결과</h2><ul>";
	result += `<li>이름 : ${usrname.value}</li>`;
	result += `<li>전화번호 : ${phone}</li>`;
	result += `<li>Email : ${email.value}</li>`;
	result += `<li>직업 : ${job.value}</li>`;
	result += `<li>가장 많이 사용하는 구글 서비스 : ${serviceValue}</li>`;
	result += `<li>기능강화가 필요한 도구 : ${browserArr.toString()}</li>`;
	result += `<li>남기실 말씀 : ${comment}</li>`;
	result += "</ul>";

	finalResult.innerHTML = result;

}




