(function ($) {

    $.fn.stickySidebar = function (options) {

        var config = $.extend({
            headerSelector: 'header',
            navSelector: 'nav',
            contentSelector: '#content',
            footerSelector1: '.footer-top-area',
            footerSelector2: '.footer-bottom-area',
			sidebarTopMargin: 20,
            footerThreshold: 40
        }, options);

        var fixSidebr = function () {

            var sidebarSelector = $(this);
            var viewportHeight = $(window).height();
            var viewportWidth = $(window).width();
            var documentHeight = $(document).height();
            var headerHeight = $(config.headerSelector).outerHeight();
            var navHeight = $(config.navSelector).outerHeight();
            var sidebarHeight = sidebarSelector.outerHeight();
            var contentHeight = $(config.contentSelector).outerHeight();
            var footerHeight1 = $(config.footerSelector1).outerHeight();
			var footerHeight2 = $(config.footerSelector2).outerHeight();
            var scroll_top = $(window).scrollTop();
            var fixPosition = contentHeight - sidebarHeight;
            var breakingPoint1 = 250;
            var breakingPoint2 = documentHeight - (footerHeight1+footerHeight2 + config.footerThreshold);

            // calculate
            if ((contentHeight > sidebarHeight) && (viewportHeight > sidebarHeight)) {

                if (scroll_top < breakingPoint1||scroll_top>breakingPoint2) {

                    sidebarSelector.removeClass('sticky');

                } else if ((scroll_top >= breakingPoint1) && (scroll_top < breakingPoint2)) {

                    sidebarSelector.addClass('sticky').css('top', config.sidebarTopMargin);

                } else {

                    var negative = breakingPoint2 - scroll_top;
                    sidebarSelector.addClass('sticky').css('top', negative);

                }

            }
        };

        return this.each(function () {
            $(window).on('scroll', $.proxy(fixSidebr, this));
            $(window).on('resize', $.proxy(fixSidebr, this))
            $.proxy(fixSidebr, this)();
        });

    };

}(jQuery));