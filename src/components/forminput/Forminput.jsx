import React, { useState } from 'react'
import './Forminput.css'
import { IoMdAdd} from 'react-icons/io'

function Forminput() {
    const [inputList, setInputList] = useState('');
    const [Items, setItems] = useState([])

    const itemEvent = (event) =>{
        setInputList(event.target.value)
    }

    const listofItems =() => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList('')
    } ;

  return (
    <div className='app__form-main'>
        <div className="app__form-text">
            <h1>toDo list</h1>
        </div>
        <div>
            <input  className="app__form-input" type="text" placeholder='Add your new todo here'
                value={inputList}
            onChange={itemEvent}/>
            <button className='app__form-add' onClick={listofItems}><IoMdAdd/></button>
        </div>
        <ol>
            {
            Items.map( (itemval) => {
                return <li>{itemval}</li>
            })}
        </ol>
    </div>
  )
}

export default Forminput