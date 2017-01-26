module.exports = { 
	//param A : string
	//param B : string
	//return an integer
	compareVersion : function(A, B){
        // Find first level by looking for a decimal point
        // If no decimal then just take the number for compare
        var indexA = A.indexOf('.'),
            indexB = B.indexOf('.'),
            levelA = (indexA != -1) ? A.substring(0, indexA) : A;
            levelB = (indexB != -1) ? B.substring(0, indexB) : B;
            
        if (indexA == -1 && indexB == -1) {
            // remove any leading zeros
            for (var i=0; i<levelA.length; i++){
                if (levelA.charAt(i) != '0') {
                    levelA = levelA.substring(i);
                    break;
                }
            }
            for (var j=0; j<levelB.length; j++){
                if (levelB.charAt(j) != '0') {
                    levelB = levelB.substring(j);
                    break;
                }
            }
            if (parseInt(levelA, 10) == parseInt(levelB, 10)) {
                return 0;
            }
        } 
        else if (indexA == -1 && indexB != -1) {
            if (levelA == levelB) {
                return module.exports.compareVersion("0", B.substring(indexB+1));
            }
        }
        else if (indexA != -1 && indexB == -1) {
            if (levelA == levelB) {
                return module.exports.compareVersion(A.substring(indexA+1), "0");
            }
        }
        else if (indexA != -1 && indexB != -1) {
            if (levelA == levelB) {
                return module.exports.compareVersion(A.substring(indexA+1), B.substring(indexB+1));
            }
        }
          
        return (parseInt(levelA, 10) > parseInt(levelB, 10)) ? 1 : -1;
        
    }
};