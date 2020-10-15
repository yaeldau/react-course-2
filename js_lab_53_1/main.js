class CounterChars {
    constructor(el) {
        this.counter = 0;
    }

    count = () => {
        counterBox.innerHTML = ta.value.length;
    }
}

let counterChars = new CounterChars();
ta.addEventListener('change', function() {counterChars.count()})