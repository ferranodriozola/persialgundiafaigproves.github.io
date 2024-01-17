//Botó
document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('.clickable-checkbox');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
    });

    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        checkboxContainer.classList.toggle('hidden');
    });
});


// Funció per gestionar el clic del botó "Mostrar/Ocultar Checkboxs"
function toggleCheckboxes() {
    var checkboxes = document.querySelectorAll('.clickable-checkbox');
    var verbsList = document.getElementById("verbsList");
    var indicatiuList = document.getElementById("indicatiuList");
    var subjuntiuList = document.getElementById("subjuntiuList");
    var nomsList = document.getElementById("nomsList");
    var adjectiusList = document.getElementById("adjectiusList");
    var determinantsList = document.getElementById("determinantsList");



    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
    });

    verbsList.style.display = "block";
    indicatiuList.style.display = "block";
    subjuntiuList.style.display = "block";
    nomsList.style.display = "block";
    adjectiusList.style.display = "block";
    determinantsList.style.display = "block";


}



function toggleVerbsList() {
    var verbsList = document.getElementById("verbsList");
    var checkbox1 = document.getElementById("checkbox1");

    verbsList.style.display = checkbox1.checked ? "block" : "none";
}

function toggleIndicatiuList() {
    var indicatiuList = document.getElementById("indicatiuList");
    var indicatiucheckbox = document.getElementById("indicatiucheckbox");

    indicatiuList.style.display = indicatiucheckbox.checked ? "block" : "none";
}

function toggleSubjuntiuList() {
    var subjuntiuList = document.getElementById("subjuntiuList");
    var subjuntiucheckbox = document.getElementById("subjuntiucheckbox");

    subjuntiuList.style.display = subjuntiucheckbox.checked ? "block" : "none";
}




function toggleNomsList() {
    var nomsList = document.getElementById("nomsList");
    var checkbox2 = document.getElementById("checkbox2");

    nomsList.style.display = checkbox2.checked ? "block" : "none";
}

function toggleAdjectiusList() {
    var adjectiusList = document.getElementById("adjectiusList");
    var checkbox3 = document.getElementById("checkbox3");

    adjectiusList.style.display = checkbox3.checked ? "block" : "none";
}


function toggleDeterminantsList() {
    var determinantsList = document.getElementById("determinantsList");
    var checkbox4 = document.getElementById("checkbox4");

    determinantsList.style.display = checkbox4.checked ? "block" : "none";
}

function togglePronomsList() {
    var pronomsList = document.getElementById("pronomsList");
    var checkbox5 = document.getElementById("checkbox5");

    pronomsList.style.display = checkbox5.checked ? "block" : "none";
}