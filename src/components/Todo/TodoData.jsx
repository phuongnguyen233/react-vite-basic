const DataComponent = (props) => {
    const { TodoList } = props
    return (
        <div className="todo-data">
            {TodoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div> {item.name}</div>
                        <button style={{ cursor: "pointer" }}>Delete</button>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(props.TodoList)}
            </div>
        </div>
    )
}
export { DataComponent }