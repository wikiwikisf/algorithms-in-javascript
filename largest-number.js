module.exports = { 
    //param A : array of integers
    //return a strings
    largestNumber : function(A){
        // first order the array by first digit of each elem
        // create a new array of arrays (9 elements)
        var allZeros = true;
        A.forEach(function(a) {
           if (a > 0) {
               allZeros = false;
               return;
           } 
        });
        
        if (allZeros)
            return "0";
            
        A.sort(function(a, b){
            var num1 = parseInt(a.toString().concat(b.toString()));
            var num2 = parseInt(b.toString().concat(a.toString()));
            
            if (num1 === num2) {
                return 0;
            } else if (num1 > num2) {
                return -1;
            } else {
                return 1;
            }
        });  
        
        return A.join('');
    }
}