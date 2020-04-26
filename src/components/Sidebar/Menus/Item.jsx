import React from 'react'
import '../../../css/Sidebar/Menus/Item.css'

export default function Item(props) {
  return (
    <a 
      className={props.active ? 'sidebar-menus-item sidebar-menus-active' : 'sidebar-menus-item'}
      href={props.to}
    >
      <i className="icon">{props.icon}</i>
      <span>{props.caption}</span>
    </a>
  )
}