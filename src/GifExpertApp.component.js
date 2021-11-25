import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd.component'
import { GifGrid } from './components/GifGrid.component';

// Agregar elementos a un arreglo
export const GifExpertApp = () => {

    const [category, setCategory] = useState([
        {
            id: 'asdeqwFWer435',
            area: 'Harry Potter'
        },
    ]);

    // const handleAdd = ()=>{
    //     setCategory( [...category, { id: 'nsberb**&885', area: 'Financne' }] );
    //     // La funcion del useState recibe un callback
    //     setCategory( category => [...category, { id: 'nsberb**&885', area: 'Financne' }] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategory={ setCategory }/>

            <hr/>
            <ol>
                {
                    category.map( item => <GifGrid key={ item.id } area={ item.area }/>)
                }
            </ol>
        </>
    )
}
