import React from 'react'
import '../css/Sidebar.css'

import Logo from './Sidebar/Logo'
import Menus from './Sidebar/Menus'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <Menus />
    </div>
  )
}