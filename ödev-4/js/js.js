window.addEventListener("hashchange", function() { scrollBy(0, -120) });
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.nabar_items a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    console.log($('.navbar_items a'))
    $('.navbar_items a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        // بدك تتأكد إذا كان معرف ولا لأ 
        console.log(refElement.position());
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar .navbar_items a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
