module.exports = function getZerosCount(number) {
    let numFloor = Math.floor(number / 5);
    let num = 0;
    while(numFloor !== 0){
        num += numFloor;
        numFloor = Math.floor(numFloor / 5);
    }
    return num;
};

