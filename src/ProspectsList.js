import React from 'react'
import PropTypes from 'prop-types'
import ProspectItem from './ProspectItem'


const TitleView = () => (
    <p className="font-bold text-lg">
        Últimos Prospectos
    </p>
)

const EmptyView = () => {
    return (
        <p>No se encontraron prospectos</p>
    )
}


const ProspectsList = (props) => {
    return (
        <div>
            {TitleView()}
            
            <div className="h-4"/>
            
            <div>
                <div className="p-4 flex text-gray-600 uppercase text-xs">
                    <div className="flex-1">
                        Name
                    </div>
                    <div className="flex-1">
                        Fecha de Nacimiento
                    </div>
                    <div className="flex-1">
                        Edad
                    </div>
                    <div className="flex-1"/>
                </div>
                
                {props.prospects.length === 0 && EmptyView()}
                
                {props.prospects.map(prospect => {
                    return (
                        <ProspectItem
                            key={prospect.id}
                            prospect={prospect}
                            onProspectDeleteClick={props.onProspectDeleteClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}


ProspectsList.propTypes = {
    prospects: PropTypes.array.isRequired,
    onProspectDeleteClick: PropTypes.func.isRequired,
}

ProspectsList.defaultProps = {
    prospects: [],
}



export default ProspectsList