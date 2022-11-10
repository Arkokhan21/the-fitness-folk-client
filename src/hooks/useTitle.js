import { useEffect } from 'react';

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - The Fitness Folk`
    }, [title])

}

export default useTitle;