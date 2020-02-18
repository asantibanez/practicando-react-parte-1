import React from 'react'
import PropTypes from 'prop-types'


const ProspectItem = (props) => {
    let prospect = props.prospect
    
    return (
        <div className="shadow rounded border p-4 my-3 flex items-center">
            <div className="flex-1 flex items-center">
                <img className="h-12 w-12 rounded-full" src={`https://ui-avatars.com/api/?name=${prospect.firstName}}+${prospect.lastName}}`}/>
                <span className="ml-4">
                    {prospect.firstName} {prospect.lastName}
                </span>
            </div>
            <div className="flex-1">
                1986-05-21
            </div>
            <div className="flex-1">
                33 años
            </div>
            <div className="flex-1 flex justify-end">
                <button className="py-2 px-4 border rounded text-sm bg-orange-500 text-white" onClick={() => alert('Hola! Me llamo ' + prospect.firstName)}>Saludar</button>
                <div className={'w-2'}/>
                <button className="py-2 px-4 border rounded text-sm"
                    onClick={() => props.onProspectDeleteClick(prospect)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}


ProspectItem.propTypes = {
    prospect: PropTypes.object.isRequired,
    onProspectDeleteClick: PropTypes.func.isRequired
}

ProspectItem.defaultProps = {
    //
}


export default ProspectItem