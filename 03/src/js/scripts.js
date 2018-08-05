$(function(){

  if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/\d+\.\d+/)) {
   $('body').on('mousewheel', function () {
     event.preventDefault();
     var wd = event.wheelDelta;
     var csp = window.pageYOffset;
     window.scrollTo(0, csp - wd);
   });
  }

  window.sr = ScrollReveal({ reset: false });

  $(window).on('load', function() {

    $('#img');
    $('#page-loading').delay(3000).fadeOut(1000);

    if (window.matchMedia('(max-width:544px)').matches) {
      // SPの処理
      sr.reveal('.greeting-unit__msg', {});
      sr.reveal('.story-list__item', {});
      sr.reveal('.where-cont__box', {});
    } else if (window.matchMedia('(max-width:768px)').matches) {
      // TABの処理
      sr.reveal('.greeting-unit__msg', {});
      sr.reveal('.story-list__img', { easing: 'ease', origin: 'top', distance: '10%', duration: 400 , scale: 1.0, delay: 400 ,opacity: 0, right: 0, viewFactor: 0.8,});
      sr.reveal('.story-list__item', {
        delay:    0,
        distance: 0,
        duration: 0,
        scale:    1,
        opacity:  null,
        beforeReveal: function(domEl) {$(domEl).addClass('fade-on');},
        beforeReset: function (domEl) {$(domEl).removeClass('fade-on');},
        viewFactor: 0.7,
      });
      sr.reveal('.story-list__txt', { easing: 'ease', origin: 'top', distance: '10%', duration: 400 , scale: 1.0, delay: 900 ,opacity: 0, right: 0, viewFactor: 0.8,});
      sr.reveal('.countdown-unit__ttl', { easing: 'ease', origin: 'top', distance: '10%', duration: 500 , scale: 1.0, delay: 600 ,opacity: 0, right: 0, viewFactor: 1,});
      sr.reveal('.where-cont', { easing: 'ease', origin: 'top', distance: '10%', duration: 800 , scale: 1.0, delay: 200 ,opacity: 0, right: 0, viewFactor: 0.6,});
    } else {
      // PCの処理
      sr.reveal('.bridegroom', {
        easing: 'ease',
        origin: 'top',
        delay:    200,
        distance: '25%',
        duration: 1000,
        scale:    1,
        opacity:  0,
        beforeReveal: function(domEl) {$(domEl).addClass('fade-on');},
        beforeReset: function (domEl) {$(domEl).removeClass('fade-on');},
        viewFactor: 0.8,
      });

      sr.reveal('.bride', {
        easing: 'ease',
        origin: 'bottom',
        delay:    200,
        distance: '25%',
        duration: 1000,
        scale:    1,
        opacity:  0,
        beforeReveal: function(domEl) {$(domEl).addClass('fade-on');},
        beforeReset: function (domEl) {$(domEl).removeClass('fade-on');},
        viewFactor: 0.8,
      });
      sr.reveal('.greeting-unit__msg', { easing: 'ease', origin: 'top', distance: '10%', duration: 1800 , scale: 1.0, delay: 400 ,opacity: 0, right: 0, viewFactor: 0.8,});
      sr.reveal('.story-list__img', { easing: 'ease', origin: 'bottom', distance: '10%', duration: 400 , scale: 1.0, delay: 400 ,opacity: 0, right: 0, viewFactor: 0.8,});
      sr.reveal('.story-list__txt', { easing: 'ease', origin: 'top', distance: '10%', duration: 400 , scale: 1.0, delay: 900 ,opacity: 0, right: 0, viewFactor: 0.8,});
      sr.reveal('.countdown-unit__ttl', { easing: 'ease', origin: 'top', distance: '10%', duration: 500 , scale: 1.0, delay: 600 ,opacity: 0, right: 0, viewFactor: 1,});
      sr.reveal('.where-cont', { easing: 'ease', origin: 'top', distance: '10%', duration: 800 , scale: 1.0, delay: 200 ,opacity: 0, right: 0, viewFactor: 0.6,});
    }
  });

  sticky_header();
  attendance_select();
  touch_smooth();
  page_smooth_scrolling();
  modal_windows();
  mobile_gnav();
  countdown_timer();
  rb_checks();
  form_modal_outputs();
  cb_outputs();
});


function countdown_timer() {
  window.jQuery(function ($) {
      "use strict";
      $('.countdowns').countDown({
          with_separators: false
      });
  });
}

