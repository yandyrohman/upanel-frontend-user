import React from 'react'
import '../../css/Header/Profile.css'
import ImageProfile from '../../images/me.jpg'

export default function Profile() {
  return (
    <div className="header-profile">
      <img className="header-profile-img" src={ImageProfile} alt="Me"/>
      <i className="icon">keyboard_arrow_down</i>
    </div>
  )
}