import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import star from '../assets/Star-1.png';
import usaFlag from '../assets/US.png';
import amex from '../assets/amex.png';
import applePay from '../assets/apple_pay.png';
import googlePay from '../assets/gpay.png';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkdein.png';
import mastercard from '../assets/master_card.png';
import shopPay from '../assets/opay.png';
import paypal from '../assets/paypal.png';

function Footer() {
    const [openSections, setOpenSections] = useState({});
    
    const toggleSection = (key) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <footer className='bg-black text-white py-10 px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Top Section */}
                <div className='flex flex-col md:flex-row md:justify-between items-start pb-8 border-b border-gray-600'>
                    <div className='w-full md:w-auto mb-6 md:mb-0'>
                        <h3 className='text-lg font-bold mb-2'>BE THE FIRST TO KNOW</h3>
                        <p className='text-sm mb-4 font-semibold'>Sign up for updates from metta muse.</p>
                        <div className='flex items-center gap-3'>
                            <input type='email' placeholder='Enter your e-mail...' className='bg-white text-gray-500 px-4 py-2 w-full md:w-auto' />
                            <button className='bg-black text-gray-400 px-6 py-2 hover:bg-white hover:text-black border border-gray-100 rounded'>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className='w-full md:w-auto'>
                        <h3 className='text-lg font-bold mb-2'>CONTACT US</h3>
                        <p className='text-md'>+44 221 133 5360</p>
                        <p className='text-md'>customercare@mettamuse.com</p>
                        <div className='mt-4'>
                            <h3 className='text-lg font-bold'>CURRENCY</h3>
                            <div className='flex items-center mt-1'>
                                <img src={usaFlag} alt='USA Flag' className='mr-2' />
                                <img src={star} alt='Star' className='mr-2' />
                                <span className='text-lg font-bold'>USD</span>
                            </div>
                            <p className='text-xs mt-2 text-gray-300'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className='hidden md:grid md:grid-cols-3 gap-8 py-8'>
                    <div>
                        <h3 className='text-xl font-bold'>mettā muse</h3>
                        <ul className='mt-2 space-y-2 text-sm'>
                            {["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliance Docs"].map((link, index) => (
                                <li key={index} className='hover:text-white transition'><a href='/'>{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>QUICK LINKS</h3>
                        <ul className='mt-2 space-y-2 text-sm'>
                            {["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"].map((link, index) => (
                                <li key={index} className='hover:text-white transition'><a href='/'>{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>FOLLOW US</h3>
                        <div className='flex space-x-4 mt-2'>
                            <img src={insta} alt='Instagram' />
                            <img src={linkedin} alt='LinkedIn' />
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-md font-bold'>mettā muse ACCEPTS</h3>
                            <div className='flex space-x-4 mt-4'>
                                {[googlePay, mastercard, paypal, amex, applePay, shopPay].map((icon, index) => (
                                    <img key={index} src={icon} alt='Payment Method' className='w-10 h-6' />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className='md:hidden border-t border-gray-600'>
                    {[{ label: 'mettā muse', key: 'mettaMuse', links: ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliance Docs"] },
                      { label: 'QUICK LINKS', key: 'quickLinks', links: ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"] },
                      { label: 'FOLLOW US', key: 'followUs', links: [], icons: [insta, linkedin] },
                      { label: 'mettā muse ACCEPTS', key: 'paymentMethods', links: [], icons: [googlePay, mastercard, paypal, amex, applePay, shopPay] }].map(section => (
                        <div key={section.key} className='py-2 border-b border-gray-600'>
                            <button onClick={() => toggleSection(section.key)} className='flex justify-between items-center w-full text-left text-lg font-bold'>
                                {section.label}
                                {openSections[section.key] ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
                            </button>
                            {openSections[section.key] && (
                                <ul className='mt-2 space-y-2 text-sm text-gray-400'>
                                    {section.links.map((link, index) => <li key={index}><a href='/'>{link}</a></li>)}
                                    {section.icons && <div className='flex space-x-4 mt-2'>{section.icons.map((icon, idx) => <img key={idx} src={icon} alt='' className='w-10 h-6' />)}</div>}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className='text-center text-sm mt-4'>
                    Copyright © 2023 mettamuse. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
