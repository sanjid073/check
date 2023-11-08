{
    // Abstraction in OOP
   
    interface Vehicle1 {
        startEngine() : void,
        moveEngine() : void
        stopEngine() : void
    }

    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log("I am starting the engine");
        }
        moveEngine(): void {
            console.log("moving engine");
        }
        stopEngine(): void {
            console.log("stop ensinge");
        }
    }

    const toyota = new Car1()
    toyota.startEngine()
    
   abstract class Car2{
     abstract   startCar() : void ;
      abstract  moveCar() : void;
      abstract  stopCar() : void; 
      test(){
        console.log("I am testing");
      }
    }

    class BmwCar extends Car2{
        startCar(): void {
            console.log("Bmw has started");
        }
        moveCar(): void {
            console.log("bmw moving");
        }
        stopCar(): void {
            console.log("bmw stop");
        }
        test(): void {
            console.log("sdfuhduijf");
        }
    }

    const car2 = new BmwCar()
    car2.stopCar()

}