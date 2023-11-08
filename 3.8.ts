{
    class Person{
        getSleep(){
            console.log('A person need sleep 8 hours');
        }
    }
    class Student extends Person{
        getSleep(){
            console.log('A person need sleep 7 hours');
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log('A person need sleep 6 hours');
        }
    }
   
    

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()
    const getSleepingHours = (param : Person) =>{
        param.getSleep()
    }
    getSleepingHours(person1)


    class Shape {
        getArea() : number{
            return 0
        }
    }
    class Circle extends Shape{
        radius : number;
        constructor(radius : number){
            super()
            this.radius = radius
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Shape{
        width : number;
        height : number;
        constructor(width : number , height : number){
            super()
            this.width = width
            this.height = height
        }

        getArea() : number {
            return this.width * this.height
        }
    }
    const getShapeArea = (param : Shape) => {
        console.log(param.getArea());
   }
    const shape = new Shape()
    const circle = new Circle(10)
    const rectangle = new Rectangle(10, 20);

  
    getShapeArea(circle)
    
}