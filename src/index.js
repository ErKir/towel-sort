
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix.length === 0) {
        return [];
    }
    const towelFlatten = list => list.flatMap((element, index) => {
       return index % 2 !== 0 ? element.reverse() : element;
    });
    return towelFlatten(matrix);
};


