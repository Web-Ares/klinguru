$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.what-exactly dt').each(function () {
        Slidedown($(this));
    });

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

var Slider = function (obj) {

    //private properties
    var _self = this,
        _paginator = obj.find($('.slider__icon')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('slider__wrap')) {
        var _swiperPromo = new Swiper(_obj, {
            slidesPerView: 1,
            autoplay: 15000,
            pagination: _paginator,
            loop: true,
            paginationClickable: true
        });
    }

    if (_obj.hasClass('reviews__wrap')) {
        var _slider1 = new Swiper(_obj, {
            nextButton: '.reviews__next',
            prevButton: '.reviews__prev',
            autoplay: 10000,
            loop: true,
            paginationClickable: true

        });

    }

    //public properties

    //public methods

    _init();
};

var Slidedown = function (obj) {
    //private properties
    var _self = this,
        _nextElem = obj.next('dd'),
        _obj = obj;

    //private methods
    var _addEvents = function () {
            if(_obj.hasClass('open')){
                _nextElem.slideDown();
            }
            _obj.on({
                'click':function(){
                    if (_nextElem.length){
                        if(!_obj.hasClass('open')){
                            _obj.addClass('open');
                            _nextElem.slideDown();
                        }
                        else{
                            _obj.removeClass('open');
                            _nextElem.slideUp();
                        }
                    }
                }
            });
        },
        _init = function () {
            _addEvents();
        };

    //public properties

    //public methods

    _init();
};