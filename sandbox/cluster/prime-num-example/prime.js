module.exports = (num) => {
    if ([2, 3, 5, 7, 11, 13, 17, 19, 23].indexOf(num) >= 0) return true;
    else if ([2, 3, 5].some(n => num % n == 0)) return false;
    else {
        let i = 5, w = 2;
        while ((i * i) <= num) {
            if (num % i == 0) return false
            i += w
            w = 6 - w
        }
    }
    return true
}