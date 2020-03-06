import React from 'react'
import LogoImage from '../../images/logo.png'
import '../../css/Header/Logo.css'

export default function Logo() {
  return (
    <div className="header-logo">
      <img className="header-logo-img" src={LogoImage} alt="Logo"/>
    </div>
  )
}