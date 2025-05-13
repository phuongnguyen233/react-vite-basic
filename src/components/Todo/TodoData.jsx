const DataComponent = (props) => {
    const { name, age, data } = props
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Age is {age}</div>
            <div>Address is {data.address}</div>
            <div>Country is {data.country}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export { DataComponent }