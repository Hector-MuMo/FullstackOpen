import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';
import personsService from './services/personsRequests'
import Person from './components/Person';


const App = () => {
    const [persons, setPersons] = useState([]);
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

        if (newName.length !== 0 & newNumber.length !== 0) {
            const isNameIncluded = persons.find(item => item.name === newName);
            const isNumberIncluded = persons.find(item => item.number === newNumber);
            const newPerson = {
                name: newName,
                number: newNumber
            }

            if (isNameIncluded !== undefined | isNumberIncluded !== undefined) {
                const confirmUpdate = window.confirm(`${newName} or ${newNumber} is already added to phonebook, replace the info?`);
                const personId = isNameIncluded?.id ?? isNumberIncluded?.id

                if (confirmUpdate) {
                    personsService.update(personId, newPerson).then(personUpdated => {
                        setPersons(persons.map(person => person.id === personUpdated.id ? personUpdated : person));
                    })
                }

            } else {

                personsService.create(newPerson).then(personCreated => {
                    setPersons([...persons, personCreated]);
                    setNewName('');
                    setNewNumber('');
                })

            }

        } else {
            alert('Name or Number is missing');
        }
    }

    const handleDeletePerson = (id, name) => {
        const confirmDelete = window.confirm(`Delete ${name}?`);

        if (confirmDelete) {
            personsService.erase(id).then(personDeleted => {
                setPersons(persons.filter(person => person.id !== personDeleted.id))
            })
        }
    }

    useEffect(() => {
        personsService.getAll().then(initialPersons => {
            setPersons(initialPersons);
        });

    }, [])


    const personsList = filter === ''
        ? persons.map((item, index) => <Person key={index} person={item} onClick={handleDeletePerson} />)
        : personsFiltered.map((item, index) => <Person key={index} info={item} />)

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} onChange={handleFilterList} />
            <h2>Add new</h2>
            <PersonForm
                name={newName} number={newNumber}
                onChangeName={handleChangeName} onChangeNumber={handleChangeNumber}
                onSubmit={handleSubmitPerson} />
            <h2>Numbers</h2>
            <PersonsList list={personsList} />
        </div>
    )
}

export default App