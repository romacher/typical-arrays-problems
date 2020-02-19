
exports.min = function min (array) {
  if (!array || array.length == 0)
   return 0;
 
 let result =  array.sort(function(a,b){ 
    if (a > b) 
      return 1;
    
    if (a < b) 
     return -1;
    
     return 0;
  });
 
    return result[0];
 }
 

exports.max = function max (array) {
  if (!array || array.length == 0)
  return 0;

let result =  array.sort(function(a,b){ 
   if (a > b)
    return 1;
  
  if (a < b)
    return -1;
  
    return 0;
 });

   return result[result.length-1];
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;

  return  array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
}
