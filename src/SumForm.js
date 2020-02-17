import React from 'react'

function SumForm() {
    return (
        <div>
            <p>Sumar</p>
            <input type={'number'} className={'border rounded p-4'}/> +
            <input type={'number'} className={'border rounded p-4'}/> =
            resultado
        </div>
    )
}

export default SumForm