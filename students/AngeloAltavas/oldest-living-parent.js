// Given the following data structure
// implement a oldestLivingParent method
// that will return the name of the oldest
// living parent.

var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
]

function oldestLivingParent(people) {
  var alive = [];
  var isParent = [];
  for(i=0; i<people.length; i++){
    if (people[i].age)
      alive.push(people[i]);
  }
  for(i=0; i<alive.length; i++) {
    for(j=0; j<alive.length; j++){
      if (alive[i].name === alive[j].parent)
        isParent.push(alive[i]);
    }
  }
  removeDup = isParent.filter(function(elem, pos) {
    return isParent.indexOf(elem) == pos;
  })
  removeDup.sort(function(a,b) { return parseFloat(b.age) - parseFloat(a.age) } );

  console.log(removeDup[0].name);
}

oldestLivingParent(people);
// -> 'Don'