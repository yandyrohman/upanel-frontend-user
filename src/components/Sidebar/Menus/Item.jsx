import React from 'react'
import '../../../css/Sidebar/Menus/Item.css'

export default function Item(props) {
  return (
    <a 
      className="sidebar-menus-item"
      href={props.to}
    >
      <i className="icon">{props.icon}</i>
      <span>{props.caption}</span>
    </a>
  )
}