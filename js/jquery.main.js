$(function(){

    $(".step-item__selects label").click(function(event){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find("input").attr('checked',false);
        }else{
            $(this).addClass('active');
            $(this).find("input").attr('checked',true);
        }
        event.stopPropagation();
        event.cancelBubble = true;

        return false;
    })


} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$(window).on({
    load: function () {
        
    }
});