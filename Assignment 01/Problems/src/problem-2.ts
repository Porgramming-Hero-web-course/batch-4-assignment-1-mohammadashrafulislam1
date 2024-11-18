{
    // Problem 2
    
    // Function
    const removeDuplicates = (param: number[]) =>{
     const filterNumber = param.filter((num, index) => param.indexOf(num) === index)
     return(filterNumber)
    }
    // Input:
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(removeDuplicates)
    // 
}