function cekNum(num) {
    try {
        if (num == "") throw `Input is empty`;
        if (isNaN(num)) throw `Input is not a Number`;
        if (num > 10) throw `Input is too high`;
        if (num < 5) throw `Input is too low`;
        else throw (`${num}`);
    } catch (err) {
        console.log(`${err}`)
    } finally {
        console.log(`Done`)
    }
}

cekNum("");