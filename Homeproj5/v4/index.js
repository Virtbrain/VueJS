new Vue({
    el: '.container',
    data: {
        a: 1,
    },
    computed: {
        b: function () {
            return this.a + 1
        }
    }
})