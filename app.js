const ImageElement = document.getElementById("Image");

function createNewImage() {
    const imgHeight = ImageElement.clientHeight;
    const imgWidth = ImageElement.clientWidth;

    let allRows = '';

    for (let y = 0; y < imgHeight; y++) {
        let row = '<div class="image-row" style="height: 1px;">';
        for (let x = 0; x < imgWidth; x++) {
            row += `<div class="singleton" style="background: ${randomColor()}; width: 1px; height: 1px;"></div>`;
        }
        row += '</div>';
        allRows += row;
    }

    ImageElement.innerHTML = allRows;
}

const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
};

document.getElementById("Refresh").addEventListener("click", () => {
    window.location.reload();
});

createNewImage();