class Pokemon{
    constructor(name, type, color){
    this.name = name
    this.type = type
    this.color = color 
        this.showMore = function(){
            console.log("object is "+this.name +" and it's type "+this.type+" and it's color is "+this.color);
        }
}


}




// function showMore(n){
  

// }

const pika = new Pokemon("Pikachu","electric","yellow")
const eve = new Pokemon("Eevee","normal","brown")
const sqr = new Pokemon("Squirtle","water","blue")

pika.showMore()
eve.showMore()
sqr.showMore()