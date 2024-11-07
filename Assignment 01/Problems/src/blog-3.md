Question: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Answer: As far As I know, there are three types of type guards such as typeof, In, & Instanceof. Typeguad is necessary to guard or to check to make sure type are particular object, boolean, string, number, array etc. TypeGuard can be used on functions and objects;

01) typeof: It is used to make sure which is a particular type for example, 

<!-- const add  = (param1: 10, param2: 10) =>{
   if(typeof param1 === 'number' && typeof param2 === 'number'){
       return param1+param2
   }
   else{
       return param1.toString() + param2.toString();
   }
 } -->

02) In: In is used to make sure particular property is available: 
<!-- type User ={
     name: string;
 }
 type AdminUser ={
     name: string;
     role:"admin"
 }

 const getUser = (user:User | AdminUser) =>{
     if('role' in user){
         console.log("admin user")
     }
     else{
         console.log("user")
     }
 } -->


03) Instanceof: It is used to checke wheather a particular property (object most probably) belong to a particular class or constructor function;