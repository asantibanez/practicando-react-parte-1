import React from 'react'


class ProspectForm extends React.Component {
    render() {
        const firstNameRef = React.createRef()
        const lastNameRef = React.createRef()
        let isLoading = false
        
        const saveProspect = () => {
            console.log('Saving...')
            console.log('First Name: ' + firstNameRef.current.value)
            console.log('Last Name: ' + lastNameRef.current.value)
            isLoading = true
        }
        
        return (
            <div>
                Is Loading: {isLoading ? "Si" : "No"}
                
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
                                       className="rounded border px-4 py-2"
                                       ref={firstNameRef}
                                       placeholder="Nombre"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Apellido</label>
                                <input type="text"
                                       name="last_name"
                                       className="rounded border px-4 py-2"
                                       ref={lastNameRef}
                                       placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium">Fecha de Nacimiento</label>
                                <input type="date"
                                       name="date_of_birth"
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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ProspectForm