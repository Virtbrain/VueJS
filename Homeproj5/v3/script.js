new Vue({
    el: '.container',
    data: {
        a: 1,
        b: 2,
        c: null,
        operator: '+',
    },
    methods: {
        calculate: function () {
            switch (this.operator) {
                case '+':
                    this.c = this.a + this.b
                    break;
                case '-':
                    this.c = this.a - this.b
                    break;
                case '*':
                    this.c = this.a * this.b
                    break;
                case '/':
                    this.c = this.a / this.b
                    break;
            }
        }
    },
});