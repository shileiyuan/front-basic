function countWays(n){
  if(n == 0) return 0;
  else if(n == 1 ) return 1;
  else if(n == 2) return 2;
  else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  } 
}

console.log(countWays(20))