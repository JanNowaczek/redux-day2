import React from 'react'
import { connect } from 'react-redux'
import { addActionCreator } from './state/toDo'
import { deleteActionCreator } from './state/toDo'
import { newTaskChangedActionCreator } from './state/toDo'

const ToDo = (props) => (
    <div>
        <input
            value={props._newTasksText}
            onChange={event => props._taskTextChanged(event.target.value)}
        />
        <button
            onClick={props._addTask}
        >
            DODAJ
                </button>
        <ul>
            {
                props._tasks.map(
                    (task, i) => (
                        <li
                            key={task.key}
                            onClick={() => props._deleteTask(task.key)}
                        >
                            {task.text}
                        </li>
                    )
                )
            }
        </ul>
    </div>

)

const mapStateToProps = state => ({
    _tasks: state.toDo.tasks,
    _newTasksText: state.toDo.newTaskText,
})

const mapDispatchToProps = dispatch => ({
    _addTask: () => dispatch(addActionCreator()),
    _deleteTask: (taskKey) => dispatch(deleteActionCreator(taskKey)),
    _taskTextChanged: (newTaskText) => dispatch(newTaskChangedActionCreator(newTaskText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)