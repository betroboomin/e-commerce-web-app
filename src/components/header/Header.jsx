import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import TextField from '@mui/material/TextField';
import NavButton from '../buttons/nav-button/NavButton';



import cart from '../../assets/cart.png';
import contact from '../../assets/contact-us.png';
import user from '../../assets/user-ecom.png'

const Header = () => {

  const [hoveredItem, setHoveredItem] = useState(null);
  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

    const HeaderList = [
        
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

    const headerlistLow = [
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
    const [value, setValue] = useState('');
    const onChange = (e) =>{
      setValue(e.target.value);
    }
  return (<>
    <div className="header">
        <div className='header__content container'>
        <div className="header__logo">
           {/* <img src={} alt='' /> */}
           <h1>
            <span className='B-color'>
                B</span>etro <span className='tech'>Technologies</span></h1>
                </div>
              {/* <TextField
      value={value}
      onChange={onChange}

      variant="filled"
      placeholder="Search..."
      InputProps={{
        readOnly: false,
        endAdornment: (
          <InputAdornment  position="end">
            <IconButton edge="end">
              <SearchIcon style={{ color: 'white' }} />
            </IconButton>
          </InputAdornment>
        ),
        style: {
          color: 'white',
          borderColor: 'white',
          width: '18rem',
          height: '3rem',
          border: '2px solid white'
        },
      }}
    /> */}
        {/* </div> */}
        <div className="header_list">
        {
            HeaderList.map((item,i)=>(
                <li className='nav-item' key={i}
                
                > 
                <img src={item.logo} alt='' />
                    <Link className='listing' to={item.link}>
                    {/* <svg aria-hidden="true" style="height:30px;width:30px"><use href="#dds__device-laptop"></use></svg> */}
                        {item.name}
                        </Link>
                        <ArrowForwardIosIcon className='foward-icon' />
                </li>
            ))
        }   
        </div>
        
       {/* <NavButton>
        login
       </NavButton> */}

    </div>
    <div className="header-lower">
      <div className="header-lower-content container">
      {
            headerlistLow.map((item,i)=>(
              <>
                <li className='nav-item' key={i}
                
                onMouseEnter={() => handleItemHover(i)}
              onMouseLeave={handleItemLeave}
              > 
                    <Link className='listing' to={item.link}>
                    {/* <svg aria-hidden="true" style="height:30px;width:30px"><use href="#dds__device-laptop"></use></svg> */}
                        {item.name}
                        </Link>
                        <ArrowForwardIosIcon className='foward-icon' />
                        {hoveredItem === i && (
                          <div className=''>
                        <div className='remove'>
                  {item.list.map((list,j)=>(
                    <div className='nav-item-list ' key={j}>
                      <div className='list-items'> {list.name} </div>
                      <ArrowForwardIosIcon className='foward-ico' />
                    </div>
                    
                  ))}
                </div>
                </div>

                  )}
                </li>
                
                </>
            ))
        }  
      </div>
    </div>
    
    </div>
    {

    }
    </>
  );
}

export default Header;