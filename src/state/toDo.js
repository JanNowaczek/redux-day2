const ADD = 'toDo/ADD'

export const addActionCreator = (newTaskText) => ({
    type: ADD, 
    newTaskText,
})

const initialState = {
    tasks: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD:
        return{
            ...state,
            tasks: state.tasks.concat(action.newTaskText)
        }

        default:
            return state
    }
}