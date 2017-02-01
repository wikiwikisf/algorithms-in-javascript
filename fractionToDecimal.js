module.exports = { 
	//param A : integer
	//param B : integer
	//return a strings
	fractionToDecimal : function(A, B){
	    var signForAB;
	    if (B == 0) {
            return "Invalid input format";
        } 
        var sign = function(x) {
            x = +x; // convert to a number
            if (x === 0 || isNaN(x)) {
              return Number(x);
            }
            return x > 0 ? 1 : -1;
        }
        if ((sign(A) == -1 && sign(B) != -1) ||
            (sign(B) == -1 && sign(A) != -1)) 
        {
                signForAB = "-";
        }
       
        // Use positives for the math
        A = (sign(A) === -1) ? A * -1 : A;
        B = (sign(B) === -1) ? B * -1 : B;
    
        var result = Math.floor(A/B),
            remainderHash = {},
            remainder = A % B;
        
        if  (remainder != 0) {
            result = result + '.';
            remainderHash[remainder] = result.length -1;
        }
        
        while (remainder != 0) {
            remainder = remainder * 10;
            var quot = Math.floor(remainder/B);
            remainder = remainder % B;
            
            if (remainderHash[remainder] != undefined) {
                // set parenthesis around last result
                var indexOfRepeat = remainderHash[remainder]+1;
                result = result + quot;
                var repeat = result.substring(indexOfRepeat);
                result = result.substring(0, indexOfRepeat); 
                result += "("+repeat+")";
                //set remainder to zero to stop
                remainder = 0;
            }
            else {
                result = result + quot;
                remainderHash[remainder] = result.length - 1;
            }
        }    
        
       if (signForAB && result != "0") {
           result = signForAB + result;
       }
       
       return result;
	}
	
};