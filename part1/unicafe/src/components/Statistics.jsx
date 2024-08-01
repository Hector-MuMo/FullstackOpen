

const Statistics = ({ good, neutral, bad, total, avg, positive }) => {

    return (
        <div>
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>Total {total}</p>
            <p>Average {avg}</p>
            <p>Positive {positive}%</p>
        </div>
    )
}

export default Statistics