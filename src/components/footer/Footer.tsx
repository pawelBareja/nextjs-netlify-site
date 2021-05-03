import React from 'react'
import Copyright from './Copyright'
import Link from "next/link"
import {menu_items} from "../../data/menu_items"
import {company_data} from "../../data/company_data"

const menuList = menu_items.map(item=><li key={item.page}><Link href={`/${item.path}`}>{item.page}</Link></li>)

const contactItems = company_data.map(item=><li key={item.name}>{item.name}</li>)

const Footer = () => {
  return (
      <li>
    <div className="footer">
      <div className='footer__grid'>
        <div className='footer__item'>
          <img
            src='/images/logo.svg'
            width={100}
            height={50}
            alt={'logo bareja studio'}
          />
        </div>
        <div className='footer__item'>
            <h3>Quick Menu</h3>
          <ul>
          {menuList}
          </ul>
        </div>
        <div className='footer__item'> 
        <h3>Favorite Projects</h3>
             <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul></div>
        <div className='footer__item'>  
        <h3>Quick Contact</h3>
            <ul>
            {contactItems}
          </ul></div>
      </div>

      <Copyright />
    </div>
    <style jsx>
        {`
        .footer__grid{
            background:gray;
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            flex-wrap:wrap;
            padding:5px;
        }
        .footer__item{
            flex-grow:1;
            padding:5px;
        }
        .footer_item ul li a {
            text-transform:capitalise;
        }

        `
        }
    </style>
    </li>
  )
}

export default Footer
