import React from 'react'
import faker from 'faker'
import moment from 'moment'


class ProspectForm extends React.Component {
    
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        isLoading: false,
    }
    
    randomizeData = () => {
        this.setState({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            dateOfBirth: moment(faker.date.past()).format('YYYY-MM-DD')
        })
    }
    
    render() {
        const saveProspect = () => {
            console.log('Saving...')
            console.log("First Name: " + this.state.firstName)
            console.log("Last Name: " + this.state.lastName)
            
            this.setState({
                isLoading: true,
            })
        }
        
        return (
            <div>
                Is Loading: {this.state.isLoading ? "Si" : "No"}
                
                {/*New Lead form*/}
                <p className="font-bold text-lg">
                    Nuevo Prospecto
                </p>
                <div className="h-4"/>
                <div className="shadow rounded border-indigo-200 p-4 bg-indigo-100">
                    <form>
                        <div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Nombre</label>
                                <input type="text"
                                       name="first_name"
                                       value={this.state.firstName}
                                       onChange={e => {
                                           this.setState({
                                               firstName: e.target.value,
                                           })
                                       }}
                                       className="rounded border px-4 py-2"
                                       placeholder="Nombre"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Apellido</label>
                                <input type="text"
                                       name="last_name"
                                       value={this.state.lastName}
                                       onChange={e => {
                                           this.setState({
                                               lastName: e.target.value,
                                           })
                                       }}
                                       className="rounded border px-4 py-2"
                                       placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Fecha de Nacimiento</label>
                                <input type="date"
                                       name="date_of_birth"
                                       value={this.state.dateOfBirth}
                                       onChange={e => {
                                           this.setState({
                                               dateOfBirth: e.target.value,
                                           })
                                       }}
                                       className="rounded border px-4 py-2"
                                       placeholder="Fecha de Nacimiento"/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex">
                                <button type="submit"
                                        className="px-4 py-2 text-sm border bg-indigo-500 text-white rounded"
                                        onClick={e => {
                                            e.preventDefault()
                                            saveProspect()
                                        }}>
                                    Guardar Prospecto
                                </button>
                                <div className="w-2"/>
                                <button className="px-4 py-2 text-sm border border-gray-500 rounded">Descartar</button>
                                
                                <div className="w-16"/>
                                
                                <button type={'button'} className="px-4 py-2 text-sm border border-gray-500 rounded" onClick={this.randomizeData}>
                                    Randomize
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ProspectForm