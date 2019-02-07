new Vue({
    el: '.container',
    data: {
        a: 1,
        b: 2,
        operator: '+',
    },
    computed: {
        c: function () {
            switch (this.operator) {
                case '+': return this.a + this.b
                case '-': return this.a - this.b
                case '*': return this.a * this.b
                case '/': return this.c = this.a / this.b
            }
        }
    },
});