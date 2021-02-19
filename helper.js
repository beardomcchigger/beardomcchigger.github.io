function calc() {	
	document.getElementById("txtToHit1").value = calcWeapon(document.getElementById("txtWMod1").value);
	document.getElementById("txtToHit2").value = calcWeapon(document.getElementById("txtWMod2").value);
	document.getElementById("txtToHit3").value = calcWeapon(document.getElementById("txtWMod3").value);
	document.getElementById("txtToHit4").value = calcWeapon(document.getElementById("txtWMod4").value);
	saveValues();
};

function calcWeapon(bonus=0) {
	var ac = document.getElementById("txtAc").value;
	var thaco = document.getElementById("txtThaco").value;	
	var other = document.getElementById("txtOther").value;
	if (document.getElementById("chkBless").checked) {
		other++;
	};
	var result = thaco - ac - other - bonus;
	
	if (result < 1) {
		result = 1;
	} else if (result > 20) {
		result = 20;
	}
	return result;
};

function initValues() {	
    document.getElementById("txtThaco").value = (localStorage.getItem("savedThaco") === null ? 19 : localStorage.getItem("savedThaco"));
	
	document.getElementById("txtWeapon1").value = (localStorage.getItem("savedWeapon1") === null ? "Weapon1" : localStorage.getItem("savedWeapon1"));
	document.getElementById("txtWeapon2").value = (localStorage.getItem("savedWeapon2") === null ? "Weapon2" : localStorage.getItem("savedWeapon2"));
	document.getElementById("txtWeapon3").value = (localStorage.getItem("savedWeapon3") === null ? "Weapon3" : localStorage.getItem("savedWeapon3"));
	document.getElementById("txtWeapon4").value = (localStorage.getItem("savedWeapon4") === null ? "Weapon4" : localStorage.getItem("savedWeapon4"));
	
	document.getElementById("txtWMod1").value = (localStorage.getItem("savedWMod1") === null ? 0 : localStorage.getItem("savedWMod1"));
	document.getElementById("txtWMod2").value = (localStorage.getItem("savedWMod2") === null ? 0 : localStorage.getItem("savedWMod2"));
	document.getElementById("txtWMod3").value = (localStorage.getItem("savedWMod3") === null ? 0 : localStorage.getItem("savedWMod3"));
	document.getElementById("txtWMod4").value = (localStorage.getItem("savedWMod4") === null ? 0 : localStorage.getItem("savedWMod4"));	

	document.getElementById("txtAc").value = (localStorage.getItem("savedAc") === null ? 10 : localStorage.getItem("savedAc"));
	document.getElementById("txtOther").value = (localStorage.getItem("savedOther") === null ? 0 : localStorage.getItem("savedOther"));

	calc();
};

function saveValues() {
	localStorage.setItem("savedThaco", document.getElementById("txtThaco").value);
	
	localStorage.setItem("savedWeapon1", document.getElementById("txtWeapon1").value);
	localStorage.setItem("savedWeapon2", document.getElementById("txtWeapon2").value);
	localStorage.setItem("savedWeapon3", document.getElementById("txtWeapon3").value);
	localStorage.setItem("savedWeapon4", document.getElementById("txtWeapon4").value);
	
	localStorage.setItem("savedWMod1", document.getElementById("txtWMod1").value);
	localStorage.setItem("savedWMod2", document.getElementById("txtWMod2").value);
	localStorage.setItem("savedWMod3", document.getElementById("txtWMod3").value);
	localStorage.setItem("savedWMod4", document.getElementById("txtWMod4").value);
	
	localStorage.setItem("savedAc", document.getElementById("txtAc").value);
	localStorage.setItem("savedOther", document.getElementById("txtOther").value);
};

