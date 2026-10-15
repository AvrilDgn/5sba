$(document).ready(function () {

    /**
     * Menu fixation
     */

    let headerFixation = function () {
        let header = $(".header");

        if ($(window).scrollTop() > 40) {
            header.addClass("fixed");
        } else {
            if (!$('.main').hasClass('modal-opened')) {
                header.removeClass("fixed");
            }
        }
    }

    headerFixation();
    $(window).on("scroll", headerFixation);


    /**
     * Anchor scroll
     */

    $(document).on("click", 'a[href*="#"]', function (e) {
        let href = $(this).attr('href');
        href = href.substring(href.lastIndexOf('#'));

        if (href.length > 1 && $(href).length > 0) {
            e.preventDefault();

            // let headerHeight = $('.header').height();

            closeMenu();

            $("html, body").animate({
                scrollTop: $(href).offset().top
            }, 500);
        }
    });


    /**
     * Open mobile menu
     */

    const main = document.querySelector('.main');
    let navigation = document.querySelector('.header__nav');
    let _scrollPosition = 0;
    let isMenuShowed = false;
    $('.header__open-menu-btn').on('click', function () {
        if (!isMenuShowed) {
            $('.header').addClass('showed');
            _scrollPosition = window.pageYOffset;
            const marginSize = window.innerWidth - main.clientWidth;
            main.style.top = `${-_scrollPosition}px`;

            if (marginSize) {
                main.style.marginRight = `${marginSize}px`;
            }
            main.classList.add('modal-opened');
            isMenuShowed = true;
        } else {
            closeMenu();
        }
    });

    $('.header__close-menu-btn').on('click', closeMenu);
    $(window).on("resize", closeMenu);
    $(document).on('keyup', closeMenu);

    function closeMenu() {
        if (!isMenuShowed) return;

        $('.header').removeClass('showed');
        main.classList.remove('modal-opened');
        main.style.marginRight = '';
        window.scrollTo(0, _scrollPosition);
        main.style.top = '';
        navigation.style.visibility = 'visible';
        navigation.addEventListener('transitionend', function () {
            navigation.style.visibility = '';
            isMenuShowed = false;
        }, { once: true });
    }


    /**
     * SLiders
     */

    //problems
    let problems = $('.problems__slider');
    let problemsPagination = problems.find('.problems__slider-pagination');
    let problemsSlider = problems.find('.problems__slider-wrap');
    problemsSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        i = (i < 10) ? '0' + i : i;
        let count = (slick.slideCount < 10) ? '0' + slick.slideCount : slick.slideCount;
        problemsPagination.html('<b>' + i + ' /</b> ' + count);
    });
    problemsSlider.slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: problems.find('.slider-arrow--prev'),
        nextArrow: problems.find('.slider-arrow--next'),
    });

    //tasks
    let tasks = $('.tasks__slider');
    let tasksSlider = tasks.find('.tasks__slider-wrap');
    tasksSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount > 2) {
            slick.slickGoTo(1);
        }
    });
    tasksSlider.slick({
        infinite: false,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        swipeToSlide: true,
        centerPadding: '33.33%',
        prevArrow: tasks.find('.slider-arrow--prev'),
        nextArrow: tasks.find('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //books
    let books = $('.books__slider');
    let booksSlider = books.find('.books__slider-wrap');
    booksSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount > 2) {
            slick.slickGoTo(1);
        }
    });
    booksSlider.slick({
        infinite: false,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        swipeToSlide: true,
        centerPadding: '33.33%',
        prevArrow: books.find('.slider-arrow--prev'),
        nextArrow: books.find('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //written reviews
    let writtenReviews = $('.written-reviews__slider');
    // let writtenReviewsPagination = writtenReviews.find('.slider__dots');
    let writtenReviewsSlider = writtenReviews.find('.written-reviews__slider-wrap').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        dots: true,
        customPaging: function (slider, i) {
            return '';
        },
        arrows: false
    });

    //printed reviews
    let printedReviews = $('.printed-reviews__slider');
    let printedReviewsSlider = printedReviews.find('.printed-reviews__slider-wrap');
    printedReviewsSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount > 2) {
            slick.slickGoTo(1);
        }
    });
    printedReviewsSlider.slick({
        infinite: false,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: '33.33%',
        prevArrow: printedReviews.find('.slider-arrow--prev'),
        nextArrow: printedReviews.find('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //video reviews
    let videoReviews = $('.video-reviews__slider');
    let videoReviewsSlider = videoReviews.find('.video-reviews__slider-wrap');
    videoReviewsSlider.on('init reInit', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount > 2) {
            slick.slickGoTo(1);
        }
    });
    videoReviewsSlider.slick({
        infinite: false,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        swipeToSlide: true,
        centerPadding: '33.33%',
        prevArrow: videoReviews.find('.slider-arrow--prev'),
        nextArrow: videoReviews.find('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '15px',
                    slidesToShow: 1
                }
            }
        ]
    });


    /**
     * Tree
     */

    $('.steps__tabs button').on('click', function () {
        $('.steps__tabs button.active').removeClass('active');
        $(this).addClass('active');
        $('.steps__tree').attr('data-value', $(this).attr('data-target'));
    });
    $('.tree foreignObject').each(function () {
        $(this).attr('height', $(this).find('p').height());
    });
    $('.tree__item').on('mouseenter', function (e) {
        $(this).parent().find('.tree__item.active').removeClass('active');
        $(this).addClass('active');
    });


    /**
     * Input mask
     */

    $("input[name='phone']").mask("+7 (999) 999-99-99");


    /**
     * Modal
     */

    let modals = new Modal({
        beforeOpen: (e) => {
            let starter = $(e.starter),
                modal = $(e.openedWindow);

                if (modal.attr('id') === 'modal-video') {
                    modal.find('.modal__content').append(`<iframe src="${starter.attr('data-video')}" allow="autoplay; encrypted-media" allowfullscreen />`);
                    // modal.find('.modal__content').append(`<video controls autoplay><source src="${starter.attr('data-video')}" type="video/mp4"/></video>`);
                }
        },
        afterClose: (e) => {
            let starter = $(e.starter),
                modal = $(e.openedWindow);
                if (modal.attr('id') === 'modal-video') {
                    modal.find('.modal__content').empty();
                }
        },
    });


    /**
     * Loader
     */

    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 1000);
    document.querySelector('.loader').addEventListener('transitionend', function () {
        this.remove();
    });


    /**
     * Form
     */
    
    //after sumbit form
    let wpcf7Elm = document.querySelectorAll('.wpcf7-form');

    let showErr = function (input, msg) {
        let msgEl = document.createElement('div');
        let parent = input.parentElement;

        parent.classList.add('invalid');

        msgEl.textContent = msg;
        msgEl.classList.add('form__message');
        parent.appendChild(msgEl);
        msgEl.style.opacity = 1;

        setTimeout(() => {
            parent.classList.remove('invalid');
            msgEl.style.opacity = null;

            msgEl.addEventListener('transitionend', function () {
                parent.removeChild(msgEl);
            });
        }, 3000);
    };
    
    jQuery(document).on('click', '.wpcf7-submit', function(e){
        let inputs = $(this).closest('form').find('.form__field input');
        let err = false;

        inputs.each(function (i, el) {
            if (!$(this).attr('aria-required') && !$(this).attr('required')) {
                return;
            }

            switch ($(this).attr('name')) {
                case 'your-name':
                    if ($(this).val().length <= 1) {
                        err = true;
                        showErr($(this).get(0), 'Введите имя!');
                    }
                    // if ($(this).val().replace(/[a-zA-Zа-яА-я]+/g, '').length > 0) {
                    //     err = true;
                    //     showErr($(this).get(0), 'Недопустимое символы');
                    // }
                    break;

                case 'phone':
                    if ($(this).val().length < 18) {
                        err = true;
                        showErr($(this).get(0), 'Введите корректный номер телефона!');
                    }
                    break;

                case 'email':
                    if ($(this).val().length <= 6) {
                        err = true;
                        showErr($(this).get(0), 'Введите корректный адрес электронной почты!');
                    }
                    break;

                default:
                    if ($(this).val().length <= 0) {
                        err = true;
                        showErr($(this).get(0), 'Заполните поле!');
                    }
                    break;
            }
        });

        if (err) {
            e.preventDefault();
        }
    });

    wpcf7Elm.forEach(form => {
        form.addEventListener('wpcf7beforesubmit', function (event) {
            $(".wpcf7-response-output").hide();
        }, false);

        form.addEventListener('wpcf7spam', function (event) {
            $(".wpcf7-response-output").show();
        }, false);
        form.addEventListener('wpcf7mailfailed', function (event) {
            $(".wpcf7-response-output").show();
        }, false);

        form.addEventListener('wpcf7mailsent', function (event) {
            $.ajax({
                type: 'POST',
                url: myajax.url,
                data: {
                    action: 'thx',
                },
                beforeSend: function (xhr) {
                },
                success: function (data) {
					modals.open('#modal-thanks');
                }
            });
        }, false);
    });
});