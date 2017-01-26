public class Solution {
	public String reverseWords(String a) {
	    int begIndex= 0;
	    char[] characters = a.toCharArray();
	    int lengthOfA = a.length();
	    List<String> words = new ArrayList<String>();
	    StringBuffer reversed = new StringBuffer();
	    boolean isWord = false;

	    for (int i=0; i<lengthOfA; i++) {
	        if (characters[i] != ' ' && !isWord) {
	            begIndex = i;
	            isWord = true;
	            if (i == lengthOfA-1) {
	                words.add(a.substring(begIndex));
	            }
	        }
	        else if (isWord && characters[i] == ' ') {
	            words.add(a.substring(begIndex, i));
	            begIndex = i;
	            isWord = false;
	        }
	        else if (isWord && (i == lengthOfA-1)){
	            words.add(a.substring(begIndex));
	        }
	   
	    }
	    
	   	for (int j=words.size()-1; j>-1; j--) {
	        reversed.append(words.get(j));
	        if (j != 0) {
	          reversed.append(" ");
	        }
	    }
	    
	    return reversed.toString();
	}
}