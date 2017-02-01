module.exports = { 
	//param A : string
	//return an integer
	lengthOfLongestSubstring : function(A){
        var hash = {};
        var counts = new Array();
        var characters = A.split('');
        var firstIndex = 0;

        if (characters.length == 0) {
            return 0;
        } 
        else if (characters.length == 1) {
            return 1;
        }
        
        for (var i=0; i< characters.length; i++) {
            var c = characters[i];
            if (hash[c] > -1) {
               var numOfChars = i-firstIndex; 
               counts.push(numOfChars);
               firstIndex = hash[c] +1;
               
               // reset hash and initialize it 
               hash = {};
               for (var j=firstIndex; j<=i; j++) {
                   hash[characters[j]] = j;
               }

            } 
            else {
                // add char to hash
                hash[c] = i;
               
                if (i == characters.length-1) {
                    counts.push(i-firstIndex + 1);
                }
            }
        };
        
        if (counts.length == 0) {
            // no repeats
            return characters.length;
        }

        counts.sort(function(a, b) {
            return a-b;
        })
        return counts[counts.length-1];
	}
};