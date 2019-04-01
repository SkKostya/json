function toArray(v) {
    if (typeof v !== "object") {
      return v;
    }
    
    let arr = [];
    for (let n of Object.values(v)) {
        arr.push(toArray(n));
    }
    return arr;
}

const test1 = {
    A: {
        a: 'a'
    },
    B: {
        b1: {
            b11: 'b1'
        },
        b2: {
            b21: {
                b212: 'b22'
            },
            b22: 'b22'
        }
    }
};

const test2 = {
    b: "b",
    T: {
        b1: "b1",
        b3: {
            b2: "test"
        }
    }
};

console.log(toArray(test1));
console.log(toArray(test2));

