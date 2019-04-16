import uuidv1 from 'uuid/v1'

const ADD = 'toDo/ADD'
const DELETE = 'toDo/DELETE'


export const addActionCreator = (newTaskText) => ({
    type: ADD, 
    newTaskText,
})

export const deleteActionCreator = (taskKey) => ({
    type: DELETE, 
    taskKey,
})

const initialState = {
    tasks: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD:
        return{
            ...state,
            tasks: state.tasks.concat({
                text: action.newTaskText,
                key: uuidv1(),
            })
        }
        case DELETE:
        return{
            ...state,
            tasks: state.tasks.filter((task) => task.key !== action.task.Key)
        }
        default:
            return state
    }
}