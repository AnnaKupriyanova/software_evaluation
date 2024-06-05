function openInsert(evt, insertName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(insertName).style.display = "block";
    evt.currentTarget.className += " active";
}

let arr = [  [3.2, 1.05],  
		     [3.0, 1.12],  
		     [2.8, 1.20]   
		  ];

let arr1 = [ [2.4, 1.05, 2.5, 0.38],  
		     [3.0, 1.12, 2.5, 0.35],  
		     [3.6, 1.20, 2.5, 0.32]   
		  ];

let a, b, c, d, size, PM, TM, EAF, EAFNS, PMNS, SCED;


//cocomo1

function calculate1(){
	if ((document.getElementById('LOC').value == 0) || (document.getElementById('LOC').value < 0)){
		alert(`Введите кол-во строчек кода!`);
	} else {
		size = parseFloat(document.getElementById('LOC').value);
		handleProjectType1(arr1);
		PM = a * Math.pow(size, b);
		TM = c * Math.pow(PM, d);
		document.getElementById('formula1').innerHTML = " = " + PM.toFixed(2);
		document.getElementById('formula2').innerHTML = " = " + TM.toFixed(2);
	}
}

function handleProjectType1(arr1){
	var selectedAns;
	var values = document.getElementsByName('type');
	for (var i = 0; i < values.length; i++) {
		if ((values[i].checked)) {
			selectedAns = parseInt(values[i].value);
		}
	}

	for (var i = 0; i < 3; i++){
		if (i == selectedAns){
			a = arr1[i][0];
			b = arr1[i][1];
			c = arr1[i][2];
			d = arr1[i][3];
		}
	}

}


function calculate(){
		if ((document.getElementById('LOC').value == 0) || (document.getElementById('LOC').value < 0)){
			alert(`Введите кол-во строчек кода!`);
		} else {
			size = parseFloat(document.getElementById('LOC').value);
			handleProjectType(arr);
			EAF = calcEAF();
			PM = EAF * a * Math.pow(size, b);
			handleProjectType1(arr1);
			TM = c * Math.pow(PM, d);
			document.getElementById('formula').innerHTML = " = " + PM.toFixed(2);
			document.getElementById('formula3').innerHTML = " = " + TM.toFixed(2);
		}
}

function handleProjectType(arr){
	var selectedAns;
	var values = document.getElementsByName('type');
	for (var i = 0; i < values.length; i++) {
		if ((values[i].checked)) {
			selectedAns = parseInt(values[i].value);
		}
	}

	for(var i = 0; i < 3; i++){
		if(i == selectedAns){
			a = arr[i][0];
			b = arr[i][1];
		}
	}

}

function calcEAF(){
	var result;
	result  = parseFloat(handleRadioBtn('11'));
	result *= parseFloat(handleRadioBtn('12'));
	result *= parseFloat(handleRadioBtn('13'));

	result *= parseFloat(handleRadioBtn('21'));
	result *= parseFloat(handleRadioBtn('22'));
	result *= parseFloat(handleRadioBtn('23'));
	result *= parseFloat(handleRadioBtn('24'));

	result *= parseFloat(handleRadioBtn('31'));
	result *= parseFloat(handleRadioBtn('32'));
	result *= parseFloat(handleRadioBtn('33'));
	result *= parseFloat(handleRadioBtn('34'));
	result *= parseFloat(handleRadioBtn('35'));

	result *= parseFloat(handleRadioBtn('41'));
	result *= parseFloat(handleRadioBtn('42'));
	result *= parseFloat(handleRadioBtn('43'));

	return result;
}

function handleRadioBtn(name){
   var selectedAns;
   var values = document.getElementsByName(name);
    for (var i = 0; i < values.length; i++) {
        if (values[i].checked) {
        	selectedAns = values[i].value;
        }
    }
    return selectedAns;
}




//cocomo2
let typeEstimation;

function handleTypeEstimation() {
	    typeEstimation = handleRadioBtn("typeEst");
}

