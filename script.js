var bobEle = document.body.querySelector(".bob_ele");
var mavisEle = document.body.querySelector(".mavis_ele");
var mortyEle = document.body.querySelector(".morty_ele");
var totalEle = document.body.querySelector(".total");
var health = 0;
var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true,
    type: "ice"
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true,
    type: "fire"
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true,
    type: "fire"
  }
];

totalEle.innerHTML = health;

function attacks(dmg, type, character) {
  if (type == "fire") {
    health = health - (dmg - 1);
  } else if (type == "ice") {
    health = health - (dmg + 1);
  }
  totalEle.innerHTML = health;

  if (health <= 0) {
    document.body.innerHTML = "You have defeated the dragon!";
  }
}
bobEle.addEventListener("click", function(){
  attacks(health);
})
mavisEle.addEventListener("click", function(){
  attacks(health);
})
mortyEle.addEventListener("click", function(){
  attacks(health);
})