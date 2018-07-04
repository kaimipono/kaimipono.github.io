const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const radiusPoint = 1;

const thicknessLine = 2;

const btnDelete = document.getElementById('btn_delete');
const btnDraw = document.getElementById('btn_draw');
const btnClear = document.getElementById('btn_clear');

let color = '#000000';

const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener("change", (evt) => {
	color = evt.target.value;
});

let arrayOfPoint = [];

const drawPoint = (context, x, y, color, radius) => {
	context.beginPath();
	context.arc(x, y, 2, 0, 2*Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = radius;
	context.strokeStyle = color;
	context.stroke();
};

const drawLine = (context, x1, y1, x2, y2, color, width) => {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = width;
	context.strokeStyle = color;
	context.stroke();
};




class Point {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}


canvas.addEventListener('click', (evt) => {
	let x = evt.offsetX;
	let y = evt.offsetY;
	arrayOfPoint.push(new Point(x, y));
	drawPoint(ctx, x, y, color, radiusPoint);
});

btnDelete.addEventListener('click', () => {
	let n = arrayOfPoint.length;
	if (n) {
		let centerX = arrayOfPoint[n - 1].x;
		let centerY = arrayOfPoint[n - 1].y;
		ctx.clearRect(centerX - 3, centerY - 3, 6, 6);
		arrayOfPoint.pop();
	}
});

btnDraw.addEventListener('click', () => {
	btnDelete.setAttribute('disabled', 'disabled');
	let n = arrayOfPoint.length;
	if (n) {
		let arrX = [];
		let arrY= [];
		let arrXY = [];
		for (let i = 0; i < n; i++) {
			arrX.push(arrayOfPoint[i].x);
			arrY.push(arrayOfPoint[i].y);
			arrXY.push(arrayOfPoint[i].x * arrayOfPoint[i].y);
		};
		let sumX = arrX.reduce((prev, curr) => prev + curr, 0);
		let sumY = arrY.reduce((prev, curr) => prev + curr, 0);
		let sumXY = arrXY.reduce((prev, curr) => prev + curr, 0);
		let sumXX = Math.pow(Math.hypot.apply(null, arrX), 2);
		let a = ((sumX * sumY) - (n * sumXY))/(Math.pow(sumX, 2) - (n * sumXX));
		let b = (sumY - a * sumX)/n;
		
		let xmin = Math.min.apply(null, arrX) - 5;
		let xmax = Math.max.apply(null, arrX) + 5;
		let ymin = Math.round(a * xmin + b);
		let ymax = Math.round(a * xmax + b);
		drawLine(ctx, xmin, ymin, xmax, ymax, color, thicknessLine);
	}
});

btnClear.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	arrayOfPoint = [];
	btnDelete.removeAttribute('disabled');
});




