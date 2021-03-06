$(function () {
  //右侧二维码
  $('.fixed_qrcode .qr_box').hover(
    function () {
      $(this).addClass('qr_active')
    },
    function () {
      $(this).removeClass('qr_active')
    }
  )

  //平滑滚动锚点
  $('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  })
})