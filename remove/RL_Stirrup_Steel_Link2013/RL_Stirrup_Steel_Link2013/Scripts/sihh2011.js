var rlSturrupSteel2013 = rlSturrupSteel2013 || {};

rlSturrupSteel2013.theLink2013 = function () {

    init = function () {
        $('#mediaContact').click(function (e) {
            e.preventDefault();

            var divModal = $('#mediaModal');
            var mHeight = divModal.height();
            var mWidth = divModal.width();

            $.blockUI({
                message: divModal,
                css: {
                    top: ($(window).height() - mHeight) / 2 + 'px',
                    left: ($(window).width() - mWidth) / 2 + 'px',
                    width: mWidth + 'px',
                    height: mHeight + 'px'
                },
                overlayCSS: {
                    backgroundColor: '#D0D0D0'
                }
            });

            $('.blockOverlay, #btnClose').css("cursor", "pointer").click(function () {
                $.unblockUI();
            });

            return false;
        });

        $('#scrollerhere').jScrollPane();

        if ($.browser.msie) {
            $(".jspPane").css({ 'right': '10px' });
        };
    };

    return {
        init: init
    };

} ();

$(document).ready(function () {
    rlSturrupSteel2013.theLink2013.init();
});
