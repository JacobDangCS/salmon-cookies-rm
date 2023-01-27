import React from 'react';
import { Link } from 'gatsby';
import ChinookSalmon from '../img/chinook.jpg';
import Seattle from '../img/seattle.jpg';
import Tokyo from '../img/tokyo.jpg';
import Coast from '../img/coast.jpg';
import Dubai from '../img/dubai.jpg';
import Paris from '../img/paris.jpg';
import Salmon from '../img/salmon.png';
import Cutter from '../img/cutter.jpg';
import FamilyPic from '../img/family.jpg';
import './style.css'

const Header = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5px'
}

const Locations = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Hours = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const locationImage = {
  width: 300,
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const LocationPara = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const imageContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const lowerSalmon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const familyPhoto = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function Home() {
  return (
    <>
      <header style={Header}>
        <main>
          <h1>Pat's Salmon Cookies</h1>
          <h2>International</h2>
          <ul>
            <li><Link to="home.html">Home</Link></li>
            <li><Link to="sales.html">Sales</Link></li>
            <li><Link to="merch.html">Merch</Link></li>
          </ul>
        </main>
      </header>

      <div style={lowerSalmon}>
        <img src={ChinookSalmon} alt="Salmon Fish" class='chin' />
        <img src={ChinookSalmon} alt="Salmon Fish" class='chin' />
        <img src={ChinookSalmon} alt="Salmon Fish" class='chin' />
      </div>

      <div style={Locations}>
        <h2 style={LocationPara}>Locations</h2>
      </div>

      <div style={Hours}>
        <p style={LocationPara}>Store hours are 6am - 7pm Locally</p>
      </div>

      <div className="locationContainer">
        <ul>
          <li>
            <div style={imageContainer}>
              <img style={locationImage} src={Seattle} alt="Seattle" />
            </div>
            <div className="address">
              <p style={LocationPara}>2385 Union St.<br />Seattle, WA 98119<br />206-765-315</p>
            </div>
          </li>

          <li>
            <div style={imageContainer}>
              <img style={locationImage} src={Tokyo} alt="Tokyo" />
            </div>
            <div>
              <p style={LocationPara}>2484 Senkawa-dori Ave<br />Tokyo, JP, 176-0006<br />+8136-460-3458</p>
            </div>
          </li>

          <li>
            <div style={imageContainer}>
              <img style={locationImage} src={Dubai} alt="Dubai" />
            </div>
            <div>
              <p style={LocationPara}>NO 18 Mishui Ave<br />Dubai, UAE, 00000<br />+971 55 713 8271</p>
            </div>
          </li>

          <li>
            <div style={imageContainer}>
              <img style={locationImage} src={Paris} alt="Paris" />
            </div>
            <div>
              <p style={LocationPara}>31 Rue de la Banque<br />Paris, Île-de-France, 53136<br />+33 658130773</p>
            </div>
          </li>

          <li>
            <div style={imageContainer}>
              <img style={locationImage} src={Coast} alt="Lima" />
            </div>
            <div>
              <p style={LocationPara}> Mza R Lt1 Parque El Asesor - Ate<br />Lima, Lima, Perú<br />+51 1 9453240 </p>
            </div>
          </li>
        </ul>
      </div>

      <section className="borderSalmonMid">
        <ul>
          <div style={lowerSalmon}>
          <li className="fish"><img src={Salmon} /></li>
          <li className="fish"><img src={Salmon} /></li>
          </div>
        </ul>
      </section>

      <section className="aboutTitlePosition">
        <div className="aboutTitle">
          <p style={LocationPara}>From our familly, to yours!</p>
        </div>
      </section>

      <article style={lowerSalmon}>
        <ul>
          <li><img src={Cutter} alt="cutter" /></li>
        </ul>

        <div >
          <div style={familyPhoto}>
            <img className="familyPic" src={FamilyPic} alt="Pat's Family" />
          </div>
        </div>
      </article>

      <article className="ParaG">
        <div className="aboutp">
          <p></p>
        </div>
      </article>

      <footer>
        <ul className="footNotes">
          <li style={LocationPara}><Link to="/">Careers</Link></li>
          <li style={LocationPara}><Link to="/">Corporate</Link></li>
          <li style={LocationPara}><Link to="/">Bulk Order</Link></li>
        </ul>
      </footer>
    </>
  )
}