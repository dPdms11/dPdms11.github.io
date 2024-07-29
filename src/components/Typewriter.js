import { useEffect, useState, useRef } from 'react';
import './Typewriter.css';

function Typewriter({ text }) {
    const [displayText, setDisplayText] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayText('');
        indexRef.current = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) => {
                const index = indexRef.current;
                if (index < text.length) {
                    indexRef.current++;
                    return prev + text[index];
                }
                
                clearInterval(interval);
                return prev;
            });
        }, 100)
        return () => clearInterval(interval);
    }, [text])

    return (
        <p className='typewriter'>
            { displayText }<span className='animate-blink'>|</span>
        </p>
    )
}

export default Typewriter;