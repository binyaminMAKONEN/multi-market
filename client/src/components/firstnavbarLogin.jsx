import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from 'flowbite-react'
export default function Navbars() {
  return (
    <div>                          


<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="#">
    <img
      src="https://i.postimg.cc/D0skf82c/2022-12-08-210836-preview-rev-1.png"
      className="mr-3 h-6 sm:h-9"
      alt="MultiMarket Logo"
    />
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
      
    >
       <Link to="/contact"> צור קשר </Link>

    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Link to="/terms"> תנאי שימוש</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <Link to="/stores">  חנויות</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to="/signup"> הרשמה</Link>
   
    </Navbar.Link>
    <Navbar.Link href="/login">
      כניסת משתמש
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
