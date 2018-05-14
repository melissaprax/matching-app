
let puppy = {  "name":"puppy",
    "photo":"./images/puppy.png",
    "scores":[
        0,
        5,
        0,
        5,
        0,
        0,
        0,
        0,
        0,
        0
      ]
  }
  let kitten = {  "name":"kitten",
    "photo":"./images/kitten.jpg",
    "scores":[
        0,
        0,
        5,
        0,
        0,
        0,
        5,
        0,
        0,
        0
      ]
  }
  let rock = {  "name":"rock",
    "photo":"./images/petrock.jpg",
    "scores":[
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        5
      ]
  }
  let parakeet = {  "name":"parakeet",
    "photo":"./images/parakeet.jpeg",
    "scores":[
        5,
        0,
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0
      ]
  }
  let fish = {  "name":"fish",
    "photo":"./images/fish.jpg",
    "scores":[
        0,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        5,
        0
      ]
  }

  let userArray = [];

  let totalDifference = function(userArray){

userArray.reduce(add, 0);

function add(a, b) {
    return a + b;
}

  }