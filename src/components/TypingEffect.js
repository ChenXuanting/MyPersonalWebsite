import React, { useState, useEffect } from 'react';
import '../css/TypingEffect.css';

const TypingEffect = ({ children, startDelay = 0 }) => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let i = 0;

        const typeEffect = () => {
            if (i < children.length) {
                setText(children.substring(0, i + 1));
                i++;
                setTimeout(typeEffect, 120);
            } else {
                setIsTyping(false);
            }
        };

        const startTyping = () => {
            if (i === 0) {
                setTimeout(typeEffect, startDelay);
            }
        };

        startTyping();

        return () => {};  // Cleanup function
    }, [children, startDelay]);

    return (
        <span className={isTyping ? 'typing' : 'typed'}>
            {text}
            {isTyping && <span className="cursor"></span>}
        </span>
    );
};

export default TypingEffect;
