import React from 'react';


import cart from '../../assets/cart.png';
import contact from '../../assets/contact-us.png';
import user from '../../assets/user-ecom.png'


import laptop from '../../assets/laptop.png'
import desktop from '../../assets/desktop.png'
import server from '../../assets/server.png'
import Workstation from '../../assets/workstation.png'
import monitor from '../../assets/monitor.png'
import accessories from '../../assets/accessories.png'



export const HeaderList = [
        
    {
        to : '/sign-in',
        name:'Sign-in',
        logo: user
    },
    {
        to : '/contact',
        name:'Contact us',
        logo: contact

    },
    {
        to : '/cart',
        name:'Cart',
        logo: cart
    },
    // {
    //     to : '/wishlist',
    //     name:'Wishlist'
    // },
    // {
    //     to : '/About us',
    //     name:'About us'
    // },
];

export const headerlistLow = [
  {
    name:'computer & accessories',
    list: [
      {
        name: 'Laptops',
        link: '/laptops'
      },
      {
        name: 'Desktops & All in ones',
        link: '/Desktops'
      },
      {
        name: 'laptops',
        link: '/laptops'
      },
      {
        name: 'Monitors',
        link: '/monitors'
      },
      {
        name: 'Electronics & Accessories',
        link: '/Monitors'
      },
      {
        name: 'Workstations',
        link: '/Monitors'
      },
    ],
    link: '/computersandaccessoried'
  },
  {
    name:'Services',
    list: [
      {
        name: 'View all services',
        link: '/allservices'
      },
      {
        name: 'Warrenty Extension',
        link: '/warrenty'
      },
      {
        name: 'Security services',
        link: '/security-services'
      },
      {
        name: 'consulting services',
        link: '/consulting-services'
      },
      {
        name: 'Deployment services',
        link: '/deployment-services'
      },
      {
        name: 'Support services',
        link: '/support-services'
      },
      {
        name: 'Residency services',
        link: '/residency-services'
      },
      {
        name: 'Education services',
        link: '/education-services'
      },
    ],
    link: '/Services'
  },
  {
    name:'Support',
    list: [
        {
          name: 'support home',
         link: '/supporthome'
        },
        {
          name: 'support Library',
         link: '/support-library'
        },
        {
          name: 'Drivers & Downloads',
         link: '/drivers'
        },
    ],
    link: '/Support'
  },
  {
    name:'Deals',
    list: [

    ],
    link: '/deals'
  },
]
export const headerl = [ 
  {
    name: 'Laptop',
    image: laptop

  },
  {
    name: 'desktop',
    image: desktop

  },
  {
    name: 'monitor',
    image: monitor

  },
  {
    name: 'accessories',
    image: accessories

  },
  {
    name: 'server & storage',
    image: server

  },
  {
    name: 'monitor',
    image: monitor

  },
]

const header = () => {
  return (
    <div>header</div>
  );
}
;
export default header;