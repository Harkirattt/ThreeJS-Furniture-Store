const mongoose = require('mongoose');
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");
let searchVal;

main().catch(err => console.log(err));

async function onClicker(){
  searchVal = search.value;
  const Item = mongoose.model('searchedItem', searchedItem);
  const chair = new Item({ name: `${searchVal}` });
  await chair.save();
  chair.speak(); // "Meow name is fluffy"
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  searchBtn.addEventListener('click',()=>{
    console.log("F")
    onClicker();
  })

  const searchedItem = new mongoose.Schema({
    name: String
  });
//   const silence = new Item({ name: 'Silence' });
//   console.log(silence.name);
  searchedItem.methods.speak = function speak() {
    const greeting = 'Meow name is ' + this.name;
    console.log(greeting);
};

  // 'Silence'
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}