import React from "react";
import lin from '../icons/lin.png';
import octocat from '../icons/octocat.png';
import phone from '../icons/phone.png';
import mail from '../icons/mail.png';

export default function HeaderL() {
    return (
        <div id="header">
            <h1>Katherine Mireille de Vay</h1>
            <h3>Full-stack Developer • she / they</h3>
            <div class='links'>
                <a target="_blank" href='github'><img className='icon' src={lin} alt='github logo'></img></a>
                <a target="_blank" href='linkedin'><img className='icon' src={octocat} alt='linkedin logo'></img></a>
                <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={mail} alt='email icon'></img></a>
                <div><img className='icon' src={phone} alt='phone icon'></img></div>
            </div>
        </div>
    );
}