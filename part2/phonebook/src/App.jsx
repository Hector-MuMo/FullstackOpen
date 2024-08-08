import { useState } from 'react'

const Person = ({ info }) => {
    return (
        <>
            <p>{info.name}</p>
        </>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    const handleAddPerson = (e) => {
        e.preventDefault()

        if (newName.length !== 0) {
            setPersons([...persons, { name: newName }])
            setNewName('')
        } else {
            alert('Please enter a name')
        }
    }

    const personsList = persons.map((item, index) => <Person key={index + 'a'} info={item} />)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleAddPerson}>
                <div>
                    name: <input value={newName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {personsList}
        </div>
    )
}

export default App