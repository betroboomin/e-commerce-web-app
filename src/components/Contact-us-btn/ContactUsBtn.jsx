import React, { useState } from "react";
import "./ContactUsBtn.css";
import { AddCircle,HeadsetMicOutlined, Add , SmsOutlined, LocalPhoneOutlined, ContactSupportOutlined, ContactPhoneOutlined} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContactUsBtn = () => {
    const data = [
        {
        link: '',
        icon: <SmsOutlined className="icon-bg"/>,
        name:'Chat with sales',
        home:'8am to 12am ET',
        business: '8am to 12am ET',
    },
        {
        link: '',
        icon: <LocalPhoneOutlined className="icon-bg" />,
        name:'Call sales: 1-877-275-3355',
        home:'9am - 11pm ET',
        business: 'Mon-Fri, 8am to 8pm ET',
        
    },
        {
        link: '',
        icon: <ContactSupportOutlined className="icon-bg" />,
        name:'Technical support',
    },
        {
        link: '',
        icon: <ContactPhoneOutlined className="icon-bg" />,
        name:'Order support',
    },
       
        {
        link: '',
        icon: <ContactPhoneOutlined className="icon-bg"/>,
        name:'Chat with sales on Messanger',
        duration: 'Mon-Fri, 8am to 8pm ET'
    },
]
const [isClicked, setIsClicked] = useState(false);

const handlebtnclick = () => {
 setIsClicked(!isClicked)
}
  return (
    <div className="contact-us">
      <div className="contact-us-content container">
        <div className="contact-us-btn" onClick={handlebtnclick}>
          
          <span className="font-poppins">Contact Us</span>
          <HeadsetMicOutlined />
          
          
        </div>
        <div className={`contact-us-card ${isClicked ? 'active': ''}`}>
            <div className=" contact-us-heading">
                <span className="font-poppins">How can we help you</span>
                <Add fontSize="3rem" className="cross-btn2" onClick={()=>setIsClicked(false)}  />
            </div>
            {
                data.map((item,i)=>(
<div className="contact-us-content2">
                <div className="contact-us-icon">
                    {item.icon}
                </div>
                <div className="contact-us-desc">
                    <span className="font-poppins desc-heading">
                        {item.name}
                    </span>
                    <span className="font-poppins home-time">
                     { item.home &&  `Home: ${item.home}`}
                    </span>
                    <span className="font-poppins business-time">
                    {item.business && `Businnes: ${item.business}`}
                    </span>
                    <span className="font-poppins home-duration">
                    {item.duration}
                    </span>
                </div>
            </div>
                ))
            }
            
          </div>
        
        
      </div>
    </div>
  );
};

export default ContactUsBtn;
