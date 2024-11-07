"use strict";
{
    const updateProfile = (key, updates) => {
        return Object.assign(Object.assign({}, key), updates);
    };
    // Sample Input :
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    // 
}
