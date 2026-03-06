import React, { useState } from "react";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GiSchoolBag, GiRunningShoe } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import "./FaqAccordion.css";
export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState(1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-wrapper">

            {/* WASH & FOLD */}
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(0)}>
                    <div className="left">
                     <h5 className="icons">1</h5>
                       How can I place an order for laundry?
                    </div>
                    <span className="symbol">{openIndex === 0 ? "−" : "+"}</span>
                </div>

                {openIndex === 0 && (
                    <div className="accordion-body">
                       <p style={{textAlign:"start"}}>
                        Call 8005asec (52732) <br />

WhatsApp +971508052732 <br />

Live Chat on5asec laundry  <br />

Download the5asec UAE’ App on iOS & Android

Visit our stores in Marina, DIFC and Jumeirah
                       </p>
                    </div>
                )}
            </div>

            {/* BAGS & SHOE CARE */}
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(1)}>
                    <div className="left">
                    <h5 className="icons">2</h5>    
                     <span>Do you deliver in Abu Dhabi?</span>
                    </div>
                    <span className="symbol">{openIndex === 1 ? "−" : "+"}</span>
                </div>

                {openIndex === 1 && (
                    <div className="accordion-body">
                      <p style={{textAlign:"start"}}>
                        We cover all of the Abu Dhabi and Dubai for pick up and deliver.


                      </p>
                    </div>
                )}
            </div>


            {/* TOPS */}
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(2)}>
                    <div className="left">
                    <h5 className="icons">3</h5>    
                        <span>What are your turnaround times?</span>
                    </div>
                    <span className="symbol">{openIndex === 2 ? "−" : "+"}</span>
                </div>

                {openIndex === 2 && (
                    <div className="accordion-body">
                        <span>We offer 48hrs delivery as standard and next day delivery with a surcharge for laundry and dry cleaning. Turnaround times may vary for other services. </span>
                    </div>
                )}
            </div>






            {/* Dresses & Jumpsuits */}

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(4)}>
                    <div className="left">
<h5 className="icons">4</h5>
                        <span>Do you have a minimum order charge?</span>
                    </div>
                    <span className="symbol">{openIndex === 4 ? "−" : "+"}</span>
                </div>
                {openIndex === 4 && (
                    <div className="accordion-body">
<p style={{textAlign:"start"}}>We have a minimum charge of5asec per order.</p>
                    </div>
                )}
            </div>

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(5)}>
                    <div className="left">
                <h5 className="icons">5</h5>

                        <span>Are5asec detergents safe for children?</span>
                    </div>
                    <span className="symbol">{openIndex === 5 ? "−" : "+"}</span>
                </div>

                {openIndex === 5 && (
                    <div className="accordion-body">
                    <p  style={{textAlign:"start"}}>We use EU ECO LABEL certified natural detergents which are harm free to the children and pets.</p>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(6)}>
                    <div className="left">
<h5 className="icons">6</h5>                        <span>What payment option are available?</span>
                    </div>
                    <span className="symbol">{openIndex === 6 ? "−" : "+"}</span>
                </div>

                {openIndex === 6 && (
                    <div className="accordion-body">
                      <p style={{textAlign:"start"}}>You can pay using any one of the following options:  <br />
Online Credit or Debit Card - via5asec UAE AppWallet - via5asec UAE App  <br />
Card or Cash - at the store<br />
Card or Cash - on delivery. <br />
Payment Link</p>
                    </div>
                )}
            </div>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(7)}>
                    <div className="left">

<h5 className="icons">7
</h5>        
                <span>Do you do subscriptions for regular customers?</span>
                    </div>
                    <span className="symbol">{openIndex === 7 ? "−" : "+"}</span>
                </div>

                {openIndex === 7 && (
                    <div className="accordion-body">
                       
                       <p>
                        1 :We offer monthly plans for the following: <br />
1: Clean and Press for Shirts & Trousers  <br />
2: Clean and Press for Kandoras and Abayas  <br />
3 :Wash & Fold bags <br />
    <span></span> Learn more
                       </p>
                    </div>
                )}
            </div>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(8)}>
                    <div className="left">
