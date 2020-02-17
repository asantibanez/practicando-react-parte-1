import React from 'react'
import ProspectItem from './ProspectItem'


const ProspectsList = () => (
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
            
            <ProspectItem firstName={'Luke'} lastName={'Skywalker'}/>
            <ProspectItem firstName={'Han'} lastName={'Solo'}/>
            <ProspectItem firstName={'Leia'} lastName={'Skywalker'}/>
            <ProspectItem firstName={'Adam'} lastName={'Jensen'}/>
            <ProspectItem firstName={'James'} lastName={'Kirk'}/>
            <ProspectItem firstName={'Steve'} lastName={'Rogers'}/>
            <ProspectItem firstName={'Scott'} lastName={'Summers'}/>
            
        </div>
    </div>
)


export default ProspectsList