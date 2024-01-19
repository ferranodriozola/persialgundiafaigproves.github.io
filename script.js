function toggleList(listID, checkboxID) {
    var listID = document.getElementById(listID);
    var checkboxID = document.getElementById(checkboxID);
    var isChecked = checkboxID.checked;

    listID.style.display = isChecked ? "block" : "none";

    var checkboxes = listID.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });
}

var matches = [
    "indefinit$base1$PI0MS000$b ˈa . z ə$ˈaə$a . z ə$aə$2",
    "interrogatiu$críptic$PT0MS000$k ɾ ˈi p . t i k$ˈii$i p . t i k$ii$2",
    "personal0$críptic$P010S000$k ɾ ˈi p . t i k$ˈii$i p . t i k$ii$2",
    "personalP$casa$PP1MSN00$k ˈa . z ə$ˈaə$a . z ə$aə$2",
    "possessiu$amfibi$PX1MS0S0$ə m . f ˈi . β i$əˈii$i . β i$ii$3",
    "relatiu$críptic$PR0CS000$k ɾ ˈi p . t i k$ˈii$i p . t i k$ii$2",
    "demostratiu$humà$PD0MS000$u . m ˈa . n ə$uˈaə$a . n ə$aə$3",
];

var matches_provisionals = matches


function handleCheckboxClickPronoms(event) {
    if (event.target.type === 'checkbox') {
        const checkboxLabel = event.target.parentNode.innerText.trim();

        if (checkboxLabel === 'Pronoms') {
            if (event.target.checked) {
                console.log('Checkbox "Pronoms" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('P');
                });
                matches_provisionals = matches_provisionals.concat(Lines);
            } else {
                console.log('Checkbox "Pronoms" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('P');
                });
            }

        } else if (checkboxLabel === 'Demostratius') {
            if (event.target.checked) {
                console.log('Checkbox "Demostratius" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('PD');
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Demostratius" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('PD');
                });
            }

        } else if (checkboxLabel === 'Indefinits') {
            if (event.target.checked) {
                console.log('Checkbox "Indefinits" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('PI');
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Indefinits" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('PI');
                });
            }
            
        } else if (checkboxLabel === 'Interrogatius / Exclamatius') {
            if (event.target.checked) {
                console.log('Checkbox "Interrogatius / Exclamatius" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('PT');
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Interrogatius / Exclamatius" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('PT');
                });
            }

        } else if (checkboxLabel === 'Personals (forts i febles)') {
            if (event.target.checked) {
                console.log('Checkbox "Personals (forts i febles)" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return (columnes[2].startsWith('PP') || columnes[2].startsWith('P0'));
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Personals (forts i febles)" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !(columnes[2].startsWith('PP') || columnes[2].startsWith('P0'));
                });
            }

        } else if (checkboxLabel === 'Possessius') {
            if (event.target.checked) {
                console.log('Checkbox "Possessius" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('PX');
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Possessius" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('PX');
                });
            }

        } else if (checkboxLabel === 'Relatius') {
            if (event.target.checked) {
                console.log('Checkbox "Relatius" clicat');
                const Lines = matches.filter(item => {
                    const columnes = item.split('$');
                    return columnes[2].startsWith('PR');
                });
                matches_provisionals = matches_provisionals.concat(Lines);

            } else {
                console.log('Checkbox "Relatius" desclicat');
                matches_provisionals = matches_provisionals.filter(item => {
                    const columnes = item.split('$');
                    return !columnes[2].startsWith('PR');
                });
            }
        }


        matches_provisionals.sort();

        actualitzarRimes();
        console.log(matches);
        console.log(matches_provisionals);
    }
}















var resultats = obtenirValorsSegonsPrimerCaracter(matches);
var elementsAMostrarPronoms = resultats.resultatsP;
var elementsAMostrarDeterminants = resultats.resultatsD;

function obtenirValorsSegonsPrimerCaracter(matches) {
    var resultatsP = [];
    var resultatsD = [];
    var resultatsAltres = [];

    for (var i = 0; i < matches.length; i++) {
        var terceraColumna = matches[i].split('$')[2];
        var primerCaracter = terceraColumna.charAt(0);
        var segonCaracter = terceraColumna.charAt(1);

        if (primerCaracter === "P") { //Pronoms
            if (segonCaracter === "D") { //Demostratius
                resultatsP.push(0);

            } else if (segonCaracter === "I") { //Indefinits
                resultatsP.push(1);

            } else if (segonCaracter === "T") { //Interrogatius / Exclamatius
                resultatsP.push(2);
             
            } else if (segonCaracter === "P" || segonCaracter === "0") { //Personals
                resultatsP.push(3);

            } else if (segonCaracter === "X") { //Possessius
                resultatsP.push(4);

            } else if (segonCaracter === "R") { //Relatius
                resultatsP.push(5);
            }                
        } else if (primerCaracter === "D") {
            // Accions per a "D"
            resultatsD.push();
        } else {
            // Accions per a altres tipus
            resultatsAltres.push("Accions per a altres tipus");
        }
    }

    // Retornar les variables amb els resultats
    return {
        resultatsP: resultatsP,
        resultatsD: resultatsD,
        resultatsAltres: resultatsAltres
    };
}

function cercar() {
    matches_provisionals = matches.slice();
    actualitzarRimes()
    var checkboxes = document.querySelectorAll('.clickable-checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
    
    mostrarTotesLesLlistes();
}


function actualitzarRimes() {
    matches_provisionals.sort();
    var numerorimes = "Nombre de rimes: " + matches_provisionals.length;
        document.getElementById("nombre").innerHTML = numerorimes;

    var rimes = "Rimes:<br><br>";
    for (var i = 0; i < matches_provisionals.length; i++) {
        var parts = matches_provisionals[i].split("$");
        rimes += parts[0] + "<br>";
    }

    document.getElementById("rimes").innerHTML = rimes;
}


function mostrarTotesLesLlistes() {
    obtenirValorsSegonsPrimerCaracter(matches)

    mostrarLlista('pronoms', elementsAMostrarPronoms);
    mostrarLlista('determinants', elementsAMostrarDeterminants);
}


function mostrarLlista(tipusLlista, elementsAMostrar) {
    if (elementsAMostrar.length > 0) {
        var titleSelector = '#checkboxContainer label input#' + (tipusLlista === 'pronoms' ? 'checkbox5' : 'checkbox4');
        var listSelector = '#' + tipusLlista + 'List';

        var listTitle = document.querySelector(titleSelector);
        var list = document.querySelector(listSelector);

        if (listTitle && list) {
            listTitle.parentElement.style.display = 'block';
            list.style.display = 'block';

            var elementsDeLlista = list.querySelectorAll('li');
            elementsDeLlista.forEach(function(element, index) {
                element.style.display = 'none';
            });

            elementsAMostrar.forEach(function(indexToShow) {
                if (indexToShow < elementsDeLlista.length) {
                    elementsDeLlista[indexToShow].style.display = 'list-item';
                }
            });
        }
    } else {
        var titleSelector = '#checkboxContainer label input#' + (tipusLlista === 'pronoms' ? 'checkbox5' : 'checkbox4');
        var listTitle = document.querySelector(titleSelector);

        if (listTitle) {
            listTitle.parentElement.style.display = 'none';
        }
    }
}
