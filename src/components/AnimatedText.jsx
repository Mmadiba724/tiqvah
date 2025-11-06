import React from 'react';
import { useScrollAnimationStagger } from '../hooks/useScrollAnimation';

/**
 * AnimatedText component that animates words on scroll
 * @param {string} text - The text to animate
 * @param {string} className - Additional CSS classes
 * @param {Object} animation - Animation options
 */
const AnimatedText = ({
  text,
  className = '',
  animation = 'fadeIn',
  duration = 0.8,
  stagger = 0.1,
  as = 'p',
  splitBy = 'words' 
}) => {
  const containerRef = useScrollAnimationStagger({
    animation,
    duration,
    stagger,
    childSelector: '.animate-word',
  });

  // Split text into words
  const words = text.split(' ');

  const Tag = as;

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span key={index} className="animate-word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
