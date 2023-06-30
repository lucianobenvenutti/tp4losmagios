const cont_cards = document.getElementById("cards");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchInput = document.getElementById('buscar');

let templateCard = ""

function createCards() {
    templateCard = ""
    sillas.forEach( (sillas) => {
        templateCard += `<div class="card">
        <img src="${sillas.image}" alt="${sillas.type} ${sillas.id}">
        <p>${sillas.name}</p>
        <a href="./info_sillas.html?id=${sillas.id}" class="btn btn-info">Los Magios</a>
        </div>`;
    })
    cont_cards.innerHTML = templateCard;
}

let sillasFiltered = [];
let checkSelected = [];

if (checkSelected.length === 0) {
    templateCard = ""
    createCards()
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkSelected.push(checkbox.value);
            console.log("PICKEO")
            createCardsInCheck()
        } else {
            const index = checkSelected.indexOf(checkbox.value);
            checkSelected.splice(index, 1);

            createCardsInCheck()
            if (checkSelected.length === 0) {
                templateCard = ""
                createCards()
            }
        }
    });
}
);

function createCardsInCheck() {
    sillasFiltered = sillas.filter(silla => checkSelected.includes(silla.type));

    const textoBusqueda = searchInput.value.toLowerCase();
    if (textoBusqueda !== '') {
        sillasFiltered = sillasFiltered.filter(silla => silla.name.toLowerCase().includes(textoBusqueda));
    }
    templateCard = ""
    sillasFiltered.forEach((silla) => {
        templateCard += `<div class="card">
        <img src="${silla.image}" alt="${silla.type} ${silla.id}">
        <p>${silla.name}</p>
        <a href="./info_sillas.html?id=${silla.id}" class="btn btn-info">Los Magios</a>
        </div>`;
    });
    cont_cards.innerHTML = templateCard;
}


let sillasFilteredInput = []
searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value;

    createCardsInInput()

    if (sillasFilteredInput.length === 0) {
        cont_cards.innerHTML = "<h2>Sin Resultados</h2>"
    }
  }
  );

  function createCardsInInput() {
    const textoBusqueda = searchInput.value.toLowerCase();

    if (checkSelected.length > 0) {
        sillasFilteredInput = sillasFiltered.filter(silla => checkSelected.includes(silla.type));
    } else {
        sillasFilteredInput = sillas;
    }

    sillasFilteredInput = sillasFilteredInput.filter(silla => silla.name.toLowerCase().includes(textoBusqueda));

    templateCard = ""
    sillasFilteredInput.forEach((silla) => {
        templateCard += `<div class="card">
        <img src="${silla.image}" alt="${silla.type} ${silla.id}">
        <p>${silla.name}</p>
        <a href="./info_sillas.html?id=${silla.id}" class="btn btn-info">Los Magios</a>
        </div>`;
    })
    cont_cards.innerHTML = templateCard;
}
