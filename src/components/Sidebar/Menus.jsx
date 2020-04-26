import React from 'react'
import Item from './Menus/Item'

export default function Menus() {
  return (
    <div className="sidebar-menus">
      <Item icon="dashboard" caption="Dashboard" to="#" active/>
      <Item icon="storage" caption="Hosting" to="#"/>
      <Item icon="public" caption="Domain" to="#"/>
      <Item icon="mail" caption="Email" to="#"/>
      <Item icon="folder" caption="File" to="#"/>
      <Item icon="dns" caption="Database" to="#"/>
    </div>
  )
}