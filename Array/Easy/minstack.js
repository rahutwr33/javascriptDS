class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.min.length === 0) {
            this.min.push(val)
        } else if (this.getMin() >= val) {
            this.min.push(val)
        }
    }

    pop() {
        let val = this.stack.pop();
        if(val === this.getMin()){
            this.min.pop()
        }
    }

    getMin() {
        return this.min[this.min.length - 1]
    }

    top() {
        return this.stack[this.stack.length - 1]
    }
}