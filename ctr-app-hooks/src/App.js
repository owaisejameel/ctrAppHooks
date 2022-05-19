import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

function App() {
  const counter = useSelector( state => state.counter )
  const dispatch = useDispatch()
  return (
    <>
    <h1>counter : {counter} </h1>
    <button onClick={(()=>dispatch({type : "INCREMENT"}))}>Increment</button>
    <button onClick={(()=>dispatch({type:'DECREMENT'}))}>Decrement</button>
    </>
  );
}

export default App;
