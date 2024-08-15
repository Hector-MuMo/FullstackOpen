import axios from 'axios';

const url = 'https://studies.cs.helsinki.fi/restcountries/api';
const all = 'all';
const byName = 'name';

const getAll = async () => {
    const request = await axios.get(`${url}/${all}`);
    return request.data;
};

const getByName = async (country) => {
    console.log(`${url}/${byName}/${country}`);

    const request = await axios.get(`${url}/${byName}/${country}`);
    return request.data;
}


export default {
    getAll,
    getByName
}