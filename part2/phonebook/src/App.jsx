import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';
import axios from 'axios';

const Person = ({ info }) => {
    return (
        <>
            <p>{info.name} {info.number}</p>
        </>
    )
}

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

    useEffect(() => {
        axios.get('http://localhost:3001/persons').
            then(response => {
                setPersons(response.data);
            }
            )
    }, [])


    const personsList = filter === ''
        ? persons.map((item, index) => <Person key={index + 'a'} info={item} />)
        : personsFiltered.map((item, index) => <Person key={index + 'a'} info={item} />)

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