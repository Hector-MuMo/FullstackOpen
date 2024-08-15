import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';
import countriesRequests from './services/countriesRequests';
import Countries from './components/Countries';

function App() {
    const [countries, setCountries] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(null);

    const handleSearchCountry = (country) => {
        setSearchValue(country)

        if (countries) {
            const filteredlist = countries.filter((item) => item.name.common.toLowerCase().includes(country.toLowerCase()));
            setFilteredCountries(filteredlist);
        }
    };

    useEffect(() => {
        countriesRequests.getAll().
            then(countriesList => {
                setCountries(countriesList);
            }).
            catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <SearchInput country={searchValue} onChange={handleSearchCountry} />
            {filteredCountries &&
                <Countries countriesList={filteredCountries} />
            }
        </>
    )
}

export default App
