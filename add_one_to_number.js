module.exports = { 
    //param A : array of integers
    //return a array of integers
    plusOne : function(A){
        if (A.length > 1) {
            var foundFirst = 0;
            for (var i=0; i< A.length; i++){
                if (A[i] > 0) {
                  foundFirst = i;
                  break;
                }
            }
          
            // Remove leading zeros
            if (foundFirst > 0) {
             A.splice(0, foundFirst);          
           }
        }
        
        var reversed = A.reverse();
        if (reversed[0] < 9) 
        {
            reversed[0] += 1;
        }
        else {           
            // Add and carry
            var carry = true;
            for (var j=0; j<reversed.length; j++) {
                if (!carry)
                    break;
                    
                var currentDigit = reversed[j] + 1;
                if (currentDigit === 10) 
                {
                    reversed[j] = 0;
                }
                else
                {
                    reversed[j] = currentDigit;
                    carry = false;
                }                
            }
            if (carry) {
                reversed.push(1);
            }
        }
        return reversed.reverse();
    }
}