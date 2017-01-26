module.exports = { 
  //param A : array of integers
  //return a array of integers
  maxset : function(A){
      var sum = function(subarray) {
          var sum = 0;
          for (var i=0; i<subarray.length; i++) {
              sum = subarray[i] + sum;
          }
          return sum;
      }

      var newSubArrays = [];
      var start = 0;
      for (var j=0; j< A.length; j++) {
          if (A[j] < 0) {
              newSubArrays.push(A.slice(start, j));
              start = j + 1;
          }
          else if (j === A.length-1) {
              newSubArrays.push(A.slice(start));
          }
      } 
      
      if (newSubArrays.length === 0) {
          return A;
      }
      else if (newSubArrays.length === 1) {
          return newSubArrays[0];
      }
      
      var winner = newSubArrays[0];
      for (var k=0; k<newSubArrays.length-1; k++) {
          var sum1 = sum(winner);
          var sum2 = sum(newSubArrays[k+1]);
          
          if (sum1 === sum2) {
              var length1 = winner.length;
              var length2 = newSubArrays[k+1].length;
              if (length1 === length2) {
                  winner = (winner[0] < newSubArrays[k+1][0]) ? winner : newSubArrays[k+1];
              }
              else {
                  winner = (length1 > length2) ? winner : newSubArrays[k+1]; 
              }
          } else {
             winner = (sum1 > sum2) ? winner : newSubArrays[k+1]; 
          }
      }
      
      return winner;
    }
  }