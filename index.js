// Add your functions here

let map = function(source, callback){
  let place = []
  for(let i = 0; i < source.length; i ++){
    place.push(callback(source[i]))
  }
  return place
}

let reduce = function(source, callback, start = 0){
  let total = start
  for(let i = 0; i < source.length; i ++){
    total = callback(source[i]) + total
  }
  return total
}