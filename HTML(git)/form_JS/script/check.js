window.onload = function () {
	/*
	 * button vs submit
	 * 버튼타입은 finalResult 보존, 이메일 검증 required 작동하지않음
	 * submit 브라우저상의 이메일 검증은 뜨지만 블링크되면서 입력한것들이 사라짐 (서버전송)
	 */
	document.getElementById("btn").onclick = check;
}

function check() {
	// alert("Click");
	
	/* 아이디 검증 */
	let usrid = document.getElementById("usrid");

	if (!(usrid.value.length >= 5 && usrid.value.length <= 10)) {
		alert("아이디는 5~10자 이내로 입력해주세요");
		usrid.select();
		usrid.focus();
		return;
	}
	
	/* 이름 검증 */
	let usrname = document.getElementById("usrname");

	if (usrname.value.length == 0) {
		alert("이름을 입력해주세요");
		usrname.select();
		usrname.focus();
		return;
	}
	
	/* 비밀번호 검증 */
	let usrpwd = document.getElementById("usrpwd");

	if (usrpwd.value.length == 0) {
		alert("비밀번호를 입력해주세요");
		usrpwd.select();
		usrpwd.focus();
		return;
	}
	
	/* 이메일 */
	let email = document.getElementById("email");
	
	/* 성별 검증 */
	let gender = document.getElementsByName("gender");
	let genderValue;
	// alert(gender.length); // 2
	for (let i = 0; i < gender.length; ++i) {
		if (gender[i].checked) {
			genderValue = gender[i].value;
		}
	}

	/* 취미 검증 */
	let hobby = document.getElementsByName("hobby");
	let hobbyArr = [];
	for (let i = 0; i < hobby.length; i++) {
		if (hobby[i].checked) {
			hobbyArr.push(hobby[i].value);
		}
	}

	/* 주소 검증 
	 * select박스는 id값으로 읽어 들어옴 
	 */
	let addrArea = document.getElementById("addr1");
	let addrDetail = document.getElementById("addr2");

	if (addrDetail.value.length == 0) {
		alert("주소를 입력해주세요");
		addrDetail.select();
		addrDetail.focus();
		return;
	}

	let address = addrArea.value + ' ' + addrDetail.value;

	/* 코멘트 검증 */
	let comment = document.getElementById("comment");
	let cmt = comment.value;
	if (comment.value.length == 0) {
		cmt = '없음';
	} 

	/* 데이터 누적 */
	let finalResult = '';
	let target = document.getElementById("target");

	finalResult += `<ul><li>아이디: ${usrid.value}</li>`;
	finalResult += `<li>이름: ${usrname.value}</li>`;
	finalResult += `<li>비밀번호: ${usrpwd.value}</li>`;
	finalResult += `<li>이메일: ${email.value}</li>`;
	finalResult += `<li>성별: ${genderValue}</li>`;
	finalResult += `<li>취미: ${hobbyArr.toString()}</li>`;
	finalResult += `<li>주소: ${address}</li>`;
	finalResult += `<li>코멘트: ${cmt}</li>`;
	finalResult += `</ul>`;

	/* 완료된 데이터를 화면에 표시 */
	target.innerHTML = finalResult;
}