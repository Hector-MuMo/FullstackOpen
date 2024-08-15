
const SearchInput = ({ country, onChange }) => {
    return (
        <div>
            <span>Find Countries: </span>
            <input value={country} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default SearchInput