{
    // Problem 8: Too complicated

    const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
        for (const key of keys) {
            if (!obj && !key) {
                return false; // return false
            }
        }
        return true; // return true
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
   const validateKey = (validateKeys(person, ["name", "age"]));
   console.log(validateKey)

    // 
}