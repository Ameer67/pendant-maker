let pendants = document.querySelectorAll("#pendant");

const pendantInfo = document.getElementById("pendant-info");
let pendantSize;
let emptySpaceColor;
// let bgRepeat;

pendantInfo.addEventListener("change", function(event) {
    pendantSize = parseInt(document.getElementById("pendant-size").value);
    emptySpaceColor = document.getElementById("empty-space-color").value;
    // bgRepeat = document.getElementById("bg-repeat").checked;
    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.height = pendantSize + 'mm';
        pendants[i].style.width = pendantSize + 'mm';
        pendants[i].style.backgroundColor = emptySpaceColor;

        // if (bgRepeat === true) {
        //     pendants[i].style.backgroundRepeat = 'repeat';
        // } else {
        //     pendants[i].style.backgroundRepeat = 'no-repeat';
        // }
    }    
})

const uploadBtn = document.getElementById('customer-photo-upload');
let customerPhotoURL;

uploadBtn.addEventListener("change", function(event) {
    customerPhotoURL = URL.createObjectURL(event.target.files[0]);
    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.backgroundImage = "url(" + customerPhotoURL + ")";
    }
});

// let copiesSelect = document.getElementById("copies");
// copiesSelect.addEventListener("change", function(event){
//     const copies = parseInt(copiesSelect.value);

//     const pendantDiv = document.createElement("div");
//     pendantDiv.id = "pendant;"
    
//     if (copies > 1) {
//         // check how many pendants already exist
//     }

//     document.body.appendChild(pendantDiv);
// });

const photoEditor = document.getElementById('photo-editor');

photoEditor.addEventListener("input", function(event) {
    let scale = document.getElementById('scale').value;
    let positionUpDown = document.getElementById('position-up-down').value;
    let positionLeftRight = document.getElementById('position-left-right').value;
    let rotate = document.getElementById('rotate').value;
    let brightness = document.getElementById('brightness').value;

    for (i = 0; i < pendants.length; i++) {
        pendants[i].style.backgroundSize = scale + '%';
        pendants[i].style.backgroundPositionX = positionLeftRight + '%';
        pendants[i].style.backgroundPositionY = positionUpDown + '%';
        pendants[i].style.transform = 'rotate(' + rotate + 'deg)';
        pendants[i].style.filter = 'brightness(' + brightness + ')';
    }
    
})

