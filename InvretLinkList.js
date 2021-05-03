class Node {
    constructor(head, next) {
        this.head = head
        this.next = null
    }
}

class linkList {
    constructor() {
        this.head =  null;
    }
    push(head) {
        var new_node = new Node(head);
        new_node.next = this.head;
        this.head = new_node;
    }
    reverse() {
        var current, next, prev;
        current = this.head;
        while (current != null) {
        next = current.next; //1->2
        current.next = prev; //2->null
        prev = current; //null -> 1
        current = next // 1 -> 2
        }
        this.head = prev
    }
}

const n = new linkList()
n.push(1)
n.push(2)
n.push(3)
console.log(n)
n.reverse()
console.log(n)