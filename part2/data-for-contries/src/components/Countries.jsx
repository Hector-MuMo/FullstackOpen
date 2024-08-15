import { useEffect, useState } from 'react';
import Country from './Country';

const Line = ({ country, onClick }) => {
    return (
        <>
            <li>{country.name.common} <button onClick={() => onClick(country.name.common)}>Show</button></li>
        </>
    )
}

const Countries = ({ countriesList }) => {
    const [countrySelected, setCountrySelected] = useState(null);

    const handleShow = (countryName) => {
        const countryDisplay = countriesList.filter(country => country.name.common === countryName)
        setCountrySelected(countryDisplay);
    };

    useEffect(() => {
        setCountrySelected(null);
    }, [countriesList]);

    return (
        <>
            {
                countrySelected
                    ? <Country country={countrySelected[0]} />
                    : countriesList.length === 1
                        ? <Country country={countriesList[0]} />
                        : countriesList.length > 10
                            ? <p>Too many countries</p>
                            : countriesList.length > 0
                                ? countriesList.map(country => <Line key={country.flag} country={country} onClick={handleShow} />)
                                : null
            }

        </>
    )
}

export default Countries