import React, { useState } from "react";
import "./ServiceAccordion.css";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GiSchoolBag, GiRunningShoe } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import "./ServiceAccordion.css";
export default function ServiceAccordion() {
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
                        <MdOutlineLocalLaundryService className="icon"  style={{color:"#6b005f"}}/>
                        <span>Wash & Fold</span>
                    </div>
                    <span className="symbol">{openIndex === 0 ? "−" : "+"}</span>
                </div>

                {openIndex === 0 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead className="">
                                <tr>
                                    <th style={{ color: "" }}>Wash & Fold</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 Bag</td>
                                    <td>77.00</td>
                                </tr>
                                <tr>
                                    <td>3 Bags (Monthly Plan - ₹67 per bag)</td>
                                    <td>201.00</td>
                                </tr>
                                <tr>
                                    <td>5 Bags (Monthly Plan - ₹60.02 per bag)</td>
                                    <td>300.10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* BAGS & SHOE CARE */}
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(1)}>
                    <div className="left">
                        <GiRunningShoe className="icon" style={{color:"#6b005f"}}/>
                        <span>Bags & Shoe Care</span>
                    </div>
                    <span className="symbol">{openIndex === 1 ? "−" : "+"}</span>
                </div>

                {openIndex === 1 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shoe Cleaning</td>
                                    <td>150.00</td>
                                </tr>

                                <tr>
                                    <td>Bag Cleaning</td>
                                    <td>200.00</td>
                                </tr>

                                <tr>
                                    <td>Belt</td>
                                    <td>80.00</td>
                                </tr>

                                <tr>
                                    <td>Wallet</td>
                                    <td>100.00</td>
                                </tr>

                                <tr>
                                    <td>Backpack</td>
                                    <td>100.00</td>
                                </tr>

                                <tr>
                                    <td>Backpack (Branded)</td>
                                    <td>350.00</td>
                                </tr>

                                <tr>
                                    <td>Clutch / Purse</td>
                                    <td>250.00</td>
                                </tr>

                                <tr>
                                    <td>Sling Bag</td>
                                    <td>315.00</td>
                                </tr>

                                <tr>
                                    <td>Standard Size Handbag</td>
                                    <td>325.00</td>
                                </tr>

                                <tr>
                                    <td>Designer Standard Size Handbag</td>
                                    <td>500.00</td>
                                </tr>

                                <tr>
                                    <td>Oversized Handbag</td>
                                    <td>500.00</td>
                                </tr>

                                <tr>
                                    <td>Designer Oversized Handbag</td>
                                    <td>700.00</td>
                                </tr>

                                <tr>
                                    <td>Luggage Bag (Hand Case) - Branded</td>
                                    <td>350.00</td>
                                </tr>

                                <tr>
                                    <td>Luggage Bag (Fabric) - Non-Branded</td>
                                    <td>250.00</td>
                                </tr>

                                <tr>
                                    <td>Duffle Bag</td>
                                    <td>250.00</td>
                                </tr>

                                <tr>
                                    <td>Duffle Bag (Branded)</td>
                                    <td>350.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            {/* TOPS */}
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(2)}>
                    <div className="left">
                        <FaTshirt className="icon" style={{color:"#6b005f"}}/>
                        <span>Tops</span>
                    </div>
                    <span className="symbol">{openIndex === 2 ? "−" : "+"}</span>
                </div>

                {openIndex === 2 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Tops</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>

                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>

                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>

                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>

                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>

                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>

                                <tr>
                                    <td>Sweater Hoodie</td>
                                    <td>29.50</td>
                                    <td>39.00</td>
                                    <td>55.00</td>
                                </tr>

                                <tr>
                                    <td>Sports Hoodie</td>
                                    <td>19.50</td>
                                    <td>26.00</td>
                                    <td>36.50</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>






            {/* Dresses & Jumpsuits */}

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(4)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/bottoms.svg" alt="" style={{ height: "20px" }} />
                        <span>Bottoms</span>
                    </div>
                    <span className="symbol">{openIndex === 4 ? "−" : "+"}</span>
                </div>
                {openIndex === 4 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Bottoms</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(5)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/dresses.svg" alt="" style={{ height: "20px" }} />
                        <span>Dresses & Jumpsuits</span>
                    </div>
                    <span className="symbol">{openIndex === 5 ? "−" : "+"}</span>
                </div>

                {openIndex === 5 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th> Dresses & Jumpsuits</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(6)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/traditional-1.svg" alt="" style={{ height: "20px" }} />
                        <span>Traditional Items</span>
                    </div>
                    <span className="symbol">{openIndex === 6 ? "−" : "+"}</span>
                </div>

                {openIndex === 6 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th> Dresses & Jumpsuits</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(7)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/underware-1.svg" alt="" style={{ height: "20px" }} />
                        <span>Night & Underwear</span>
                    </div>
                    <span className="symbol">{openIndex === 7 ? "−" : "+"}</span>
                </div>

                {openIndex === 7 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Night & Underwear</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(8)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/underware-1.svg" alt="" style={{ height: "20px" }} />
                        <span>Kids & Babies (0 to 5 years of Age)</span>
                    </div>
                    <span className="symbol">{openIndex === 8 ? "−" : "+"}</span>
                </div>
                {openIndex === 8 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Kids & Babies</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(9)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/home.svg" alt="" style={{ height: "20px" }} />
                        <span>Home</span>
                    </div>
                    <span className="symbol">{openIndex === 9 ? "−" : "+"}</span>
                </div>
                {openIndex === 9 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Home</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(9)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/home.svg" alt="" style={{ height: "20px" }} />
                        <span>Linen Care</span>
                    </div>
                    <span className="symbol">{openIndex === 9 ? "−" : "+"}</span>
                </div>
                {openIndex === 9 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Linen Care</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(10)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} />
                        <span>Accessories</span>
                    </div>
                    <span className="symbol">{openIndex === 10 ? "−" : "+"}</span>
                </div>
                {openIndex === 10 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Accessories</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>



            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(11)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} />
                        <span>Plushy Care</span>
                    </div>
                    <span className="symbol">{openIndex === 11 ? "−" : "+"}</span>
                </div>
                {openIndex === 11 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Plushy Care</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(12)}>
                    <div className="left">
                        <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} />
                        <span>Leather Care</span>
                    </div>
                    <span className="symbol">{openIndex === 12 ? "−" : "+"}</span>
                </div>
                {openIndex === 12 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Leather Care</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">
                                <tr>
                                    <td>T-Shirt</td>
                                    <td>13.50</td>
                                    <td>18.00</td>
                                    <td>27.00</td>
                                </tr>

                                <tr>
                                    <td>T-Shirt (Folded)</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.00</td>
                                </tr>

                                <tr>
                                    <td>Top</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>30.00</td>
                                </tr>

                                <tr>
                                    <td>Top (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>31.00</td>
                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>
                                    <td>19.00</td>
                                    <td>28.50</td>
                                </tr>
                                <tr>
                                    <td>Polo Shirt (Folded)</td>
                                    <td>15.50</td>
                                    <td>20.00</td>
                                    <td>29.50</td>
                                </tr>
                                <tr>
                                    <td>Shirt</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Shirt (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Blouse</td>
                                    <td>15.00</td>
                                    <td>20.00</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Blouse (Folded)</td>
                                    <td>16.00</td>
                                    <td>21.00</td>
                                    <td>31.50</td>
                                </tr>
                                <tr>
                                    <td>Complex Shirt / Blouse</td>
                                    <td>22.50</td>
                                    <td>30.00</td>
                                    <td>45.00</td>
                                </tr>
                                <tr>
                                    <td>Sweater / Cardigan</td>
                                    <td>28.00</td>
                                    <td>37.00</td>
                                    <td>55.50</td>
                                </tr>
                                <tr>
                                    <td>Pullover</td>
                                    <td>34.00</td>
                                    <td>45.00</td>
                                    <td>63.00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <h2 className="monthaly">Monthly Plans
            </h2>

            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(13)}>
                    <div className="left">
                        {/* <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} /> */}
                        <span>Wash & Fold Monthly Plans</span>
                    </div>
                    <span className="symbol">{openIndex === 13 ? "−" : "+"}</span>
                </div>
                {openIndex === 13 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>


                                </tr>
                            </thead>
                            <tbody className="symbol">


                                <tr>
                                    <td>1 Bag per month</td>
                                    <td>14.50</td>

                                </tr>

                                <tr>
                                    <td>3 Bags (Monthly Plan - ê67 per bag)	</td>
                                    <td>14.50</td>

                                </tr>

                                <tr>
                                    <td>5 Bags (Monthly Plan - ê60.02 per bag)	</td>
                                    <td>15.50</td>

                                </tr>

                                <tr>
                                    <td>Polo Shirt</td>
                                    <td>14.50</td>

                                </tr>




                            </tbody>

                        </table>
                    </div>
                )}
            </div>








            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(14)}>
                    <div className="left">
                        {/* <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} /> */}
                        <span>Shirts & Trousers Monthly Plans</span>
                    </div>
                    <span className="symbol">{openIndex === 14 ? "−" : "+"}</span>
                </div>
                {openIndex === 14 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>

                                <tr>
                                    <th>Shirts & Trousers</th>
                                    <th>Press Only</th>
                                    <th>Clean & Press</th>
                                    <th>Maxima</th>
                                </tr>
                            </thead>
                            <tbody className="symbol">


                                <tr>
                                    <td>20 Shirts / Polo Shirts</td>
                                    <td> - </td>
                                    <td>14.50</td>
                                    <td> - </td>

                                </tr>

                                <tr>
                                    <td>15 Shirts / Polo Shirts + 5 Trousers / Jeans	</td>
                                    <td> - </td>
                                    <td>14.50</td>
                                    <td> - </td>

                                </tr>

                                <tr>
                                    <td>10 Shirts/Polo Shirts + 10 Trousers / Jeans	</td>
                                    <td> - </td>
                                    <td>14.50</td>
                                    <td> - </td>

                                </tr>

                                <tr>
                                    <td>50 Shirts/Polo Shirts - Valid for 6 months	</td>
                                    <td> - </td>
                                    <td>14.50</td>
                                    <td> - </td>

                                </tr>


                                <tr>
                                    <td>5 Shirts a Week		</td>
                                    <td> - </td>
                                    <td>14.50</td>
                                    <td> - </td>

                                </tr>



                            </tbody>

                        </table>
                    </div>
                )}
            </div>


            <h2 className="monthaly">Additional Services
            </h2>
            <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(15)}>
                    <div className="left">
                        {/* <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} /> */}
                        <span>Beauty Treatments and Exclusives</span>
                    </div>
                    <span className="symbol">{openIndex === 15 ? "−" : "+"}</span>
                </div>
                {openIndex === 15 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>

                                <tr>


                                </tr>
                            </thead>
                            <tbody className="symbol">


                                <tr>
                                    <td>Finishing</td>
                                    <td> additional 2.00 per item
                                    </td>


                                </tr>

                                <tr>
                                    <td>White +	</td>
                                    <td>additional 5.00 per item

                                    </td>

                                </tr>

                                <tr>
                                    <td>Stain Prevention	</td>
                                    <td>additional 5.00 per item

                                    </td>

                                </tr>




                            </tbody>

                        </table>
                    </div>
                )}
            </div>
                <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(16)}>
                    <div className="left">
                        {/* <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} /> */}
                        <span>Exclusive Gown Preservation with J'aime ma robe'</span>
                    </div>
                    <span className="symbol">{openIndex === 16 ? "−" : "+"}</span>
                </div>
                {openIndex === 16 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>

                                <tr>


                                </tr>
                            </thead>
                            <tbody className="symbol">


                                <tr>
                                    <td>Cleaning and Preservation with Couture Coffret	</td>
                                    <td> 1,620.00

                                    </td>


                                </tr>

                                <tr>
                                    <td>Cleaning and Preservation with Instants Précieux Coffret		</td>
                                    <td> 1,486.00
                                    </td>
                                </tr>

                                 <tr>
                                    <td>Cleaning and Preservation with Elégance Coffret			</td>
                                    <td> 1,486.00
                                    </td>
                                </tr>

                                <tr>
                                    <td>Elégance Coffret (Box only)			</td>
                                    <td>1,167.00



                                    </td>

                                </tr>

                                <tr>
                                    <td>Cleaning and Preservation with Les Essentiels Coffret		</td>
                                    <td>524.00



                                    </td>

                                </tr>

                                <tr>
                                    <td>Preservation Top-Up for Elégance Coffret			</td>
                                    <td>620.00


                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>









               <div className="accordion-card">
                <div className="accordion-header" onClick={() => toggle(17)}>
                    <div className="left">
                        {/* <img src="https://5asec.ae/wp-content/uploads/2020/05/accessories-01.svg" alt="" style={{ height: "20px" }} /> */}
                        <span>Re-use & Re-cycle Initiative</span>
                    </div>
                    <span className="symbol">{openIndex === 17 ? "−" : "+"}</span>
                </div>
                {openIndex === 17 && (
                    <div className="accordion-body">
                        <table class="table table-bordered">
                            <thead>

                                <tr>


                                </tr>
                            </thead>
                            <tbody className="symbol">


                                <tr>
                                    <td>Cleaning and Preservation with Couture Coffret	</td>
                                    <td> 1,620.00

                                    </td>


                                </tr>

                                <tr>
                                    <td>Cleaning and Preservation with Instants Précieux Coffret		</td>
                                    <td> 1,486.00
                                    </td>
                                </tr>

                                 <tr>
                                    <td>Cleaning and Preservation with Elégance Coffret			</td>
                                    <td> 1,486.00
                                    </td>
                                </tr>

                                <tr>
                                    <td>Elégance Coffret (Box only)			</td>
                                    <td>1,167.00



                                    </td>

                                </tr>

                                <tr>
                                    <td>Cleaning and Preservation with Les Essentiels Coffret		</td>
                                    <td>524.00



                                    </td>

                                </tr>

                                <tr>
                                    <td>Preservation Top-Up for Elégance Coffret			</td>
                                    <td>620.00


                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
