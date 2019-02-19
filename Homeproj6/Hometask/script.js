new Vue({
    el: '.container',
    data: {
      people: [
        {name: 'Обеликс', age: 33},
        {name: 'Астерикс', age: 32},
        {name: 'Маджестикс', age: 82},
        {name: 'Ветераникс', age: 103},
        {name: 'Юлий Цезарь', age: 66},
        {name: 'Юлий Цезарь', age: 66},
      ]
    },
    methods: {
      orderedPeople: function () {
        return _.orderBy(this.people, 'age')
      }
    },
    computed: {
      old: function () {
        return this.people.filter(function (item) {
          return item.age > 65;
        });
      }
    }
  })