const Header = ({ course }) => {
    return (
        <div>
            {course}
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <>
            <p>{part.name}</p>
            <p>{part.exercises}</p>
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.name} part={part} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    let total = 0;
    parts.forEach(part => total = total + part.exercises)

    return (
        <div>
            <p>Total of exercieses: {total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App