/*---------------------------------------------------------------------------------
    スティッキーヘッダー
---------------------------------------------------------------------------------*/
function sticky_header() {
  $(window).scroll(function() {
    if (window.matchMedia('(max-width:544px)').matches) {
      if ($(this).scrollTop() > 90) {
        $('.site-header').addClass('sticky');
        $('.slideout-menu-toggle').addClass('blk');
      } else {
        $('.site-header').removeClass("sticky");
        $('.slideout-menu-toggle').removeClass('blk');
      }
    } else {
      if ($(this).scrollTop() > 300) {
        $('.site-header').addClass('sticky');
        $('.slideout-menu-toggle').addClass('blk');
      } else {
        $('.site-header').removeClass("sticky");
        $('.slideout-menu-toggle').removeClass('blk');
      }
    }
  });
}


/*---------------------------------------------------------------------------------
    R.S.V.P.チェックボックス
---------------------------------------------------------------------------------*/

function attendance_select() {
  var checkeds = $('.attendance input:radio');
  checkeds.on('change',function(){
    checkeds.addClass('no-checked');
    if($(this).prop('checked')){
      $(this).removeClass('no-checked');
    }
  });
}

/*---------------------------------------------------------------------------------
    タッチデバイスでのhoverエフェクトの反応を良くする
---------------------------------------------------------------------------------*/

function touch_smooth() {
  var linkTouchStart = function(){
    thisAnchor = $(this);
    touchPos = thisAnchor.offset().top;
    moveCheck = function(){
      nowPos = thisAnchor.offset().top;
      if(touchPos == nowPos){
        thisAnchor.addClass("hover");
      }
    }
    setTimeout(moveCheck,100);
  }
  var linkTouchEnd = function(){
    thisAnchor = $(this);
    hoverRemove = function(){
        thisAnchor.removeClass("hover");
    }
    setTimeout(hoverRemove,500);
  }
  $(document).on('touchstart mousedown','a',linkTouchStart);
  $(document).on('touchend mouseup','a',linkTouchEnd);
}


/*---------------------------------------------------------------------------------
  ページ内リンク スムーズスクロール
---------------------------------------------------------------------------------*/

function page_smooth_scrolling() {
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}


/*---------------------------------------------------------------------------------
    modal window
---------------------------------------------------------------------------------*/

function modal_windows() {
  // スクロールバーの横幅を取得
  var scroll = window.innerWidth - $(window).outerWidth(true);
  if(scroll > 0 ){
    var scrollsize = scroll;
  } else {
    $('html').append('<div class="scrollbar" style="overflow:scroll;height:50px"}></div>');
    var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
    $('.scrollbar').hide();
  }

  // 「.modal-open」をクリック
  $('.modal-open').click(function(){
    // html、bodyを固定（overflow:hiddenにする）
    $('html, body').addClass('lock');

    // オーバーレイ用の要素を追加
    $('body').append('<div class="modal-overlay"></div>');

    // オーバーレイをフェードイン
    $('.modal-overlay').fadeIn('slow');

    // モーダルコンテンツのIDを取得
    var modal = '#' + $(this).attr('data-target');

     // モーダルコンテンツを囲む要素を追加
    $(modal).wrap("<div class='modal-wrap'></div>");

    // モーダルコンテンツを囲む要素を表示
    $('.modal-wrap').show();

    // モーダルコンテンツの表示位置を設定
    modalResize();

     // モーダルコンテンツフェードイン
    $(modal).fadeIn('fast');

    // モーダルコンテンツをクリックした時はフェードアウトしない
    $(modal).click(function(e){
      e.stopPropagation();
    });

    // スクロールを無効にする
    // $(window).on('touchmove.noScroll', function(e) {
    //     e.preventDefault();
    // });
    // $('.site-header , .mo-info-btns').css({'z-index':'1'});

    // 「.modal-overlay」あるいは「.modal-close」をクリック
    $('.modal-wrap, .modal-close').off().click(function(){
      // モーダルコンテンツとオーバーレイをフェードアウト
      $(modal).fadeOut('fast');
      $('.modal-overlay').fadeOut('fast',function(){
        // html、bodyの固定解除
        $('html, body').removeClass('lock');
        // オーバーレイを削除
        $('.modal-overlay').remove();
        // モーダルコンテンツを囲む要素を削除
        $(modal).unwrap("<div class='modal-wrap'></div>");
        $(window).off('.noScroll');
        $('.site-header , .mo-info-btns').css({'z-index':''});
       });
    });

    // リサイズしたら表示位置を再取得
    $(window).on('resize', function(){
      modalResize();
    });

    // モーダルコンテンツの表示位置を設定する関数
    function modalResize(){
      // ウィンドウの横幅、高さを取得
      var w = $(window).width();
      var h = $(window).height();

      // モーダルコンテンツの横幅、高さを取得
      var mw = $(modal).outerWidth(true);
      var mh = $(modal).outerHeight(true);

      // モーダルコンテンツの表示位置を設定
      if ((mh > h) && (mw > w)) {
        $(modal).css({'left': 0 + 'px','top': 0 + 'px'});
      } else if ((mh > h) && (mw < w)) {
        var x = (w - scrollsize - mw) / 2;
        $(modal).css({'left': x + 'px','top': 0 + 'px'});
      } else if ((mh < h) && (mw > w)) {
        var y = (h - scrollsize - mh) / 2;
        $(modal).css({'left': 0 + 'px','top': y + 'px'});
      } else {
        var x = (w - mw) / 2;
        var y = (h - mh) / 2;
        $(modal).css({'left': x + 'px','top': y + 'px'});
      }
    }
  });

  $('.modal-open-nav').click(function(){
    $('slideout-menu-toggle').removeClass('is-clicked');
  });
}


