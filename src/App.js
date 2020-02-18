import React from 'react'
import uuid from 'uuid'
import ProspectForm from './ProspectForm'
import ProspectsList from './ProspectsList'

class App extends React.Component {
    
    state = {
        prospects: [],
    }
    
    render() {
        return (
            <div>
                <p className={'text-2xl'}>BEST CRM</p>
                
                <div className={'h-4'}/>
                
                <ProspectForm
                    onProspectSaved={(firstName, lastName, dateOfBirth) => {
                        this.setState((state) => {
                            const id = uuid()
                            return {
                                prospects: [
                                    ...state.prospects,
                                    {id, firstName, lastName, dateOfBirth}
                                ]
                            }
                        })
                    }}
                />
                
                <div className={'h-16'}/>
                
                <ProspectsList
                    prospects={this.state.prospects}
                />
            </div>
        );
    }
}

export default App;
