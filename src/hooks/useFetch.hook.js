import { useState, useEffect } from 'react';
import { getGif } from '../service/GetGif.service'

export const useFetch = (area) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(area)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
            .catch(console.log);
    }, [area]);

    return state;

}

