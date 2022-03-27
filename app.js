const Image = document.getElementById("Image");
let imgHeight = Image.clientHeight;
let imgWidth = Image.clientWidth;

function createRows() {
	for (let i = 0; i < imgHeight; i++) {
		const row = document.createElement("div");
		row.classList.add("image-row");
		row.classList.add(`i-${i}`);
		Image.appendChild(row);
	}
}

function fillRows() {
	const allRows = document.querySelectorAll(".image-row");
	allRows.forEach((row) => {
		for (let i = 0; i < imgWidth; i++) {
			const singleton = document.createElement("div");
			singleton.classList.add("singleton");
			singleton.classList.add(`i-${i}`);
			singleton.style.background = randomColor();
			row.appendChild(singleton);
		}
	});
}

const randomColor = () => {
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const random = Math.random();
		const bit = (random * 16) | 0;
		color += bit.toString(16);
	}
	return color;
};

function createNewImage() {
	createRows();
	fillRows();
}

document.getElementById("Refresh").addEventListener("click", (e) => {
	window.location.reload();
});

createNewImage();
