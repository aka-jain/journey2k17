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

        vm.showMenu = function () {
        	$('.nav-menu-container').fadeIn();
        }

        vm.hideMenu = function () {
        	
        	$('.nav-menu-container').fadeOut()
        }
        // your controller body 
        $(window).scroll(function(){
        	var headerHeight = $(window).scrollTop()
        	if( headerHeight > 10){

        		$("header").addClass("fix-header");
        		
        	}
        	else{
        		$("header").removeClass("fix-header");
        	}
        })
    }

})();
