import { useEffect, useRef, useCallback } from 'react';

export function useAllFunciones() {
    const linksRef = useRef(null);
    const iconRef = useRef(null);
    const imgLogoRef = useRef(null);
    const videoPlayRefs = useRef([]);

    const pauseVid = useCallback(() => {
        videoPlayRefs.current.forEach(video => {
            if (video && typeof video.pause === 'function') {
                video.pause();
            }
        });
    }, []);

    const showSlide = useCallback((slides, index) => {
        slides.forEach((slide, i) => {
            if (slide) {
                slide.style.display = i === index ? 'block' : 'none';
            }
        });
        pauseVid();
    }, [pauseVid]);

    useEffect(() => {
        const icon = iconRef.current;
        const imgLogo = imgLogoRef.current;
        const slides = Array.from(document.querySelectorAll('.slide'));
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;

        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(slides, currentIndex);
        };

        const showPrevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(slides, currentIndex);
        };

        if (icon) {
            icon.addEventListener('click', () => {
                if (linksRef.current) {
                    linksRef.current.classList.toggle('hidden');
                }
            });
        }

        if (imgLogo) {
            imgLogo.addEventListener('click', () => {
                setTimeout(() => {
                    imgLogo.classList.toggle('logoActivo');
                }, 1500);
                imgLogo.classList.toggle('logoActivo');
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', showPrevSlide);
        }

        if (nextButton) {
            nextButton.addEventListener('click', showNextSlide);
        }

        showSlide(slides, currentIndex);

        return () => {
            if (icon) icon.removeEventListener('click', () => { });
            if (imgLogo) imgLogo.removeEventListener('click', () => { });
            if (prevButton) prevButton.removeEventListener('click', showPrevSlide);
            if (nextButton) nextButton.removeEventListener('click', showNextSlide);
        };
    }, [showSlide, pauseVid]);

    return {
        linksRef,
        iconRef,
        imgLogoRef,
        videoPlayRefs,
    };
}
