// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = { 
	//param A : head node of linked list
	//param B : integer
	//return the head node in the linked list
	partition : function(A, B){
	    // Remove integers >=B and 
	    // make new linked list of integers >= B
        var largerThanB = new Node(0);
        var partitionedList = new Node(0);
        partitionedList.next = A;
        
        var previousNode = partitionedList,
            previousLargerNode = largerThanB;
        
        while(A != null) {
            var nextNode = A.next;
            if (A.data >= B) {
                // remove A from original list
                previousNode.next = A.next;
                A.next = null;
                
                // add to largerThanB linked list
                previousLargerNode.next = A;
                previousLargerNode = A;
            }
            else {
                previousNode = A;
            }
            A = nextNode;
        }
        
        // End of original list should point to largerThanB list.
        previousNode.next = largerThanB.next;
        return partitionedList.next;
	}
};
