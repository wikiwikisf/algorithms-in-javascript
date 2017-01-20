module.exports = { 
	//param A : array of integers
	//return a array of array of integers
	permute : function(A){

        var resultsArray = [];
        
        var swap = function (array, pos1, pos2) {
            var temp = array[pos1];
            array[pos1] = array[pos2];
            array[pos2] = temp;
        };
        
        var noswap = function(array, pos1, pos2) {
            for (var i=pos1; i< pos2; i++) {
                if (array[i] == array[pos2]) {
                    return true;
                }
            }
            return false;
        };
        
        var permuteA = function (array, k, n) {
            var copy = []
            if (n === k) {
                copy = array.slice(0);
                resultsArray.push(copy);
            } 
            else {
                for (var i = k; i <= n; i ++) {
                    if (noswap(array, k, i))
                    {
                        continue;   
                    }
                    swap(array, k, i);
                    permuteA(array, k+1, n);
                    swap(array, k, i);
                }
            }
        };
        
        permuteA(A, 0, A.length-1);
        return resultsArray;
	}
};
