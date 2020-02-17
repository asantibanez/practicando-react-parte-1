import React from 'react'
import ProspectForm from './ProspectForm'
import ProspectsList from './ProspectsList'

function App(props) {
  return (
    <div>
        <p className={'text-2xl'}>BEST CRM</p>
    
        <div className={'h-4'}/>
        
        <ProspectForm/>
        
        <div className={'h-16'}/>
        
        <ProspectsList/>
    </div>
  );
}

export default App;
