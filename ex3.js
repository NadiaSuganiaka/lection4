function Animal(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = function() {
        console.log(sound);
    }
}

const types = prompt('Enter cat or dog');

 if(types === 'cat'){
    const catName = prompt("Enter your cat's name ");
    let cat = new Animal(catName, types, 'Meow!');
    cat.sound();
 } else if(types === 'dog'){
    const dogName = prompt("Enter your dog's name ");
    let dog = new Animal(dogName, types, 'Woof!');
    dog.sound();
 } else{
    alert ("Please enter cat or dog");
 }



