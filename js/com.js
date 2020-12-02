//皛𡁜𢆡�辺��穃𨯬

$(window).scroll(function () {
    var st = Number($(this).scrollTop()); // �繮��𡝗�𡁜𢆡�辺嚗峕�𡁜𢆡��摨�
    if (st >= 40) {
      $('.main-bg').addClass("bg-fixed"); // 瘛餃�惩�墧�改�諹悟隞硋𤐄摰�
    } else {
      $('.main-bg').removeClass("bg-fixed"); // ��𣳇膄撅墧�改�諹悟隞㚚�𦠜𦆮
    }
  
  })
  
  
  /*頧格偘����閬���惩�古query.swiper.min.js*/
  $(function () {
    var swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000, //1蝘鍦��揢銝�甈�
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  });
  $(function () {
    $.fn.navToggle = function () {
      $(".navbar-toggle").click(function () {
        if ($(".head-nav ").hasClass("active")) {
          $(".head-nav").removeClass("active");
          $('html,body').removeClass('ovfHiden');
          $('main').removeClass('filter');
          $(this).removeClass("active");
        } else {
          $(".head-nav").addClass("active");
          $(this).addClass("active");
          $('html,body').addClass('ovfHiden');
          $('main').addClass('filter');
        }
      });
      $(".login-cover").mousedown(function () {
        $(".head-nav").removeClass("active");
        $('html,body').removeClass('ovfHiden');
      });
      return this;
    };
    $(".navbar-toggle").navToggle();
  });
  /*********************************************************************/
  $(function () {
      $(".footer-nav li").click(function () {
          if ($(this).hasClass('active')) {
              $(this).removeClass('active')
              $('.wrap-fluid').toggleClass('active');
          } else {
              $(this).addClass('active')
              $('.wrap-fluid').toggleClass('active');
          }
      });
  });
  /*********************************************************************/
  /**********��煺犖閫�霈舫�厰★�㨃*************/
  $(function () {
    $('.casino-nav ul li').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      var liindex = $('.casino-nav ul li').index(this);
      $('.type-gameBox .type-gameList').eq(liindex).fadeIn(150).siblings('.type-gameBox .type-gameList').hide();
    });
  });