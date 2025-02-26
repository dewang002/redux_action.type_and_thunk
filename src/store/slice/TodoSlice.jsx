

const initialState = {
    value:[],
    loading: false,
    error: null
}

const TodoReducers = ( state = initialState, action ) => {
    switch (action.type) {

        case "ADD_TASK_REQUEST":
            return { ...state, loading:true, error:null }
        case "ADD_TASK_SUCCESS":
            return { ...state, value : [ ...state.value, { id : Date.now(), ...action.payload, done:false } ], loading:false, error:null }
        case "ADD_TASK_ERROR":
            return { ...state, loading:false, error: action.payload }

        case "DELETE_TASK":
            return { ...state, value : state.value.filter( item => item.id !== action.payload )  }

        case "DONE_TASK":
            return { ...state, value : state.value.map( item => item.id === action.payload ? { ...item, done: !item.done } : item )  }

        default:
            return state;
    }
}

export const addTask = (title,description) => async(dispatch) => {
        dispatch({type:'ADD_TASK_REQUEST'});
       await new Promise(res =>setTimeout(res,1000)) //this promise is just to simulate api call
    try{if(!(title,description)){
        dispatch({ type:'ADD_TASK_ERROR', payload: 'something went wrong'})
    }
        dispatch({ type:'ADD_TASK_SUCCESS', payload:{ title, description }})
    } catch (error) {
        dispatch({ type:'ADD_TASK_ERROR', payload: 'something went wrong'})
    }
}

export const deleteTask = (id) => ({ type: "DELETE_TASK", payload: id })
export const doneTask = (id) => ({ type: "DONE_TASK", payload: id })

export default TodoReducers;