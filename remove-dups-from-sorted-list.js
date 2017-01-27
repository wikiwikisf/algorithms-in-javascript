// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	deleteDuplicates : function(A){
	    var firstNode = A;
	    while (A != null && A.next != null) {
	       if  (A.data === A.next.data) {
	           // delete A.next
	           A.next = A.next.next;
	       }
	       else {
	           A = A.next;
	       }
	    }
	    return firstNode;
	}
};

