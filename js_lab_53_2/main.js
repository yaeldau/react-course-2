class Autocomplete {

    constructor(element) {
        this.options = [];
        element.innerHTML = `
        <div class="autocomplete">
            <input class="input-text" type="text" placeholder="Enter name...">
            <p class="options-list"></p>
        </div>
        `;
        this.optionsList = element.querySelector('.options-list');
        this.inputText = element.querySelector('.input-text');

        this.root = element;
        element.querySelector('input').addEventListener('input', () => {this.fillList()});
    }

    setOptions(options) {
        this.options = options;
        this.fillList();
    }

    fillList() {
        let currentText = this.inputText.value;
        let list = this.options.filter(option => option.toLowerCase().startsWith(currentText.toLowerCase()))
        this.optionsList.innerHTML = ``;
        list.forEach(item => {
            this.optionsList.innerHTML += `<option value=${item}> ${item} </option>`
        })        
    }

}

const element = document.createElement('div');
document.body.appendChild(element);
let namesAotucomplete = new Autocomplete(element);
namesAotucomplete.setOptions(["Yael","Nadav", "Aviv","Dor", "Liad", "Chen", "Yahav", "Yair", "Naor", "Nadin"]);

const elementBR = document.createElement('br');
document.body.appendChild(elementBR);

const element2 = document.createElement('div');
document.body.appendChild(element2);
let lastnamesAotucomplete = new Autocomplete(element2);
lastnamesAotucomplete.setOptions(["Dauber", "Taragan", "Erez", "RDT"]);
