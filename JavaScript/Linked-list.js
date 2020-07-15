//链表
// 题目描述：
/*     输入一个链表的头结点，从尾到头反过来打印出每个结点的值 */

function LinkedList(value) {
    //方法1
    //unshift 向数组的开头添加一个或更多元素，并返回新的长度
    let array = [];
    while(head != null){
        array.unshift(head.value);
        head = head.next;
    }
    return array;
    //方法2:
    this.value = value; //当前节点的元素
    this.next = null;  //下一个节点链接
}
