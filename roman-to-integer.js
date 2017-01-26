module.exports = { 
  //param A : string
  //return an integer
  romanToInt : function(A){
        var numeric =0;
        if (A.length == 0) {
            return numeric;
        }
        var values = { 'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1};
        
        var prefix = A.charAt(0);
        numeric += values[prefix];

        for (var i=1; i<A.length; i++) {
          if (A.charAt(i) === 'M' && prefix === 'C') {
            numeric += 800;
          } 
          else if (A.charAt(i) === 'D' && prefix === 'C') {
            numeric += 300;
          } 
          else if (A.charAt(i) === 'C' && prefix === 'X') {
            numeric += 80;
          } 
          else if (A.charAt(i) === 'L' && prefix === 'X') {
            numeric += 30;
          } 
          else if (A.charAt(i) === 'X' && prefix === 'I') {
            numeric += 8;
          } 
          else if (A.charAt(i) === 'V' && prefix === 'I') {
            numeric += 3;
          } 
          else if (A.charAt(i) === 'I') {
            numeric +=values[A.charAt(i)];
          } 
          else {
            numeric +=values[A.charAt(i)];
          }
          
          prefix = A.charAt(i);
        }
        return numeric;
  }
};
