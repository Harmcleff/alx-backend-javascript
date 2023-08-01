class House{
    constructor(name,size){
        this.name = name
        this.size = size
    }
    
    intro(){
        console.log(`This is house ${this.name}`)
    }
    
    sizey(length){
        console.log(`House ${this.name} is of size ${this.size} and ${length}`)
    }
}

class window extends House{
    constructor(name,size,color){
        super(name,size)
        this.color = color
    }
    
    checky(){
        console.log(`This is house ${this.name} and ${this.color}`)
    }
}

const h1 = new House('Kuto',50,'red')
const h2 = new House('Oshodi',50,'blue')

h1.intro();
h1.sizey(5);
h1.checky();
h2.intro();
