import { useState, useEffect } from 'react';

const useDebounce = (value, seconds) => {
    const [decounceValue, setDecounceValue] = useState('');

    useEffect(() => {
        const setTimeOutID = setTimeout(() => {
            setDecounceValue(value);
        }, seconds);
        return () => {
            clearTimeout(setTimeOutID);
        };
    }, [value, seconds]);
    return decounceValue;
};

export default useDebounce;
