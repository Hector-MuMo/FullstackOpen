
const StatisticLine = ({ text, value }) => {
    return (

        text === 'Positive'
            ? <p>{text} {value} %</p>
            : <p>{text} {value} </p>
    )
}

export default StatisticLine