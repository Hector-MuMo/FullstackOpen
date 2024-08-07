

const Total = ({ parts }) => {
    let total = 0;
    parts.forEach(part => total = total + part.exercises)

    return (
        <div>
            <p>
                <strong>Total of exercieses: {total}</strong>
            </p>
        </div>
    )
}
export default Total