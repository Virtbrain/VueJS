
Vue.filter('snitch', hero => {
    return hero.secretId + ' - это ' + hero.firstname + ' ' + hero.lastname + ' в реальной жизни!'
})

new Vue({
    el: '.container',
    data: {
       heroes: [
           {firstname: 'Брюс', lastname: 'Уэйн', secretId: 'Бэтмен'},
           {firstname: 'Кларк', lastname: 'Кент', secretId: 'Супермен'},
           {firstname: 'Джей', lastname: 'Гаррик', secretId: 'Флеш'},
           {firstname: 'Питер', lastname: 'Паркер', secretId: 'Человек-паук'}
       ]    
    }
})

