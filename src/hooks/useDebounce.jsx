import React, { useState, useEffect } from 'react';

const useDebounce = (value, seconds) => {
    const [decounceValue, setDecounceValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setDecounceValue(value);
        }, seconds);
    }, [value, seconds]);

    return decounceValue;
};

export default useDebounce;
