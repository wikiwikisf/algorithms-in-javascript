module.exports = { 
	//param A : head node of linked list
	//param B : head node of linked list
	//return the head node in the linked list
	addTwoNumbers : function(A, B){
        var carry = 0;
        var result = new Node(0);
        var firstNode = result;
        while (A != null || B != null) {
            var sum = 0;
            if (A == null) {
                sum = B.data + carry;
            }
            else if (B == null) {
                sum = A.data + carry;
            }
            else {
                sum = A.data + B.data + carry;
            }
            
            if (sum >= 10) {
                sum = sum % 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
            
            var newNode = new Node(sum);
            result.next = newNode;
            result = result.next;
            
            if (A !== null)
                A = A.next;
            if (B !== null)
                B = B.next;
        }
        if (A == null && B==null && carry==1) {
            // add a carry at the end if there still is one
            var lastNode = new Node(1);
            result.next = lastNode;            
        }
         
        // remove dummy leading zero
        return firstNode.next;
	}
};