import React from 'react'
import '../css/Header.css'

import SidebarToggle from './Header/SidebarToggle'
import Saldo from './Header/Saldo'
import Logo from './Header/Logo'
import Message from './Header/Message'
import Profile from './Header/Profile'

export default function Header() {
  return (
    <div className="header">
      <SidebarToggle />
      <Saldo />
      <Logo />
      <Message />
      <Profile />
    </div>
  )
}