// Подсчет суммы элементов массива, в том числе строковых элементов

function sumMixArr(arr){
    let result = arr.reduce((sum, current) => sum + current, 0);
    console.log(result);
};

//arr = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];
arr = [1, 2, 3, 4, 5];

sumMixArr(arr);