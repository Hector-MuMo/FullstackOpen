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
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filter, setFilter] = useState('');
    const [personsFiltered, setPersonsFiltered] = useState([]);

    const handleChangeName = (e) => {
        setNewName(e.target.value);
    }

    const handleChangeNumber = (e) => {
        setNewNumber(e.target.value);
    };

    const handleFilterList = (e) => {
        const regEx = new RegExp(e.target.value, 'i');

        const filteredList = persons.filter(person => regEx.test(person.name));

        setPersonsFiltered(filteredList);
        setFilter(e.target.value);

    }

    const handleSubmitPerson = (e) => {
        e.preventDefault();

        if (newName.length !== 0) {
            const isInclude = persons.find(item => item.name === newName);
            if (isInclude) {
                alert(`${newName} is already added to phonebook`);
            } else {
                setPersons([...persons, { name: newName, number: newNumber }]);
                setNewName('');
                setNewNumber('');
            }
        } else {
            alert('Please enter a name');
        }
    }

    const personsList = filter === ''
        ? persons.map((item, index) => <Person key={index + 'a'} info={item} />)
        : personsFiltered.map((item, index) => <Person key={index + 'a'} info={item} />)

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with <input type="text" value={filter} onChange={e => handleFilterList(e)} />
            </div>
            <h2>Add new</h2>
            <form onSubmit={handleSubmitPerson}>
                <div>
                    name: <input value={newName} onChange={(e) => handleChangeName(e)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleChangeNumber} />
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