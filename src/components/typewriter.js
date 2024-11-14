import React, { useState, useEffect } from "react";

const TypeWriter = ({ text, className, ...props }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed] = useState(100); // Typing speed
    const [deletingSpeed] = useState(50); // Deleting speed

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDeleting) {
                // If deleting, remove a character but leave the last character
                setDisplayedText((prev) => prev.slice(0, prev.length - 1));
                // Stop deleting when the displayed text length is 1 (to leave the last character)
                if (displayedText.length <= 2) {
                    setIsDeleting(false); // Start writing again when done deleting
                    setIndex(0); // Reset index to start typing from the beginning
                }
            } else {
                // If writing, add a character
                setDisplayedText((prev) => prev + text.charAt(index));
                // Move to the next character or start deleting when done writing
                if (index < text.length - 1) {
                    setIndex((prev) => prev + 1); // Move to the next character
                } else {
                    setIsDeleting(true); // Start deleting when done writing
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed); // Use different speeds for typing and deleting

        return () => clearTimeout(timeout);
    }, [displayedText, index, isDeleting, text, typingSpeed, deletingSpeed]);

    return <p className={className} {...props}>{displayedText}</p>;
};

export default TypeWriter;