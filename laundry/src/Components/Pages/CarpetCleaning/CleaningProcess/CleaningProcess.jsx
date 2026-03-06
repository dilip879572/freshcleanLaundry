import React from "react";
import "./CleaningProcess.css";
import { Search, SprayCan, Waves, Droplet, Fan } from "lucide-react";
const home1 = "/sabmenu/1718881711.png";
const home3 = "/finishing.jpg";
const steps = [
    {
        title: "Inspection",
        icon: <Search size={28} />
    },
    {
        title: "Pre-treatment",
        icon: <SprayCan size={28} />
    },
    {
        title: "Steam Extraction",
        icon: <Waves size={28} />
    },
    {
        title: "Spot Treatment",
        icon: <Droplet size={28} />
    },
    {
        title: "Grooming & Drying",
        icon: <Fan size={28} />
    }
];

export default function CleaningProcess() {
    return (
        <div className="process-container">
            <section className="process-section">
                <h2>Our Professional-Grade Cleaning Process Explained</h2>

                <div className="process-track">
                    {steps.map((step, index) => (
                        <div className="process-step" key={index}>
                            <div className="process-circle-wrap">
                                <div className="process-icon">
                                    {step.icon}
                                </div>
                            </div>
                            <p>{step.title}</p>
                        </div>
                    ))}
                </div>

                <p className="process-desc">
                    Our comprehensive five-step system combines cutting-edge technology with
                    proven techniques to deliver exceptional results. Each phase is
                    carefully designed to restore your carpets to like-new condition while
                    ensuring safe, thorough cleaning that protects your investment.
                </p>
            </section>
            <div className="row mt-4">
                <h2 style={{ color: "#071f70" }}>Specialized Treatments for Tough Stains and Orders</h2>

                <div className="col-sm-6 mt-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={home1} alt="" style={{ width: "250px",borderRadius:"10px" }} />
                        </div>
                        <div className="col-sm-6">
                            <h6 style={{ color: "#164887",fontSize:"17px" }}>Stubborn Stain Elimination</h6>
                            <p style={{ color: "#164887",textAlign:"start"  }}>Food stains, coffee, ink, grease—our
                                targeted enzyme treatments break down even the most stubborn stains
                                at the molecular level, restoring your
                                carpet's original beauty.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={home3} alt="" style={{ width: "250px",borderRadius:"10px" }} />
                        </div>
                        <div className="col-sm-6">
                            <h6 style={{ color: "#164887",fontSize:"17px" }}>Pet Odor Neutralization</h6>

                            <p style={{ color: "#164887",textAlign:"start" }}>Our specialized pet treatment
                                doesn't just mask odors—it eliminates urine crystals and bacteria eliminates urine crystals and bacteria
                                at the molecular level, restoring your
                                smelling fresh and clean.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
