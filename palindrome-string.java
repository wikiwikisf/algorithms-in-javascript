public class Solution {
	public int isPalindrome(String a) {
	    int pt1, pt2;
	    char[] charArray;
	    int lengthOfArray;
	    int isPalindrome = 1;

	    if (a == "") {
	        return 1;
	    }
	    else {
	        charArray = a.toUpperCase().toCharArray();
	        lengthOfArray = a.length();
	        pt1 = 0;
	        pt2 = lengthOfArray - 1;
	        
            while (pt1 <= pt2) {
                char char1 = charArray[pt1];
                char char2 = charArray[pt2];
                
                if (!isLetterOrDigit(char1)) {
                    pt1++;
                    continue;
                }
                else if (!isLetterOrDigit(char2)) {
                    pt2--;
                    continue;
                }
                if (charArray[pt1] != charArray[pt2]) {
                    isPalindrome = 0;
                    break;
                }
                pt1++;
                pt2--;
            }
	    }
	    
	    return isPalindrome;
	}

	private static boolean isLetterOrDigit(char c) {
        return (c >= 'a' && c <= 'z') ||
           (c >= 'A' && c <= 'Z') ||
           (c >= '0' && c <= '9');
    }
 }