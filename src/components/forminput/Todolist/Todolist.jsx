import React from "react";
import {MdCancel} from 'react-icons/md'
import './Todolist.css'

function Todolist(props) {

 
  return (
    <div>
      <div className="app__todolist">
        <li>{props.text}<span>< MdCancel onClick={() => {
          props.onSelect(props.id)
        }} /></span></li>
      </div>
    </div>
  );
}

export default Todolist;
