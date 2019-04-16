const INC = 'counter/INC'

export const incActionCreator = () => ({
    type: INC,
})

const initialState = {
    number: 0,
}

export default (state = initialState, action) => {
    switch (action.type){
        case INC:
        return{
            ...state,
            number: state.number + 1
        }
        
    default:
        return state
    }
}