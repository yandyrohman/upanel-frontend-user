import React from 'react'
import Item from './Menus/Item'

export default function Menus() {
  return (
    <div className="sidebar-menus">
      <Item icon="dashboard" caption="DASHBOARD" to="#"/>
      <Item icon="storage" caption="HOSTING" to="#"/>
      <Item icon="public" caption="DOMAIN" to="#"/>
      <Item icon="mail" caption="EMAIL" to="#"/>
      <Item icon="folder" caption="FILE" to="#"/>
      <Item icon="view_agenda" caption="EMAIL" to="#"/>
    </div>
  )
}