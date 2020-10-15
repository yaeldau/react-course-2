class Summer {
    constructor() {
        this.value = 0;
    }

    add (num) {
        this.value += num;
    }
    
    getCurrentSum() {
        return this.value;
    }
}

const s1 = new Summer();
const s2 = new Summer();

s1.add(10);
s1.add(20);

s2.add(30);

s2.add(5);

// prints 30
console.log(s1.getCurrentSum());

// prints 35
console.log(s2.getCurrentSum());