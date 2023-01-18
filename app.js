let pendants = document.querySelectorAll("#pendant");

const pendantInfo = document.getElementById("pendant-info");
let pendantSize, emptySpaceColor;
pendantInfo.addEventListener("change", function(event) {
    pendantSize = parseInt(document.getElementById("pendant-size").value);
    emptySpaceColor = document.getElementById("empty-space-color").value;
    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.height = pendantSize + 'mm';
        pendants[i].style.width = pendantSize + 'mm';
        pendants[i].style.backgroundColor = emptySpaceColor;
    }    
})

const uploadBtn = document.getElementById('customer-photo-upload');
uploadBtn.addEventListener("change", function(event) {
    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
    }
});

let scale, positionUpDown, positionLeftRight, rotate;
let brightness = document.getElementById('brightness').value;

const photoEditor = document.getElementById('photo-editor');
photoEditor.addEventListener("input", function(event) {
    scale = document.getElementById('scale').value;
    positionUpDown = document.getElementById('position-up-down').value;
    positionLeftRight = document.getElementById('position-left-right').value;
    rotate = document.getElementById('rotate').value;
    brightness = document.getElementById('brightness').value;
    pendantPreviewChanges(scale, positionUpDown, positionLeftRight, rotate, brightness);

    changeBrightnessValueText();
})

const brightnessValueText = document.getElementById('brightness-value-text');
function changeBrightnessValueText() {
    brightnessValueText.innerText = brightness;
}

changeBrightnessValueText();

function pendantPreviewChanges(scale, positionUpDown, positionLeftRight, rotate, brightness) {
    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.backgroundSize = scale + '%';
        pendants[i].style.backgroundPositionX = positionLeftRight + '%';
        pendants[i].style.backgroundPositionY = positionUpDown + '%';
        pendants[i].style.transform = 'rotate(' + rotate + 'deg)';
        pendants[i].style.filter = 'brightness(' + brightness + ')';
    }
}