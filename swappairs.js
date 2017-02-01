// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//return the head node in the linked list
	swapPairs : function(A){
	    //dummyNode
        var firstNode = new Node(0);
        var previousNode;
        firstNode.next = A;
        while (A != null) {
            if (A.next)
            {
                var B = A.next;
                var nextNextNode = A.next.next;
                A.next = nextNextNode;
                B.next = A;
                if (!previousNode) {
                    firstNode.next = B;
                }
                else {
                    previousNode.next = B;
                }
                previousNode = A;
                // Move to swap the next set
                A = nextNextNode;
            }
            else {
                A = null;
            }
        }
        return firstNode.next;
	}
};
