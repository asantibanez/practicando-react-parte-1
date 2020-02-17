import React from 'react'
import ProspectForm from './ProspectForm'
import ProspectsList from './ProspectsList'

function App(props) {
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
            <p className={'text-2xl'}>BEST CRM</p>
            
            <div className={'h-4'}/>
            
            <ProspectForm/>
            
            <div className={'h-16'}/>
            
            <ProspectsList prospects={prospects}/>
        </div>
    );
}

export default App;
