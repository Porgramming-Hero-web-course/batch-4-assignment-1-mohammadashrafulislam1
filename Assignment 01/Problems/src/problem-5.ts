{
    // Problem 5:


    const getProperty = <X, Y extends keyof X>(obj:X, key:Y) =>{
        return obj[key];
    }
    
    const person = { name: "Alice", age: 30 };

    const property =(getProperty(person, "name"));
    console.log(property)

    // 
}