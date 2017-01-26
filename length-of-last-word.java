public class Solution {
	public int lengthOfLastWord(final String a) {
	    int strLength = a.length();
	    char[] chars = a.toCharArray();
	    boolean isEmptyString = true;
	    int count = 0;
	    
	    if (a == "" || a == " ") {
	        return count;
	    }
	    
	    for (int i = strLength-1; i>-1; i--) {
	        if (chars[i] != ' ') {
	            isEmptyString = false;
	            count++;
	        } 
	        // done counting the last word length 
	        if (!isEmptyString && chars[i] == ' ') {
	            break;
	        }
	    }
	    return count;
	}
	
}