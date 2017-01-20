module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
    kthsmallest : function(A, B){
        var kthSmallest;
        
        var quickselect = function(A, k) {
            var small=[], large=[],
            pivot = A[A.length-1];
            
            for (var i=0; i<A.length-1; i++) {
                var elem = A[i];
            
                if (elem <= pivot)
                {
                  small.push(elem);
                } 
                else if (elem > pivot)     
                {
                  large.push(elem); 
                }
            }
  
            if (k <= small.length) {
                // found in smaller elements
                return quickselect(small, k);
            }
            else if (k > A.length - large.length) {
                // found in larger elements
                return quickselect(large, k - (A.length - large.length));
            }
            else {
                return pivot;
            }
        }

        if (B > A.length) 
        {
            return "Invalid Input. k out of range";
        }

        kthSmallest = quickselect(A.slice(0), B);
        return kthSmallest ? kthSmallest: "Invalid Input. k out of range";
    }  
};