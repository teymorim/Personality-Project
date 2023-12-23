import { useCallback, useEffect, useState } from 'react';

function useWindowSize(){
    const [windowSize , setWindowSize] = useState(window.innerWidth)
    const handleWindowResize = useCallback(event => {
    setWindowSize(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);
    return windowSize
}
export default useWindowSize