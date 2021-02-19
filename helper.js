function calc() {
	
	document.getElementById("txtToHit1").value = calcWeapon(document.getElementById("txtWMod1").value);
	document.getElementById("txtToHit2").value = calcWeapon(document.getElementById("txtWMod2").value);
	document.getElementById("txtToHit3").value = calcWeapon(document.getElementById("txtWMod3").value);
	document.getElementById("txtToHit4").value = calcWeapon(document.getElementById("txtWMod4").value);
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
	};
	return result;
};

function initValues() {
	document.getElementById("txtAc").value = 10;
	document.getElementById("txtThaco").value = 19;	
	document.getElementById("txtOther").value = 0;
	document.getElementById("txtWMod1").value = 0;
	document.getElementById("txtWMod2").value = 0;
	document.getElementById("txtWMod3").value = 0;
	document.getElementById("txtWMod4").value = 0;
	calc();
};