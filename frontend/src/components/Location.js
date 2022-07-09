import React from 'react'
import '../css/Location.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <div>
        <Navbar/>
    <div className='Location'>
        <div className='Ques'>
            <h1>Choose Location</h1>
        </div>

        <div className='LocationOptions'>

            <select name="locations" id="locations">
                <option value="none">-</option>
                <option value="amk">Ang Mo Kio</option>
                <option value="bedok">Bedok</option>
                <option value="bishan">Bishan</option>
                <option value="boon lay">Boon Lay</option>
                <option value="bukit batok">Bukit Batok</option>
                <option value="bukit merah">Bukit Merah</option>
                <option value="bukit panjang">Bukit Panjang</option>
                <option value="bukit timah">Bukit Timah</option>
                <option value="changi">Changi</option>
                <option value="cck">Choa Chu Kang</option>
                <option value="clementi">Clementi</option>
                <option value="downtown">Downtown</option>
                <option value="geylang">Geylang</option>
                <option value="hougang">Hougang</option>
                <option value="jurong east">Jurong East</option>
                <option value="jurong west">Jurong West</option>
                <option value="kallang">Kallang</option>
                <option value="lim chu kang">Lim Chu Kang</option>
                <option value="mandai">Mandai</option>
                <option value="marina east">Marina East</option>
                <option value="marina south">Marina South</option>
                <option value="marine parade">Marine Parade</option>
                <option value="newtons">Newton</option>
                <option value="novena">Novena</option>
                <option value="orchard">Orchard</option>
                <option value="outram">Outram</option>
                <option value="pasir ris">Pasir Ris</option>
                <option value="paya lebar">Paya Lebar</option>
                <option value="pioneer">Pioneer</option>
                <option value="punggol">Punggol</option>
                <option value="queenstown">Queenstown</option>
                <option value="river valley">River Valley</option>
                <option value="rochor">Rochor</option>
                <option value="seletar">Seletar</option>
                <option value="sembawang">Sembawang</option>
                <option value="sengkang">Sengkang</option>
                <option value="serangoon">Serangoon</option>
                <option value="tampines">Tampines</option>
                <option value="tanglin">Tanglin</option>
                <option value="tengah">Tengah</option>
                <option value="toa payoh">Toa Payoh</option>
                <option value="tuas">Tuas</option>
                <option value="woodlands">Woodlands</option>
                <option value="yishun">Yishun</option>
            </select>
        </div>

        <div className='LocLink'>
            <Link to='/listing' className='loclink'>Continue</Link>
        </div>
    </div>
    </div>
  )
}

export default Location