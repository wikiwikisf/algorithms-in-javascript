module.exports = { 
	//param A : array of integers
	//param B : integer
	//return a array of integers
	twoSum : function(A, B){
	    // If the integer is >= than target move on
	    // if the integer is < target then find the remaining num you are looking for
	    var result = new Array();
        var h = {};
        
	    for (var i=0; i<A.length; i++) {
	        var remainder = B - A[i];
	        // if remainder is in the hashtable then return 
	        if (h[remainder])  {
	                result.push(h[remainder]);
                    result.push(i + 1);
	                break;
	        }
            else {
	            // add current elem to hash table if it doesn't already exist
	            if (!h[A[i]]) {
                    h[A[i]] = i+1;
	            }
            }
	    }
	    
	    return result;
	}
};
