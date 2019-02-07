var vm = new Vue({
    el: '.container',
    data: {
      candidates: [
        {name: 'Мистер Черный', votes: 140},
        {name: 'Мистер Белый', votes: 135},
        {name: 'Мистер Розовый', votes: 145},
        {name: 'Мистер Коричневый', votes: 130},
      ]
    },
    computed: {
      mayor: function () {
        // сначала мы сортируем массив по убыванию
        var candidatesSorted = this.candidates.sort(function (a, b) {
          return b.votes - a.votes;
        });
        // мэр будет первым пунктом
        return candidatesSorted[0];
      }
    },
    methods: {
      // этот метод запускается при нажатии клавиши 'delete'
      clear: function () {
        // Установить голоса всех кандидатов в 0 с помощью функции map().
        this.candidates = this.candidates.map(function (candidate) {
          candidate.votes = 0;
          return candidate;
        })
      }
    }
  })