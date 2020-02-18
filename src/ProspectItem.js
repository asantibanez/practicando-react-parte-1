import React from 'react'
import PropTypes from 'prop-types'


const ProspectItem = (props) => {
    return (
        <div className="shadow rounded border p-4 my-3 flex items-center">
            <div className="flex-1 flex items-center">
                <img className="h-12 w-12 rounded-full" src={`https://ui-avatars.com/api/?name=${props.firstName}}+${props.lastName}}`}/>
                <span className="ml-4">
                    {props.firstName} {props.lastName}
                </span>
            </div>
            <div className="flex-1">
                1986-05-21
            </div>
            <div className="flex-1">
                33 años
            </div>
            <div className="flex-1 flex justify-end">
                <button className="py-2 px-4 border rounded text-sm bg-orange-500 text-white" onClick={() => alert('Hola! Me llamo ' + props.firstName)}>Saludar</button>
                <div className={'w-2'}/>
                <button className="py-2 px-4 border rounded text-sm">Eliminar</button>
            </div>
        </div>
    )
}


ProspectItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

ProspectItem.defaultProps = {
    //
}


export default ProspectItem