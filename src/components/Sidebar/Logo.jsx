import React from 'react'
import LogoImage from '../../images/logo.png'
import '../../css/Sidebar/Logo.css'

export default function Logo() {
  return (
    <div className="sidebar-logo">
      <img className="sidebar-logo-img" src={LogoImage} draggable="false" alt="Logo"/>
    </div>
  )
}