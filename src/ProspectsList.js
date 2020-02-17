import React from 'react'
import ProspectItem from './ProspectItem'


const ProspectsList = () => {
    
    const prospects = [
        {firstName: "Luke", lastName:"Skywalker"},
        {firstName: 'Han', lastName: 'Solo'},
        {firstName: 'Leia', lastName: 'Skywalker'},
        {firstName: 'Adam', lastName: 'Jensen'},
        {firstName: 'James', lastName: 'Kirk'},
        {firstName: 'Steve', lastName: 'Rogers'},
        {firstName: 'Scott', lastName: 'Summers'},
    ]
    
    return (
        <div>
            <p className="font-bold text-lg">
                Últimos Prospectos
            </p>
            
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
                
                {prospects.map(prospect => {
                    return (
                        <ProspectItem
                            key={`${prospect.firstName}-${prospect.lastName}`}
                            firstName={prospect.firstName}
                            lastName={prospect.lastName}
                        />
                    )
                })}
            </div>
        </div>
    )
}


export default ProspectsList