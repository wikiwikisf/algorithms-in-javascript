module.exports = { 
	//param A : array of strings
	//return a array of array of integers
	anagrams : function(A){
        var h = {},
            results = [];
  
        for (var i=0; i<A.length; i++){
            var sortedString = A[i].split('').sort().join('');
            if (h[sortedString]) {
                h[sortedString].push(i+1);
            }
            else {
                h[sortedString] = [i+1];
            }
        }
  
        // loop hashmap
        Object.keys(h).forEach(function (key) { 
            results.push(h[key]);
        });
  
        return results;
	}
};
