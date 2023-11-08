{

    class Animal {
        name : string;
        species: string

        constructor (name : string, species : string) {
         this.name = name,
         this.species = species
        }

        makeSound () {
            console.log("this is animal sound");
        }

    }

    class Dog extends Animal{
        constructor(name : string, species : string){
           super(name, species)
        }

        makeBark(){
            console.log("this is Dog Barking");
        }
    }
   
    class Cat extends Animal{
        constructor(name : string, species : string){
           super(name, species)
        }

        makemew(){
            console.log("this is Cat vhai");
        }
    }

    const dog = new Dog("mr dog vhai", "dog")
    // dog.makeBark()
    const cat = new Cat ("mr cat vhai", "cat")

    const isDog= (animal : Animal) : animal is Dog => {
     return animal instanceof Dog;
    }
    const isCat = (animal : Animal) : animal is Cat =>{
     return animal instanceof Cat;
    }
    
    const getAnimal = (animal : Animal) =>{
       if(isDog(animal)){
        animal.makeBark();
       }else if (isCat(animal)){
       animal.makemew();
       }else{
        animal.makeSound()
       }
    }

    getAnimal(dog)

   

// 
}