import { Input } from '@mui/material'
import React from 'react'
import "./Home.css"
import myLogo from './images/sec1.svg'
import sec2Logo from "./images/sec2.svg"
import sec2second from "./images/sec2second.svg"
import sec2Third from "./images/sec2third.svg"
import sec3First from "./images/sec3first.svg"
import sec3Second from "./images/sec3second.svg"
import sec3Third from "./images/sec3third.svg"
import sec4First from "./images/sec4first.svg"
import sec4Second from "./images/sec4second.svg"
import sec4Fourth from "./images/sec4fourth.svg"
import sec4Fifth from "./images/sec4fifth.svg"
import sec4Sixth from "./images/sec4sixth.svg"
import sec6First from "./images/sec6first.svg"
import sec5Third from "./images/sec5third.svg"
import sec5Fourth from "./images/sec5fourth.svg"
import sec5Fifth from "./images/sec5fifth.svg"
import sec5Second from "./images/sec5second.svg"



const Home = () => {
    return (
        <>
            <div className='hero-section'>
                <div className='hero-section_leftside'>
                    <h1 style={{ color: "#1D4645", fontSize: 60 }}>Play Online Quiz &
                        Win Cash Daily!</h1>
                    <p style={{ marginTop: -20, marginLeft: 30 }}>Win up to 1000৳ monthly from QuizBaj.</p>
                    <div style={{ display: "flex", marginTop: 30 }}>
                        <Input style={{ marginLeft: 30 }} size="md" placeholder="Medium" />
                        <button className='hero-section_btn' style={{ marginLeft: 30 }}>Register Now</button>
                    </div>
                    <p style={{ marginTop: 30, fontsize: 35, fontWeight: 600, marginLeft: 30 }}>NUMBER OF ACTIVE USERS RIGHT NOW</p>
                    <span style={{ color: "#1D4645", fontWeight: 800, fontSize: 30, marginLeft: 110 }}>20,000+</span>
                </div>
                <div className='hero-section_rightside'>
                    <img src={myLogo} alt="img" />

                </div>
            </div>
            <div className='second-section'>
                <h1 style={{ paddingTop: 70, color: 'white', marginLeft: 100 }}>How To Play</h1>
                <div style={{ marginLeft: 100, display: "flex", justifyContent: "space-around", width: "90%" }}>
                    <div className='sec2-firstcard' style={{ backgroundColor: "white", width: 380, marginBottom: -40, marginTop: 60, border: "1px solid #F1D7C8" }}>
                        <img src={sec2Logo} alt="firstlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 1</h1>
                        <p style={{ marginLeft: 20 }}>Enter the Phone Number and Click Register</p>
                    </div>
                    <div style={{ backgroundColor: "white", width: 380, marginTop: 30, border: "1px solid #F1D7C8" }}>
                        <img src={sec2second} alt="secondlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 2</h1>
                        <p style={{ marginLeft: 20 }}>Enter the Verification Code and click Verify</p>
                    </div>
                    <div style={{ backgroundColor: "white", width: 380, marginTop: 1, border: "1px solid #F1D7C8" }}>
                        <img src={sec2Third} alt="thirdlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 3</h1>
                        <p style={{ marginLeft: 20 }}>Enter your Info and click Play Quiz .</p>
                    </div>
                </div>
            </div>
            <div className='third-section'>
                <div style={{ marginLeft: 100, display: "flex", justifyContent: "space-around", width: "90%" }}>
                    <div style={{ backgroundColor: "white", width: 380, marginTop: 60, border: "1px solid #F1D7C8" }}>
                        <img src={sec3First} alt="firstlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 4</h1>
                        <p style={{ marginLeft: 20 }}>Click on the subject</p>
                    </div>
                    <div style={{ backgroundColor: "white", width: 380, marginTop: 30, border: "1px solid #F1D7C8" }}>
                        <img src={sec3Second} alt="secondlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 5</h1>
                        <p style={{ marginLeft: 20 }}>A question will have four options</p>
                    </div>
                    <div style={{ backgroundColor: "white", width: 380, marginTop: 1, border: "1px solid #F1D7C8" }}>
                        <img src={sec3Third} alt="thirdlogo" style={{ marginTop: 15, marginLeft: 15 }} />
                        <h1 style={{ marginLeft: 30 }}>Step 6</h1>
                        <p style={{ marginLeft: 20 }}>Click right Option.</p>
                    </div>
                </div>
            </div>
            <div className='fourth-section'>
                <div className='fourth-section_top'>
                    <h1 style={{ marginLeft: 50, color: "#1D4645", width: 250 }}>Lets Sharp Your Preparation</h1>
                    <button>EXPLORE ALL</button>
                </div>
                <p style={{ marginLeft: 200 }}>LET'S START!</p>
                <div className='fourth-section_cards1' style={{ display: "flex", marginLeft: 50 }}>
                    <div style={{ backgroundColor: "#102F2E", width: 550 }}>
                        <h1 style={{ color: "white" }}>BCS Model Test</h1>
                        <p style={{ color: "white", width: 300, marginLeft: 20 }}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.</p>
                    </div>
                    <div style={{ width: 350 }}>
                        <img src={sec4First} alt="img1" />
                    </div>
                    <div style={{ backgroundColor: "#FFF2E6", marginLeft: 50, width: 400 }}>
                        <img src={sec4Second} alt="img2" style={{ paddingLeft: 130, paddingTop: 30 }} />
                        <h1>Primary Exam</h1>
                    </div>
                </div>
                <div className='fourth-section_cards2' style={{ display: "flex", marginLeft: 50, marginTop: 20, justifyContent: "space-between" }}>
                    <div style={{ backgroundColor: "#102F2E", width: 400 }}>
                        <img src={sec4Fourth} alt="logo4" style={{ paddingLeft: 130, paddingTop: 30 }} />
                        <h1 style={{ color: 'white' }}>Bank Exam</h1>
                    </div>
                    <div style={{ backgroundColor: "#FFF2E6", width: 400 }}>
                        <img src={sec4Fifth} alt="logo5" style={{ paddingLeft: 130, paddingTop: 30 }} />
                        <h1 style={{ color: '#1D4645' }}>NSI Exam</h1>
                    </div>
                    <div style={{ backgroundColor: "#102F2E", marginRight: 70, width: 400 }}>
                        <img src={sec4Sixth} alt="logo6" style={{ paddingLeft: 130, paddingTop: 30 }} />
                        <h1 style={{ color: 'white' }}>Railway Exam</h1>
                    </div>
                </div>
            </div>
            <div className='fifth-section'>
                <div className='fifth-section_top'>
                    <h1 style={{ marginLeft: 50, color: "#1D4645", width: 250 }}>Explore Our Quiz Categories</h1>
                    <button>EXPLORE ALL</button>
                </div>
                <div className='fifth-section_cards1' style={{ display: "flex" }}>
                    <div style={{ backgroundColor: "#FFF2E6", width: 300, marginLeft: 50 }}>
                        <img src={sec6First} alt="logo" style={{ paddingTop: 20, paddingLeft: 20 }} />
                        <h1 style={{ paddingTop: 20, paddingLeft: 20 }}>Math</h1>
                        <p style={{ color: "#333333", paddingLeft: 10, paddingBottom: 30 }}>Sky was cloudless and of a deep dark blue spectacle before us was indeed </p>
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <div style={{ backgroundColor: "#FFF2E6", width: 300, marginLeft: 50 }}>
                            <img src={sec5Second} alt="logo" style={{ paddingTop: 20, paddingLeft: 20 }} />
                            <h1 style={{ paddingTop: 20, paddingLeft: 20 }}>English</h1>
                            <p style={{ color: "#333333", paddingLeft: 10, paddingBottom: 30 }}>Sky was cloudless and of a deep dark blue spectacle before us was indeed </p>
                        </div>
                    </div>
                </div>
                <div className='fifth-section_cards2' style={{ display: "flex" }}>
                    <div style={{ width: 190, marginLeft: 230, marginTop: 20 }}>
                        <img src={sec5Third} alt="logo" />
                        <h1>Science</h1>
                        <p>Unorthographic life One day however a small line of blind text.</p>
                    </div>
                    <div style={{ width: 220, marginLeft: 80, marginTop: 50, backgroundColor: "#FFF2E6" }}>
                        <img src={sec5Fourth} alt="logo" style={{ paddingTop: 20 }} />
                        <h1 style={{ paddingLeft: 20 }}>Bangla</h1>
                        <p style={{ paddingLeft: 10 }}>Unorthographic life One day however a small line of blind text.</p>
                    </div>
                    <div style={{ width: 310, marginLeft: 80, marginTop: 50 }}>
                        <img src={sec5Fifth} alt="logo" style={{ paddingTop: 20 }} />
                        <h1 style={{ paddingLeft: 20 }}>General Knowledge</h1>
                        <p style={{ paddingLeft: 10, paddingBottom: 20 }}>Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home