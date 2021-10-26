function compareTriplets(a, b) {
  // Write your code here
  let points = [0,0];
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          points << points[0]++;
      } else if ( a[i] < b[i]) {
          points << points[1]++;
      }
  }
  return points;
}

compareTriplets([17, 28, 30], [99, 16, 8]);
