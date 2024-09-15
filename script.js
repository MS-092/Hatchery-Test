$(document).ready(function() {
    // Smooth scrolling for navigation
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('#sticky-header').height()
            }, 1000);
        }
    });

    // Image slider functionality
    function initImageSlider() {
        $('.image-slider').each(function() {
            var $slider = $(this);
            var $slides = $slider.find('img');
            var currentSlide = 0;

            function showSlide(index) {
                $slides.fadeOut(500);
                $slides.eq(index).fadeIn(500);
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % $slides.length;
                showSlide(currentSlide);
            }

            setInterval(nextSlide, 5000); // Change slide every 5 seconds
            showSlide(currentSlide);
        });
    }

    initImageSlider();

    // Animate sections on scroll
    function animateSections() {
        $('.section').each(function() {
            var $section = $(this);
            var sectionTop = $section.offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (scrollTop + windowHeight > sectionTop + 100) {
                $section.addClass('animate');
            }
        });
    }

    $(window).on('scroll', animateSections);
    animateSections(); // Run once on page load

    // Interactive note cards
    $('.note-card').on('click', function() {
        $(this).toggleClass('expanded');
    });

    // Hover effect for table info
    $('.table-info li').hover(
        function() {
            $(this).css('color', 'var(--accent-color)');
        },
        function() {
            $(this).css('color', 'var(--text-color)');
        }
    );

    // CTA button effect
    $('.cta-button').on('click', function() {
        $(this).addClass('pulse');
        setTimeout(() => {
            $(this).removeClass('pulse');
        }, 1000);
    });

    // Image preview animations
    function initImagePreviews() {
        $('.image-preview').each(function() {
            var $preview = $(this);
            var $img = $preview.find('img');
            var originalSrc = $img.attr('src');
            var lowResSrc = originalSrc.replace('.jpg', '-low-res.jpg');

            // Load low-res image first
            $img.attr('src', lowResSrc);

            // Load high-res image when in viewport
            $preview.waypoint({
                handler: function(direction) {
                    $img.attr('src', originalSrc);
                    this.destroy();
                },
                offset: '75%'
            });
        });
    }

    initImagePreviews();

    // Lazy load images
    $('img').lazy({
        effect: 'fadeIn',
        effectTime: 1000,
        threshold: 0
    });

    // Parallax effect for image previews
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        $('.image-preview').each(function() {
            var $preview = $(this);
            var offsetTop = $preview.offset().top;
            var parallaxSpeed = 0.5;
            var parallaxOffset = (scrollTop - offsetTop) * parallaxSpeed;
            $preview.css('transform', 'translateY(' + parallaxOffset + 'px)');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const sliders = document.querySelectorAll('.image-slider');
        
        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slider-container img');
            const prevBtn = slider.querySelector('.prev');
            const nextBtn = slider.querySelector('.next');
            let currentSlide = 0;

            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    prevSlide();
                    console.log('Previous button clicked');
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    nextSlide();
                    console.log('Next button clicked');
                });
            }
        });
    });

    // setup example image slider
    function setupImageSlider() {
        const container = document.querySelector('#empathy-map .slider-container');
        const images = document.querySelectorAll('#empathy-map .slider-image');
        let currentIndex = 0;

        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            container.style.transform = `translateX(-${currentIndex * 50}%)`;
        }

        setInterval(showNextImage, 5000);
    }

    document.addEventListener('DOMContentLoaded', setupImageSlider);
});