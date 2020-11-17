(function (window, document) {
    //     //모듈화 전체영역을 더럽히지 않도록 구분하는 것 범위를 설정 하는 것 
    //     // 'use strict'; 안에 있는 코드는 내가 엄격한 자바스크립트 문법을 통해 작성하겠다고 선언 
    'use strict';
    $("#btn-first").click(function () {
        if ($("#btn-first").hasClass("btn-plus")) {
            var plusMinus = $("#btn-first")
            plusMinus.removeClass('btn-plus');
            plusMinus.addClass('btn-minus');
            $("#btn-add1").removeClass('btn1_back');
            $("#btn-add2").removeClass('btn2_back');
            $("#btn-add3").removeClass('btn3_back');
            $("#btn-add1").addClass('btn1');
            $("#btn-add2").addClass('btn2');
            $("#btn-add3").addClass('btn3');
        } else {
            var plusMinus = $("#btn-first")
            plusMinus.removeClass('btn-minus');
            plusMinus.addClass('btn-plus');

            $("#btn-add1").removeClass('btn1');
            $("#btn-add2").removeClass('btn2');
            $("#btn-add3").removeClass('btn3');
            $("#btn-add1").addClass("btn1_back");
            $("#btn-add2").addClass("btn2_back");
            $("#btn-add3").addClass("btn3_back");
        }
    });
})(window, document)