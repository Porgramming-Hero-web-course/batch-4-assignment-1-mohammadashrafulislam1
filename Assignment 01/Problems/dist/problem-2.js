"use strict";
{
    // Problem 2
    // Function
    const removeDuplicates = (param) => {
        const filterNumber = param.filter((num, index) => param.indexOf(num) === index);
        console.log(filterNumber);
    };
    // Input:
    removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    // 
}
