const Header = ({ course }) => {
    return (
        <div>
            {course}
        </div>
    )
}

const Content = ({ parts, exercises }) => {
    return (
        <div>
            <p>Part 1: {parts[0]}</p>
            <p>Num of exercises: {exercises[0]}</p>

            <p>Part 2: {parts[1]}</p>
            <p>Num of exercises: {exercises[1]}</p>

            <p>Part 3: {parts[2]}</p>
            <p>Num of exercises: {exercises[2]}</p>

        </div>
    )
}

const Total = ({ total }) => {
    return (
        <div>
            <p>Total of exercieses: {total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App