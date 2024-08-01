import StatisticLine from "./StatisticLine"


const Statistics = ({ good, neutral, bad, total, avg, positive }) => {

    return (
        <div>
            <h2>Statistics</h2>
            <StatisticLine text='Good' value={good} />
            <StatisticLine text='Neutral' value={neutral} />
            <StatisticLine text='Bad' value={bad} />
            <StatisticLine text='All' value={total} />
            <StatisticLine text='Average' value={avg} />
            <StatisticLine text='Positive' value={positive} />
        </div>
    )
}

export default Statistics