// create a minstack. implement operation like push,pop, top, getmin. 
// space O(1)


var MinStack = function () {
    this.arr = [];
    this.min = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.arr.length === 0) {
        this.arr.push(val);
        this.min = val;
    } else if (val <= this.min) {
        this.arr.push(2 * val - this.min);
        this.min = val;
    } else {
        this.arr.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let top = this.arr.pop();
    if (top < this.min) {
        this.min = 2 * this.min - top;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let top = this.arr[this.arr.length - 1];
    return top < this.min ? this.min : top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */