import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll animations
 * @param {Object} options - Animation configuration
 * @param {string} options.animation - Animation type: 'fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scaleUp'
 * @param {number} options.duration - Animation duration in seconds (default: 1)
 * @param {number} options.delay - Animation delay in seconds (default: 0)
 * @param {string} options.ease - GSAP easing function (default: 'power2.out')
 * @param {string} options.trigger - ScrollTrigger start position (default: 'top 80%')
 * @returns {Object} ref - Ref to attach to the element you want to animate
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  const {
    animation = 'fadeIn',
    duration = 1,
    delay = 0,
    ease = 'power2.out',
    trigger = 'top 80%',
    stagger = 0,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Define animation presets
    const animations = {
      fadeIn: {
        opacity: 0,
        y: 30,
      },
      slideUp: {
        opacity: 0,
        y: 50,
      },
      slideLeft: {
        opacity: 0,
        x: 50,
      },
      slideRight: {
        opacity: 0,
        x: -50,
      },
      scaleUp: {
        opacity: 0,
        scale: 0.8,
      },
      slideDown: {
        opacity: 0,
        y: -50,
      },
    };

    // Set initial state
    gsap.set(element, animations[animation] || animations.fadeIn);

    // Create animation
    const animation_instance = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: 'play none none none',
      },
    });

    // Cleanup
    return () => {
      animation_instance.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, duration, delay, ease, trigger, stagger]);

  return elementRef;
};

/**
 * Hook for animating child elements (like words or letters) with stagger
 * @param {Object} options - Animation configuration
 * @returns {Object} containerRef - Ref to attach to the container element
 */
export const useScrollAnimationStagger = (options = {}) => {
  const containerRef = useRef(null);

  const {
    animation = 'fadeIn',
    duration = 0.8,
    stagger = 0.1,
    ease = 'power2.out',
    trigger = 'top 80%',
    childSelector = '.animate-word',
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.querySelectorAll(childSelector);

    if (children.length === 0) return;

    // Define animation presets
    const animations = {
      fadeIn: {
        opacity: 0,
        y: 20,
      },
      slideUp: {
        opacity: 0,
        y: 30,
      },
      slideLeft: {
        opacity: 0,
        x: 30,
      },
      slideRight: {
        opacity: 0,
        x: -30,
      },
    };

    // Set initial state for all children
    gsap.set(children, animations[animation] || animations.fadeIn);

    // Create staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: trigger,
        toggleActions: 'play none none none',
      },
    });

    tl.to(children, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      stagger,
      ease,
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, duration, stagger, ease, trigger, childSelector]);

  return containerRef;
};
