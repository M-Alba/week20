const starWarsElement = document.getElementById('starWarsElement');
const resultContainer = document.querySelector('.resultContainer');

forwardButton.onclick = function (event) {
    event.preventDefault();

    selectedElement = starWarsElement.value;
    const numberElement = document.getElementById('numberElement').value;

    fetch('https://swapi.dev/api/' + `${selectedElement}/` + numberElement)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка 404')
            }
            return response.json();
        })

        .then((people) => {
            resultContainer.innerHTML =
                `<p class="resultName">Name: ${people.name}</p>`
        })
        .catch((error) => {
            resultContainer.innerHTML =
                `<p class="errorText">${error.message}</p>`
        })
}