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
        const input = element.querySelector('input');
        const plist = element.querySelector('p');

        this.init(input);
        this.handleOptionsVisibility(input, plist);
    }
    
    init(input) {
        input.addEventListener('input', () => {this.fillList()});
    }

    handleOptionsVisibility(input, plist) {
        input.addEventListener('focus', (event) => {
            plist.style.visibility = 'visible';
          });
          
        input.addEventListener('blur', (event) => {
            plist.style.visibility = 'hidden';
        });
        plist.style.visibility = 'hidden'; 
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
