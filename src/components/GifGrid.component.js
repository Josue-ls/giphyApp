import React from 'react'
import { GifGridItem } from './GifGridItem.component';
import { useFetch } from '../hooks/useFetch.hook';

export const GifGrid = ({ area }) => {

    const { data: imagenes, loading } = useFetch(area);

    return (
        <>
            <h4> {area} </h4>
            {loading && <p> Loading </p>}
            <div className="card-grid">
                {
                    imagenes.map(img => <GifGridItem key={img.id}  {...img} />)
                }
            </div>
        </>
    )
}