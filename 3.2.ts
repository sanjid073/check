{
    // 

    class Parent {
        name : string;
        age : number;
        email : string

        constructor ( name : string, age : number, email : string) {
            this.name = name,
            this.age = age,
            this.email = email
        }
        takeSleep (hoursOfSleep : number) {
          console.log(`this ${this.name} student sleep ${hoursOfSleep}`);
        }
    }
    class Student extends Parent {
        constructor ( name : string, age : number, email : string) {
           super(name, age, email)
        }
        takeSleep (hoursOfSleep : number) {
          console.log(`this ${this.name} student sleep ${hoursOfSleep}`);
        }
    }
    class Teacher extends Parent {

        number : number

        constructor ( name : string, age : number, email : string, number : number) {
            super(name,age,email)
            this.number = number
        }
        takeSleep (hoursOfSleep : number) {
          console.log(`this ${this.name} student sleep ${hoursOfSleep}`);
        }
        takeRest(hoursOfRest){
            console.log(`this ${this.name} teacher will rest ${hoursOfRest}`);
        }
    }

   const student1 = new Student("Sanjid", 10, "sanjid@gmail.com")
   const teacher1 = new Teacher("Sanjid", 10, "sanjid@gmail.com", 17498755)
//    student1.takeSleep(20)
//    console.log(student1);
   teacher1.takeRest(50)







}