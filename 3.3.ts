{
  //
//   typeof type guard
 type Alphanumeric = number | string
  const add = (
    param1: Alphanumeric,
    param2: Alphanumeric
  ): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      const result = param1 + param2;
      return result;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  
  console.log(add("1","2"))

//   in guard

type NormalUser = {
    name : string;
}
type AdminUser = {
    name : string;
    role : "admin"
}
const getUser = (user : NormalUser | AdminUser)=> {
    if("role" in user){
       console.log(`this is ${user.name}, He is a ${user.role}`);
    }else{
        console.log(`this is ${user.name}, he is a normal user`);
    }
}
const normalUser : NormalUser = {
    name: "Sanjid"
}
const adminUser : AdminUser = {
    name : "mahi",
    role : "admin"
}
getUser(adminUser)

}
