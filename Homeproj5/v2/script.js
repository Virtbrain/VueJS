new Vue({
    el: '.container',
    data: {
        upvotes: 0,
    },
    methods: {
        upvote: function () {
            this.upvotes++;
        }
    }
})