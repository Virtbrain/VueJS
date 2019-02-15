new Vue({
    el: '.container',
    data: {
        stories: [
            {
                plot: "Сегодня я разбил машину!",
                writer: 'Aлекс',
                upvotes: 28
            },
            {
                plot: "Вчера кто-то украл мою сумку!",
                writer: 'Джон',
                upvotes: 8
            },
            {
                plot: "Кто-то съел мой шоколад!",
                writer: 'Джон',
                upvotes: 51
            },
            {
                plot: "Я съел чей-то шоколад",
                writer: 'Aлекс',
                upvotes:74
            },
        ],
        order: -1
    },
    computed: {
        famous: function() {
            return this.stories.filter(function(item){
                return item.upvotes >25;
            })
        },
        search: function() {
            var query = this.query;
            return this.stories.filter(story => story.plot.includes(query))
        },
        orderedStories: function () {
            var order = this.order;
            return this.stories.sort((a,b) => {
                return (a.upvotes - b.upvotes)*order;
            })
        }
    },
    methods: {
        //method to filter stories by author
        storiesBy: function(writer) {
            return this.stories.filter(function (story) {
                return story.writer === writer
            });
        },
    }
})