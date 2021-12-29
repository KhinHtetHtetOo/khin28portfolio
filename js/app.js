// Start Navbar

// for navbutton
const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click', () => {
    navbuttons.classList.toggle('changes');
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
	const getscrolly = window.scrollY;

	if (getscrolly >= 20 ) {
		navbar.classList.add('navmenus');
	}else{
		navbar.classList.remove('navmenus');
	}
});


//for banner
const word = document.querySelector('.words');
const word2 = document.querySelector('.word2s')
const text1 = "I am web developer!";
const text2 = "Trying to be a full-stack developer.."

// console.log(pgh.length);

let idx = 1;
let speed = 1000;


function autotext(){
	// console.log('hay');
	word.innerText = text1.slice(0,idx);
	idx++;

	if (idx > text1.length) {
		idx = 1;
	}

	setTimeout(autotext,500);
}

autotext();

let idx2 = 1;
function autotext2(){
	// console.log('hay');
	word2.innerText = text2.slice(0,idx2);
	idx2++;

	if (idx2 > text2.length) {
		idx2 = 1;
	}

	setTimeout(autotext2,400);
}

autotext2();


//UI
const boxes = document.querySelectorAll('.boxes');
// console.log(boxes);

window.addEventListener('scroll',checkboxes);

function checkboxes(){
	let innerheight = window.innerHeight / 5 *4;
	// console.log(innerHeight);

	// console.log('hay');

	boxes.forEach(boxes =>{
     // console.log(box);

     const boxtop = boxes.getBoundingClientRect().top;

     // console.log(boxtop);

     if (boxtop < innerheight) {
     	boxes.classList.add('show');
     }else{
     	boxes.classList.remove('show');
     }
	});
}