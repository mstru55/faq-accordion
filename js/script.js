let accordionBox = document.querySelectorAll('.accordion-box');
let btnAccordion = document.getElementsByClassName('btn-accordion');
let contentText = document.getElementsByClassName('accordion-card-answer');
let btnPlus = document.getElementsByClassName('plus');
let btnMinus = document.getElementsByClassName('minus');

accordionBox.forEach((box) => {
	let btnAccordion = box.querySelector('.btn-accordion');
	console.log(box);
	btnAccordion.addEventListener('click', () => {
		let text = box.querySelector('.accordion-card-answer');
		text.classList.toggle('active');
	});
	btnAccordion.addEventListener('click', () => {
		let imgChange = box.querySelector('.btn-accordion');
		imgChange.classList.toggle('minus');
	});
});
