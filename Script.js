(function preencherBody(){
const body = document.body;
body.innerHTML = '<div class="tela">'+
					'<div class="cabecalho"><p>Clique nos Círculos para multiplica-los, pressione ctrl+z para recomeçar.</p></div>'+
					'<div class="margem" id="divPai">'+		
						'<div class="circle" id="blue-circle"></div>'+
						'<div class="circle" id="black-circle"></div>'+
						'<div class="circle" id="red-circle"></div>'+
						'<div class="circle" id="pink-circle"></div>'+
						'<div class="circle" id="yellow-circle"></div>'+
					'</div>'+
				'</div>'
body.style.backgroundColor = 'grey';					
})()

let redCircle = '<div class="circle" id="red-circle"></div>';
let yellowCircle = '<div class="circle" id="yellow-circle"></div>';
let blueCircle = '<div class="circle" id="blue-circle"></div>';
let pinkCircle = '<div class="circle" id="pink-circle"></div>';
let blackCircle = '<div class="circle" id="black-circle"></div>';
let space = '<br/><br/><br/><br/><br/><br/>'

document.getElementById("red-circle").onclick = function () {
	let circle = document.getElementById("red-circle").innerHTML;
	document.getElementById("red-circle").innerHTML = `${circle} ${space} ${redCircle}`;
};

document.getElementById("blue-circle").onclick = function () {
	let circle = document.getElementById("blue-circle").innerHTML;
	document.getElementById("blue-circle").innerHTML = `${circle} ${space} ${blueCircle}`;
};

document.getElementById("yellow-circle").onclick = function () {
	let circle = document.getElementById("yellow-circle").innerHTML;
	document.getElementById("yellow-circle").innerHTML = `${circle} ${space} ${yellowCircle}`;
};

document.getElementById("black-circle").onclick = function () {
	let circle = document.getElementById("black-circle").innerHTML;
	document.getElementById("black-circle").innerHTML = `${circle} ${space} ${blackCircle}`;
};

document.getElementById("pink-circle").onclick = function () {
	let circle = document.getElementById("pink-circle").innerHTML;
	document.getElementById("pink-circle").innerHTML = `${circle} ${space} ${pinkCircle}`;
};

// make all circles visible again.
window.onkeydown = function (event) {
        if (event.ctrlKey && event.key === "z") {
                document.getElementById("red-circle").innerHTML = `${redCircle}`
                document.getElementById("blue-circle").innerHTML = `${blueCircle}`
                document.getElementById("yellow-circle").innerHTML = `${yellowCircle}`
                document.getElementById("black-circle").innerHTML = `${blackCircle}`
                document.getElementById("pink-circle").innerHTML = `${pinkCircle}`
        }
};