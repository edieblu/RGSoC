function friend(friends){
  return friends.filter(function(word){
    return word.length === 4;
  })
}