function cekNum(num) {
    for (let i = 1; i <= num; i++) {
        try {
            if (i == "") throw `Input is empty`;
            if (isNaN(i)) throw `Input is not a Number`;
            if (i > 10) throw `${i} is too high`;
            if (i < 5) throw `${i} is too low`;
            else throw (`${i}`);
        } catch (err) {
            console.log(`${err}`)
        }
    }
}

cekNum(5);