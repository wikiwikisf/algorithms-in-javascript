module.exports = { 
	//param A : array of integers
	//return a array of integers
	nextGreater : function(A){
	    var nextGreater = [];
        for (var i=0; i< A.length-1; i++) {
	        var stack = A.slice(i+1).reverse();
	        var foundGreater = false;

            while (stack.length > 0 && !foundGreater) {	
                var popped = stack.pop();
	            if (A[i] < popped) {
	                nextGreater.push(popped);
	                foundGreater = true;
	            }
	        }
	        
	        if (!foundGreater) 
	        {
	            nextGreater.push(-1);
	        }
        }
        
        // push the last element
        nextGreater.push(-1);
        return nextGreater;
	}
};