function calculateCocomoTwo(){
	var a_prev = 2.94, b = 0.91, a_detail = 2.45, c = 3.67, d = 0.28;
	 handleTypeEstimation();

	 	if ((document.getElementById('LOC').value == 0) || (document.getElementById('LOC').value < 0)){
			alert(`Введите кол-во строчек кода!`);
		}else{
			size = parseFloat(document.getElementById('LOC').value);
			EAF = calcEAFCocomoTwo(0);
			EAFNS = calcEAFNSCocomoTwo(0);
			SCED = calcSCEDCocomoTwo(0);
			e = calcECocomoTwo() + b;
				if (typeEstimation==0){
					PM = EAF * a_prev * Math.pow(size, e);
					PMNS = EAFNS * a_prev * Math.pow(size, e);
					TM = SCED * c * Math.pow(PMNS, (d + 0.20 * (e-b)));
				}else {
					PM = EAF * a_detail * Math.pow(size, e);
					PMNS = EAFNS * a_detail * Math.pow(size, e);
					TM = SCED * c * Math.pow(PMNS, (d + 0.20 * (e-b)));
				}

			document.getElementById('formula11').innerHTML = " = " + PM.toFixed(2);
			document.getElementById('formula122').innerHTML = " = " + TM.toFixed(2);
		}
}

function calcECocomoTwo(){
	var result;
	
		result  = parseFloat(handleRadioBtn('211'));
		result += parseFloat(handleRadioBtn('212'));
		result += parseFloat(handleRadioBtn('213'));
		result += parseFloat(handleRadioBtn('214'));
		result += parseFloat(handleRadioBtn('215'));

		result *= 0.01;
		return result;

}

function calcEAFCocomoTwo(){
	var result;
	if (typeEstimation==0){
		result  = parseFloat(handleRadioBtn('221'));
		result *= parseFloat(handleRadioBtn('222'));
		result *= parseFloat(handleRadioBtn('223'));
		result *= parseFloat(handleRadioBtn('224'));
		result *= parseFloat(handleRadioBtn('225'));
		result *= parseFloat(handleRadioBtn('226'));
		result *= parseFloat(handleRadioBtn('227'));
	}else{

		result  = parseFloat(handleRadioBtn('231'));
		result *= parseFloat(handleRadioBtn('232'));
		result *= parseFloat(handleRadioBtn('233'));
		result *= parseFloat(handleRadioBtn('234'));
		result *= parseFloat(handleRadioBtn('235'));
		result *= parseFloat(handleRadioBtn('236'));

		result  = parseFloat(handleRadioBtn('241'));
		result *= parseFloat(handleRadioBtn('242'));
		result *= parseFloat(handleRadioBtn('243'));
		result *= parseFloat(handleRadioBtn('244'));
		result *= parseFloat(handleRadioBtn('245'));

		result  = parseFloat(handleRadioBtn('251'));
		result *= parseFloat(handleRadioBtn('252'));
		result *= parseFloat(handleRadioBtn('253'));

		result *= parseFloat(handleRadioBtn('261'));
		result *= parseFloat(handleRadioBtn('262'));
		result *= parseFloat(handleRadioBtn('263'));
	}

		return result;
}

function calcSCEDCocomoTwo(){
	var result;
	if (typeEstimation==0){
		result = parseFloat(handleRadioBtn('227'));
	} else {
		result = parseFloat(handleRadioBtn('263'));
	}
		return result;
}

function calcEAFNSCocomoTwo(){
	var result;
	if (typeEstimation==0){
		result  = parseFloat(handleRadioBtn('221'));
		result *= parseFloat(handleRadioBtn('222'));
		result *= parseFloat(handleRadioBtn('223'));
		result *= parseFloat(handleRadioBtn('224'));
		result *= parseFloat(handleRadioBtn('225'));
		result *= parseFloat(handleRadioBtn('226'));
	}else{

		result  = parseFloat(handleRadioBtn('231'));
		result *= parseFloat(handleRadioBtn('232'));
		result *= parseFloat(handleRadioBtn('233'));
		result *= parseFloat(handleRadioBtn('234'));
		result *= parseFloat(handleRadioBtn('235'));
		result *= parseFloat(handleRadioBtn('236'));

		result  = parseFloat(handleRadioBtn('241'));
		result *= parseFloat(handleRadioBtn('242'));
		result *= parseFloat(handleRadioBtn('243'));
		result *= parseFloat(handleRadioBtn('244'));
		result *= parseFloat(handleRadioBtn('245'));

		result  = parseFloat(handleRadioBtn('251'));
		result *= parseFloat(handleRadioBtn('252'));
		result *= parseFloat(handleRadioBtn('253'));

		result *= parseFloat(handleRadioBtn('261'));
		result *= parseFloat(handleRadioBtn('262'));
	}

		return result;
}