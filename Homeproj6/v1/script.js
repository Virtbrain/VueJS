new Vue({
    el: '.container',
    data: {
        stries: [
            {
                plot: "Сегодня я разбил машину!",
                writer: 'Aлекс',
            },
            {
                plot: "Вчера кто-то украл мою сумку!",
                writer: 'Джон',
            },
            {
                plot: "Кто-то съел мой шоколад!",
                writer: 'Джон',
            },
            {
                plot: "Я съел чей-то шоколад",
                writer: 'Aлекс',
            },
        ]
    },
    methods: {
        //method to filter stories by author
        storiesBy: function(writer) {
            return this.stries.filter(function (story) {
                return story.writer === writer
            })
        },
    }
})