module.exports = { 
	//param A : integer
	//return a array of array of integers
	prettyPrint : function (A){
	    if (A < 1) {
	        return "Invalid Input";
	    }

        var size= A*2 -1;
        var T = 0, L = 0, R = size-1, B = size-1;

        var matrix = new Array(size);
        for (var i=0; i< size; i++) {
            matrix[i] = new Array(size);
        }
        
        for (var j = A; j > 0; j--) {
            var a;
            // write in a spiral
            for (a = T; a < R+1; a++) {
                matrix[T][a] = j;
            }
            for (a = T; a < B+1; a++) {
                matrix[a][R] =j;
            }
            for (a = B; a > L; a--) {
                matrix[B][a] = j;
            }
            for (a = B; a > T; a--){
                matrix[a][L] = j;
            }
            
            T++;
            R--;
            B--;
            L++;
        }
        return matrix;
	}
};