/*---------------------------------------------------------------------------------
    mobile nav
---------------------------------------------------------------------------------*/

function mobile_gnav() {
  var slideoutMenu = $('.slideout-menu'),
      slideoutMenuWidth = $('.slideout-menu').width(),
      menu = $('.slideout-menu'),
      menuBtn = $('.slideout-menu-toggle'),
      pageAnkerBtn = $('.slideout-menu a'),
      body = $(document.body),
      layer = $('#js__overlay'),
      wrap = $('.wrap'),
      // menuWidth = menu.outerWidth(),
      state = false,
      scrollpos;

  $('.slideout-menu-toggle').on('click', function(event){
      event.preventDefault();
      body.toggleClass('is-nav-open');
      // menu.addClass('is-open').fadeToggle(400);


      if(body.hasClass('is-nav-open')){
        body.addClass('no-scroll');
        menuBtn.addClass('is-clicked');
        menu.addClass('is-open').fadeIn(400);
      } else {
        body.removeClass('no-scroll');
        menuBtn.removeClass('is-clicked');
        menu.removeClass('is-open').fadeOut(400);
      }

      // if(state == false) {
      //   scrollpos = $(window).scrollTop();
      //   $('body').addClass('fixed').css({'top': -scrollpos});
      //   state = true;
      // } else {
      //   $('body').removeClass('fixed').css({'top': 0});
      //   window.scrollTo( 0 , scrollpos );
      //   state = false;
      // }

      pageAnkerBtn.on('click', function(event){
        body.removeClass('is-nav-open no-scroll');
        menuBtn.removeClass('is-clicked');
        menu.removeClass('is-open').fadeOut(400);
        // $('body').removeClass('fixed').css({'top': 0});
        // window.scrollTo( 0 , scrollpos );
        // state = false;
      });
  });


  // .layer をクリック時にもメニューを閉じる
  layer.on('click', function(){
      menuBtn.removeClass('is-clicked');
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
  });

}


/*---------------------------------------------------------------------------------
    formの入力内容を取得しモーダルに表示
---------------------------------------------------------------------------------*/

function rb_checks() {
  $('input[name="attendance"]').change(function() {
    str1 = $('input:radio[name="attendance"]:checked').val();

    if(str1 == 'attend') {
      jap = '出席させていただきます。'
    } else if(str1 == 'absence') {
      jap = '欠席させていただきます。'
    }
    $('.check-modal__attendance').text(jap);
  });
}


function form_output(inputs,outputs) {
  $(inputs).each(function(){
    $(this).bind('click blur keydown keyup keypress change',hoge(this));
  });

    function hoge(elm){
      var v, old = elm.value;
        return function(){
          if(old != (v=elm.value)){
          old = v;
          str = $(this).val();
          $(outputs).text(str);
        }
      }
    }
}

function form_modal_outputs() {
  form_output('#name','.check-modal__name dd');
  form_output('#kana','.check-modal__kana dd');
  form_output('#tell','.check-modal__tell dd');
  form_output('#postcode','.check-modal__postcode dd');
  form_output('#address','.check-modal__address dd');
  form_output('#message','.check-modal__msg dd');
}


function cb_outputs() {
  $('input[name="other_check"]').change(function() {
    var checklist = $('input[name="other_check"]:checked').map(function(){
      return $(this).val();
    }).get();

    $('.check-modal__other-check').empty();

    $.each(checklist , function(i, value) {
      if(value == 'afterparty') {
        jap = '2次会に参加する'
      } else if(value == 'allergies') {
        jap = '食材アレルギー'
      } else if(value == 'partner') {
        jap = '同行者あり'
      }
      $('.check-modal__other-check').append('<li>' + jap + '</li>');
    });
  });
}