new Vue({
    el: '.container',
    data: {
        a: 1,
        b: 2,
    },
    computed: {
        c: function () {
            return this.a + this.b
        }
    }
})