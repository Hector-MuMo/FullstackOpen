

const Total = ({ parts }) => {
    let total = parts.reduce((prev, part) => prev + part.exercises, 0)

    return (
        <div>
            <p>
                <strong>Total of exercieses: {total}</strong>
            </p>
        </div>
    )
}
export default Total