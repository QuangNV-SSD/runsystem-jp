jQuery(document).ready(function ($) {
  var width = jQuery(window).width();
  // click check privacy form
  jQuery(".tg_submit_form .tg_input_checkbox label").click(function () {
    jQuery(this).closest(".tg_submit_form").toggleClass("tg_active");
  });
  // close popup
  jQuery(document).on("click", ".tg_close_pop", function () {
    jQuery(this).closest(".tg_pop").hide();
  });

  // menu scroll
  function scroll_to(div) {
    if (width > 1024) {
      if (div == ".tg_target2") {
        console.log(1233);
        jQuery("html, body")
          .stop(false, false)
          .animate(
            {
              scrollTop: jQuery(div).offset().top - 170,
            },
            1000
          );
      } else {
        jQuery("html, body")
          .stop(false, false)
          .animate(
            {
              scrollTop: jQuery(div).offset().top - 50,
            },
            1000
          );
      }
    } else {
      jQuery("html, body")
        .stop(false, false)
        .animate(
          {
            scrollTop: jQuery(div).offset().top - 50,
          },
          1000
        );
    }

    // setTimeout(function () {
    //   jQuery("html, body")
    //     .stop(false, false)
    //     .animate(
    //       {
    //         scrollTop: jQuery(div).offset().top + 1,
    //       },
    //       100
    //     );
    // }, 1100);
  }

  jQuery(".tg_menu_scroll li").click(function (event) {
    event.preventDefault();
    var neoindext = jQuery(this).attr("rel");
    jQuery(".bg_opacity").hide();
    jQuery("#menu_mobile_full").animate({ left: "-375px" }, 260).removeClass("menu_show");
    scroll_to(".tg_target" + neoindext);
    jQuery(".tg_menu_scroll li").removeClass("tg_active");
    jQuery(this).addClass("tg_active");

    return true;
  });

  // slide issues mobile
  if (width < 768) {
    if (jQuery(".tg_content_intro_issue_wrap_bg ").length > 0) {
      jQuery(".tg_content_intro_issue_wrap_bg").addClass("swiper");
      jQuery(".tg_content_intro_issue_wrap_bg").wrapInner('<div class="swiper-wrapper"></div>');
      var swiper = new Swiper(".tg_content_intro_issue_wrap_bg ", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".tg_content_intro_issue_wrap  .pagination-swipe",
          clickable: true,
        },
      });
    }
    if (jQuery(".tg_content_intro_skill_wrap_bg ").length > 0) {
      jQuery(".tg_content_intro_skill_wrap_bg").addClass("swiper");
      jQuery(".tg_content_intro_skill_wrap_bg").wrapInner('<div class="swiper-wrapper"></div>');
      var swiper = new Swiper(".tg_content_intro_skill_wrap_bg ", {
        slidesPerView: 3,
        grid: {
          rows: 4,
        },
        autoHeight: true,
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: ".tg_content_intro_skill_wrap  .pagination-swipe",
        },
      });
    }
  }

  // FAQ
  $(".tg_content_question_wrap_list_item .tg_content_question_wrap_list_item_title").on("click", function () {
    // Thêm class active vào thẻ li đang hover
    jQuery(this).closest(".tg_content_question_wrap_list_item").siblings().removeClass("tg_active");
    jQuery(this).closest(".tg_content_question_wrap_list_item").toggleClass("tg_active");
    $(this).siblings(".tg_content_question_wrap_list_item_wrap").stop(true, true).slideToggle();
    // Xóa class tg_active ở các thẻ li khác
    $(this).closest(".tg_content_question_wrap_list_item").siblings().find(".tg_content_question_wrap_list_item_wrap").stop(true, true).slideUp();
  });

  // mouseover FAQ
  // $(".tg_content_question_wrap_list_item").on("mouseenter", function () {
  //   // Thêm class active vào thẻ li đang hover
  //   $(this).find(".tg_content_question_wrap_list_item_wrap").stop(true, true).slideDown();
  //   // Xóa class tg_active ở các thẻ li khác
  //   $(this).siblings().find(".tg_content_question_wrap_list_item_wrap").stop(true, true).slideUp();
  // });

  // $(".tg_content_question_wrap_list_item").on("mouseleave", function () {
  //   // Khi chuột rời khỏi thẻ li thì xóa class tg_active
  //   $(this).find(".tg_content_question_wrap_list_item_wrap").stop(true, true).slideUp();
  // });

  // slide works
  if (jQuery(".tg_content_works_wrap").length > 0) {
    var swiper = new Swiper(".tg_content_works_wrap", {
      slidesPerView: 3.8,
      spaceBetween: 30,
      slidesOffsetBefore: 150, // spacing left
      slidesOffsetAfter: 15,
      // centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesOffsetBefore: 15,
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3.8,
          slidesOffsetBefore: 100,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 3.8,
        },
      },
      navigation: {
        nextEl: ".tg_content_works  .sl_next",
        prevEl: ".tg_content_works  .sl_prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // MENU MOBILE
  jQuery(".icon_mobile_click").click(function () {
    jQuery("#menu_mobile_full").addClass("menu_show").stop().animate({ left: "0px" }, 260);
    jQuery(".close_menu, .bg_opacity").show();
    jQuery("html").addClass("tg_menu_show");
  });
  jQuery(".close_menu").click(function () {
    jQuery("#menu_mobile_full").animate({ left: "-375px" }, 260).removeClass("menu_show");
    jQuery(".bg_opacity").hide();
    jQuery("html").removeClass("tg_menu_show");
  });
  jQuery(".bg_opacity").click(function () {
    jQuery("#menu_mobile_full").animate({ left: "-375px" }, 260).removeClass("menu_show");
    jQuery(this).hide();
    jQuery("html").removeClass("tg_menu_show");
  });

  jQuery(".mobile-menu .menu>li:not(:has(ul.sub-menu)) , .mobile-menu .menu>li ul.sub-menu>li:not(:has(ul.sub-menu))").addClass("not-have-child");

  jQuery(".mobile-menu ul.menu")
    .children()
    .has("ul.sub-menu")
    .click(function () {
      jQuery(this).children("ul").slideToggle();
      jQuery(this).siblings().has("ul.sub-menu").find("ul.sub-menu").slideUp();
      jQuery(this).siblings().find("ul.sub-menu>li").has("ul.sub-menu").removeClass("editBefore_mobile");
    })
    .children("ul")
    .children()
    .click(function (event) {
      event.stopPropagation();
    });

  jQuery(".mobile-menu ul.menu>li>ul.sub-menu")
    .children()
    .has("ul.sub-menu")
    .click(function () {
      jQuery(this).children("ul.sub-menu").slideToggle();
    })
    .children("ul")
    .children()
    .click(function (event) {
      event.stopPropagation();
    });

  jQuery(".mobile-menu ul.menu>li>ul.sub-menu>li>ul.sub-menu")
    .children()
    .has("ul.sub-menu")
    .click(function () {
      jQuery(this).children("ul.sub-menu").slideToggle();
    })
    .children("ul")
    .children()
    .click(function (event) {
      event.stopPropagation();
    });

  jQuery(".mobile-menu ul.menu, .nav_primary").children().has("ul.sub-menu").addClass("menu-item-has-children");
  jQuery(".mobile-menu ul.menu>li").click(function () {
    $(this).toggleClass("tg_active");
    $(this).siblings().removeClass("tg_active");
  });
}); // end document load
