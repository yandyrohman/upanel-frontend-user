import React from 'react'
import '../../../css/Content/Hosting/Hosting.css'
import ImageServer from '../../../images/icon/server.png'

export default function Hosting(props) {
  return (
    <div className="hosting">
      <div className="hosting-item">
        <img 
          className="hosting-item-img" 
          src={ImageServer} 
          alt="Server"
          draggable="false"
        />
        <div className="hosting-item-wrap">
          <div className="hosting-item-status">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hosting-item-name">Perpus Smaknis</div>
        </div>
      </div>
      <div className="hosting-item">
        <img 
          className="hosting-item-img" 
          src={ImageServer} 
          alt="Server"
          draggable="false"
        />
        <div className="hosting-item-wrap">
          <div className="hosting-item-status">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hosting-item-name">Perpus Smaknis</div>
        </div>
      </div>
      <div className="hosting-item">
        <img 
          className="hosting-item-img" 
          src={ImageServer} 
          alt="Server"
          draggable="false"
        />
        <div className="hosting-item-wrap">
          <div className="hosting-item-status">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hosting-item-name">Perpus Smaknis</div>
        </div>
      </div>
    </div>
  )
}