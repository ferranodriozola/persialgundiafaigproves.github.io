// Per les caselles clicables de sota
function toggleList(listId) {
    var list = document.getElementById(listId);
    list.style.display = (list.style.display === 'none') ? 'block' : 'none';

    var checkboxes = list.querySelectorAll('.clickable-checkbox');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = list.style.display === 'block';
    });
}

// JavaScript function to toggle the checkbox
function toggleButton() {
    var checkbox = document.getElementById('toggleButton');
    if (checkbox.checked) {
        // Checkbox is checked
        console.log('Checkbox is checked');
    } else {
        // Checkbox is unchecked
        console.log('Checkbox is unchecked');
    }
}







// Funció de cerca
function search() {
    console.log('Inici de la funció search');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('resultContainer');

    // Obtenir la lletra introduïda
    const searchTerm = searchInput.value.toLowerCase();

    // Carregar dinàmicament les dades des de l'arxiu de text
    return fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            console.log('Dades carregades amb èxit');
            processData(data, searchTerm, resultDiv);
        })
        .catch(error => {
            console.error('Error carregant les dades:', error);
            resultDiv.innerHTML = 'Error en carregar les dades.';
        })
        .finally(() => {
            console.log('Final de la funció search');
        });
}







// Processar les dades i mostrar el resultat
function processData(data, searchTerm, resultDiv) {
    console.log('Inici de la funció processData');
    console.log('Dades rebudes',);

    const dropdowns = document.querySelectorAll('select');
    const selectedValues = {};

    dropdowns.forEach((dropdown, index) => {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        if (selectedOption) {
            selectedValues[`dropdown${index + 1}`] = selectedOption.value.toLowerCase();
        }
    });

    console.log('Valors dels dropdowns:', selectedValues);

    const valueDropdown1rima = selectedValues.dropdown1;
    const valueDropdown2inici = selectedValues.dropdown2;
    const valueDropdown3silabes = selectedValues.dropdown3;

    const lines = data.split('\n');
    let matches = [];

    for (let i = 0; i < lines.length; i++) {
        const [firstColumn, secondColumn] = lines[i].split(',');
        const currentTerm = secondColumn.trim().toLowerCase();
        const firstLetter = firstColumn.trim().toLowerCase()[0]; // Obté la primera lletra
        console.log(`Primera lletra "${firstLetter}"`);

        // Comprovar si el terme de cerca existeix a la segona columna
        console.log(`Comparant amb ${currentTerm}`);
        if (currentTerm === searchTerm) {
            console.log('Coincidència trobada!');

            if (valueDropdown2inici === 'inici.indiferent') {
                // Afegir a matches si valueDropdown2 és igual a 1
                matches.push(firstColumn.trim());
            } else if (valueDropdown2inici === 'inici.vocal.h' && (['a', 'e', 'i', 'o', 'u'].includes(firstLetter))) {
                // Afegir a matches si valueDropdown2 és igual a 2 i firstLetter és una de les vocals
                matches.push(firstColumn.trim());
            } else if (valueDropdown2inici === 'inici.consonant' && (!['a', 'e', 'i', 'o', 'u'].includes(firstLetter))) {
                // Afegir a matches si valueDropdown2 és igual a 3 i firstLetter NO és una de les vocals
                matches.push(firstColumn.trim());
            }
            // Pots afegir més condicions aquí segons les teves necessitats
        }
    }

    console.log('Matches finals:', matches);

    // Mostrar els resultats amb salts de línia si hi ha coincidències
    if (matches.length > 0) {
        resultDiv.innerHTML = `${matches.join('<br>')}<br><br>`;
    } else {
        resultDiv.innerHTML = 'No s\'han trobat coincidències.';
    }

    console.log('Final de la funció processData');
}
