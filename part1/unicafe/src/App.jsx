import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics';

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(100);

    const handleGood = () => {
        const increment = good + 1;
        const total = all + 1
        const avg = (increment - bad) / total
        const pos = (increment / total) * 100

        setGood(increment);
        setAll(total);
        setAverage(avg);
        setPositive(pos);

    };

    const handleNeutral = () => {
        const increment = neutral + 1;
        const total = all + 1
        const avg = (good - bad) / total
        const pos = (good / total) * 100
        console.log(pos);

        setNeutral(increment);
        setAll(total);
        setAverage(avg);
        setPositive(pos);

    };

    const handleBad = () => {
        const increment = bad + 1;
        const total = all + 1
        const avg = (good - increment) / total
        const pos = (good / total) * 100
        console.log(pos);

        setBad(increment);
        setAll(total);
        setAverage(avg);
        setPositive(pos);
    };

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='Good' onClick={handleGood} />
            <Button text='Neutral' onClick={handleNeutral} />
            <Button text='Bad' onClick={handleBad} />
            <Statistics good={good} neutral={neutral} bad={bad} total={all} avg={average} positive={positive} />
        </div>
    )
}

export default App
