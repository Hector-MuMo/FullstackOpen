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

const Total = ({ total }) => {
    return (
        <div>
            <p>Total of exercieses: {total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

export default App