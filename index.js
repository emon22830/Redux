const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return {
    type: BUY_CAKE,
    info: 'info redux action'
}
}


//(previousState, action) => newstate

const initialState = {
    numOfCakes: 10
}

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            numberOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}


const store = createStore(reducer)

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()