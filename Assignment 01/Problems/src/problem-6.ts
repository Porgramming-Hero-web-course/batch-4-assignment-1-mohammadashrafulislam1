{
    // Problem 6:
    
    interface Profile {
        name: string; age: number; email: string 
    }

    const updateProfile =(key:Profile, updates: Partial<Profile>): Profile=>{
        return { ...key, ...updates };
    }
// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
    
    // 
}