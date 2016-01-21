$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.what-exactly dt').each(function () {
        Slidedown($(this));
    });

    $('select').each(function () {
        NiceSelect($(this));
    });

    $('#datepicker').each(function () {
        Datapiker($(this));
    });

    $('input[id=phone]').each(function () {
        Mask($(this));
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

var NiceSelect = function (obj) {
    //private properties
    var _self = this,
        _obj = obj;

    //private methods
    var _addEvents = function () {
            _obj.selectmenu()
                .selectmenu( "menuWidget" )
                .addClass( "overflow" );
        },
        _init = function () {
            _addEvents();
        };

    //public properties

    //public methods


    _init();
};

var Datapiker = function (obj) {

    //private properties
    var _self = this,
        datepicker = $.datepicker,
        _obj = obj;

    //private methods
    var _addEvents = function () {
            datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3c;Пред',
                nextText: 'След&#x3e;',
                currentText: 'Сегодня',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false
            };
            datepicker.setDefaults($.datepicker.regional['ru']);

            obj.datepicker();
        },
        _init = function () {
            _addEvents();
        };

    //public properties

    //public methods


    _init();
};

var Mask = function (obj) {

    //private properties
    var _self = this,
        _obj = obj;

    //private methods
    var _addEvents = function () {
            _obj.inputmask("+7 ( 999 ) - 999 - 99 - 99");
        },
        _init = function () {
            _addEvents();
        };

    //public properties

    //public methods


    _init();
};

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