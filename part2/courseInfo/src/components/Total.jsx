

const Total = ({ parts }) => {
    let total = 0;
    parts.forEach(part => total = total + part.exercises)

    return (
        <div>
            <p>Total of exercieses: {total}</p>
        </div>
    )
}
export default Total