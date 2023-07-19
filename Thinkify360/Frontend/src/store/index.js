import {createStore} from 'react-redux';


const reducerfn = (state={counter:0},action)=>{

return state;
}


const store = createStore(reducerfn)

export default store;