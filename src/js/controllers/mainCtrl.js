// Invoking IIFE

(function() {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['utilities', '$window'];

    function MainCtrl(utilities, $window) {

        var vm = this;

        vm.isMenu = false;

        vm.showMenu = function() {
            $('.nav-menu-container').fadeIn();
            $('body').css({
                'overflow': 'hidden'
            })
        }

        vm.hideMenu = function() {

                $('.nav-menu-container').fadeOut();
                $('body').css({
                    'overflow': 'auto'
                })
            }
            // scroll function for header class
        $(window).scroll(function() {
            var headerHeight = $(window).scrollTop()
            if (headerHeight > 10) {

                $("header").addClass("fix-header");

            } else {
                $("header").removeClass("fix-header");
            }
        })
    }

})();
