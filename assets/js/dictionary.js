// Variable block - Start.
let searchInput = document.querySelector('input');
let btn = document.querySelector('.btn');
let clear = document.querySelector('.clear');
let wordsPara = document.querySelector('.wordsPara');
let examplePara = document.querySelector('.examplePara');
let exampleParaTwo = document.querySelector('.exampleParaTwo');
let sentence = document.querySelector('.sentence');
let istructionBox = document.querySelector('.istruction-box');
let noResults = document.querySelector('.noResults');
let clickSound = new Audio();
clickSound.src= "assets/audio/1.mp3";
// Variable block - End.

// addEventListener block - Start.
btn.addEventListener("click", words);
clear.addEventListener("click", clearSearch);
// addEventListener block - End.

// Function block - Start
// Function words - Start.
function words(){  
	clickSound.play();
		if(searchInput.value === 'happy' || searchInput.value === 'Happy' ){
			clear.style.display = 'flex';						
			istructionBox.style.display = "inline-block";
			noResults.style.display = "none";
			wordsPara.innerHTML = 'Word: happy - счастливый adj';
			examplePara.innerHTML = `Example 1: happy ending  - счастливый финал -  хороший конец`;
			exampleParaTwo.innerHTML = `Example 2: happy memories - счастливые воспоминания - приятные воспоминания`;
			sentence.innerHTML = `Sentence: I left pain and sorrow behind and felt happy again - Я оставил боль и горе позади и вновь почувствовал себя счастливым.`;		
		}else if(searchInput.value === 'table' || searchInput.value === 'Table'){
			clear.style.display = 'flex';	
			istructionBox.style.display = "inline-block";
			noResults.style.display = "none";
			wordsPara.innerHTML = 'Word: table - стол noun';
			examplePara.innerHTML = `Example 1: table knife  - столовый нож`;
			exampleParaTwo.innerHTML = `Example 2: table football - настольный футбол`;
			sentence.innerHTML = `Sentence: This furniture set includes a table and four chairs - В данный комплект мебели входят стол и четыре стула.`;
		}else if(searchInput.value === 'sun' || searchInput.value === 'Sun'){
			clear.style.display = 'flex';	
			istructionBox.style.display = "inline-block";
			noResults.style.display = "none";
			wordsPara.innerHTML = 'Word: sun - солнце nt';
			examplePara.innerHTML = `Example 1: sun filter  - солнцезащитный фильтр`;
			exampleParaTwo.innerHTML = `Example 2: sun simulator - имитатор солнца`;
			sentence.innerHTML = `Sentence: The sun is the major source of natural light - Солнце - это главный источник естественного освещения.`;
		}else{
			clear.style.display = 'flex';	
			istructionBox.style.display = 'none';
			noResults.style.display = 'flex';
			noResults.innerHTML = `No results for   <span class="noResaltWord"> "${searchInput.value}" </span>`;			
		}
}
// Function words - End.

// Function Reset
function clearSearch(){	
	window.location.reload();
}
// Function Reset
// Function block - End.