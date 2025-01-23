// create a maxstack. implement operation like push,pop, top, getmin


var MaxStack = function () {
    this.arr = [];
    this.max = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MaxStack.prototype.push = function (val) {
    if (this.arr.length === 0) {
        this.arr.push(val);
        this.max = val;
    } else if (val >= this.max) {
        this.arr.push(2 * val - this.max);
        this.max = val;
    } else {
        this.arr.push(val);
    }
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function () {
    let top = this.arr.pop();
    if (top > this.max) {
        this.max = 2 * this.max - top;
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    let top = this.arr[this.arr.length - 1];
    return top > this.max ? this.max : top;
};

/**
 * @return {number}
 */
MaxStack.prototype.getmax = function () {
    return this.max
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */