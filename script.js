
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function changeSlide(index) {
        slides[currentIndex].style.opacity = "0"; // إخفاء الصورة الحالية
        currentIndex = (index + slides.length) % slides.length; // ضمان عدم خروج المؤشر عن النطاق
        slides[currentIndex].style.opacity = "1"; // إظهار الصورة الجديدة
    }

    //دعم التبديل بالسحب العمودي (Swipe Up/Down) على الموبايل
    let startY = 0;
    let endY = 0;

    document.querySelector(".slider").addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY; // تسجيل نقطة البداية (Y)
    });

    document.querySelector(".slider").addEventListener("touchmove", function (event) {
        endY = event.touches[0].clientY; // تسجيل نقطة النهاية أثناء السحب
    });

    document.querySelector(".slider").addEventListener("touchend", function () {
        let diff = startY - endY;

        if (diff > 50) {
            //السحب لأعلى → انتقل للصورة التالية
            changeSlide(currentIndex + 1);
        } else if (diff < -50) {
            // السحب لأسفل → انتقل للصورة السابقة
            changeSlide(currentIndex - 1);
        }
    });

    //دعم التقليب بالسكرول (Scroll) على الكمبيوتر
    window.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            changeSlide(currentIndex + 1);
        } else {
            changeSlide(currentIndex - 1);
        }
    });
});