<h5 className="icons">8</h5>
                        <span>Are5asec products environmentally friendly</span>
                    </div>
                    <span className="symbol">{openIndex === 8 ? "−" : "+"}</span>
                </div>
                {openIndex === 8 && (
                    <div className="accordion-body">
                       <p style={{textAlign:"start"}}>All our products and detergents are formulated to be aggressive against the dirt and gentle on the environment. Unlike most commercial laundries, our product range is phosphate and chlorine free.

</p>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(9)}>
                    <div className="left">

<h5 className="icons">9</h5>                        <span>What is5asec</span>
                    </div>
                    <span className="symbol">{openIndex === 9 ? "−" : "+"}</span>
                </div>
                {openIndex === 9 && (
                    <div className="accordion-body">
                    <p style={{textAlign:"start"}}>
                        A unique cleaning program designed by5asec especially for the most delicate fabrics. Maxima service is effective for the garments which are advised for hand wash only.
                    </p>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(9)}>
                    <div className="left">

<h5 className="iocns">10</h5>  
                      <span>Where are your stores located?</span>
                    </div>
                    <span className="symbol">{openIndex === 10 ? "−" : "+"}</span>
                </div>
                {openIndex === 10 && (
                    <div className="accordion-body">
                     
                     <p style={{textAlign:"start"}}>
                        Dubai Marina - Marina Gate, Dubai Marina, Opposite Spinneys <br />

DIFC - Level 1, Precinct Building 3, DIFC (Near Fitness First)<br />

Jumeirah - Sunset Mall, Ground Floor, Jumeirah 3, Near Kite Beach <br />

Port De La Mer - Unit No. R01, La Cote B3, Port de La Mer by Meraas, Dubai. <br />

Expo City Dubai - Expo City Dubai - Mobility District, VC 07 - Ground floor - Expo Rd - Dubai <br />
                     </p>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(11)}>
                    <div className="left">
<h5 className="iocns">11</h5>  

                        <span>Do you clean all types of shoes?</span>
                    </div>
                    <span className="symbol">{openIndex === 11 ? "−" : "+"}</span>
                </div>
                {openIndex === 11 && (
                    <div className="accordion-body">
                      <p>freash clean Shoe care offers full service cleaning and restoration for all types of shoes.</p>
                    </div>
                )}
            </div>



            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(11)}>
                    <div className="left">
<h5 className="iocns">12</h5>  
                        <span>Does laundry detergent kill germs?</span>
                    </div>
                    <span className="symbol">{openIndex === 11 ? "−" : "+"}</span>
                </div>
                {openIndex === 11 && (
                    <div className="accordion-body">
                    <p style={{textAlign:"start"}}>Our detergents and the cleaning process kills 99.99% of germs.

</p>
                    </div>
                )}
            </div>

     

     
     
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(13)}>
                    <div className="left">
<h5 className="ioncs"> 13</h5>
                        <span>How much are carpet cleaning services?</span>
                    </div>
                    <span className="symbol">{openIndex === 13 ? "−" : "+"}</span>
                </div>
                {openIndex === 13 && (
                    <div className="accordion-body">
                       <p style={{textAlign:"s"}}>Our pricing start from ê35/sqm depending on the material of the carpet.</p>
                    </div>
                )}
            </div>








            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(14)}>
                    <div className="left">

<h5 className="iocns">14</h5>                        <span>What is White Plus?</span>
                    </div>
                    <span className="symbol">{openIndex === 14 ? "−" : "+"}</span>
                </div>
                {openIndex === 14 && (
                    <div className="accordion-body">
                      <p style={{textAlign:"start"}}>Our White+ services use a specially designed chlorine-free formula to revive the colour in white fibres in your clothes.

</p>
                    </div>
                )}
            </div>


            
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(15)}>
                    <div className="left">
<h5 className="iocns">15</h5>    
                     <span>Do you provide laundry bag services?</span>
                    </div>
                    <span className="symbol">{openIndex === 15 ? "−" : "+"}</span>
                </div>
                {openIndex === 15 && (
                    <div className="accordion-body">
                      <p className="" style={{textAlign:"start"}}>
                        Yes, our Wash & Fold service is the perfect way to get your daily laundry done. We have monthly subscriptions available started from ê 77.00* per bag.
<br />
We also provide LinenCare service for your daily bed, bath and table linens


                      </p>
                    </div>
                )}
            </div>
                <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(16)}>
                    <div className="left">
<h5 className="iocns">16</h5>                          <span>Can I send delicate garments that require hand washing?</span>
                    </div>
                    <span className="symbol">{openIndex === 16 ? "−" : "+"}</span>
                </div>
                {openIndex === 16 && (
                    <div className="accordion-body">
                   <p style={{textAlign:"start"}}>Yes, our Maxima service is effective for the garments which are advised for hand wash only.</p>
                    </div>
                )}
            </div>









               <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(17)}>
                    <div className="left">
<h5 className="iocns">17</h5>                          <span>Do you offer laundry services charged per kilo?</span>
                    </div>
                    <span className="symbol">{openIndex === 17 ? "−" : "+"}</span>
                </div>
                {openIndex === 17 && (
                    <div className="accordion-body">
                      <p style={{textAlign:"start"}}>No, we charge per item for Clean and Press services and per bag for Wash & Fold and Linen Care services</p>
                    </div>
                )}
            </div>

                 <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(18)}>
                    <div className="left">
<h5 className="iocns">18</h5>                          <span>Where can I find your prices?</span>
                    </div>
                    <span className="symbol">{openIndex === 18 ? "−" : "+"}</span>
                </div>
                {openIndex === 18 && (
                    <div className="accordion-body">
                      <p style={{textAlign:"start"}}>Our latest pricelist is available here</p>
                    </div>
                )}
            </div>
        </div>
    );
}
