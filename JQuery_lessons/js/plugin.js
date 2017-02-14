//Обертка для избежания конфлита имен
(function($) {


    var functions = {

        log: function(elements) {
            // this = $(this)
            // Тут пишем функционал нашего плагина
            console.log('this');
            return elements; //можем передавать по цепочке
            // return 5;    //не можем передавать по цепочке
        },
    };

     // плагина
    $.fn.myPlugin = function() {
        // this = $(this)
        // Тут пишем функционал нашего плагина
        console.log('this');
        return this; //можем передавать по цепочке
        // return 5;    //не можем передавать по цепочке
    };



     // плагина
    $.fn.myPlugin = function(functionName) {
        if (functions[functionName]) {
            return functions[functionName](this);
        } else {
            console.log('i dont know')
            return this;
        }
    };


    // переопределение стандартной функции
    $.fn.show = function() {
        return 5;
    };


    //Покажет самый высокий елемент
    $.fn.chain = function() {

        return this
    };


    //Покажет самый высокий елемент
    $.fn.fnWithOptions = function(options) {
        var settings = $.extend({
            'location': 'top',
            'background-color': 'blue'
        }, options);


        return this.each(function() {

            // Тут пишем код плагина tooltip

        });
    };


})(jQuery);