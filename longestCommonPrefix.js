var longestCommonPrefix = function(strs) {
  let shortest = strs.reduce((c,p) => c.length < p.length ? c : p)
  while(shortest.length) {
    const flag = strs.every(item => item.startsWith(shortest))
      if(flag) break
      shortest = shortest.slice(0,shortest.length-1); 
  }
  return shortest
};

console.log(longestCommonPrefix(["flower","flow","flight"]))