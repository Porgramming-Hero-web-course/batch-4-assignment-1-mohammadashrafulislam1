"use strict";
{
    // Problem 8:
    const validateKeys = (obj, keys) => {
        for (const key of keys) {
            if (!obj && !key) {
                return false; // return false
            }
        }
        return true; // return true
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
    // 
}
