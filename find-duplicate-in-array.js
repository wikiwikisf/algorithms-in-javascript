module.exports = { 
    //param A : array of integers
    //return an integer
    repeatedNumber : function(A){
        var hash =[];
        
        if (A.length < 2 ) {
            return "Invalid Output";
        }
        else if (A.length == 2) {
            return 1;
        }
        else {
            for (var i = 0; i < A.length; i++)
            {
                var number = A[i];
                if (hash[number]) 
                    return number;
                else{
                  hash[number] = true;    
                }
            }
            return -1;
        }
    }
};