import React from "react";
import { Divider, Image, Row } from "antd";
import "./footer.styles.css";
import waveBlueBottom from "../../assets/bg-svg/bg-footer-wave.svg";

export const FooterComponent = () => {
    return (
        <div className="footer-container">
            <div style={{ display: "flex", flexDirection: Row, width: "60vw" }}>
                <div style={{ width: "50%" }}>
                    <p className="footer-segment-header">Program Summary</p>
                    <p className="footer-segment-text">
                        <span style={{ fontSize: 8, paddingRight: 10 }}>
                            <i className="fa-regular fa-calendar-days"></i>
                        </span>
                        16-18 November, 2023
                    </p>
                    <p className="footer-segment-text">
                        <span style={{ fontSize: 8, paddingRight: 10, color: "#b7b7b7" }}>
                            <i className="fa-solid fa-location-dot"></i>
                        </span>
                        Srinakharinwirot University, 114 Soi Sukhumvit 23,
                        <br />
                        Khlong Toei Nuea, Watthana, Bangkok 10110
                    </p>
                    <p className="footer-segment-text">
                        <span style={{ fontSize: 8, paddingRight: 10 }}>
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        Call or Whatsapp us
                    </p>
                </div>
                <div style={{ width: "50%" }}>
                    <p className="footer-segment-header" style={{ textAlign: "right" }}>
                        Social Connection
                    </p>
                    <p className="footer-segment-text" style={{ textAlign: "right" }}>
                        Don't miss any updates, join our Social handles
                    </p>

                    <div className="social-icon-containrer" style={{ justifyContent: "flex-end" }}>
                        <div className="footer-social-icon" style={{ backgroundColor: "#4267B2" }}>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="footer-social-icon" style={{ backgroundColor: "#0A66C2" }}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="footer-social-icon" style={{ backgroundColor: "#00acee" }}>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="footer-social-icon" style={{ backgroundColor: "#ffffff" }}>
                            <i className="fa-brands fa-github" style={{ color: "#171515",}}></i>
                        </div>
                    </div>
                </div>
            </div>

            <Divider style={{ minWidth: "60vw", width: "60vw", backgroundColor: "#595959" }} />

            <div>
                <ul class="horizontal-list">
                    <li>
                        <a>Credits</a>
                    </li>
                    <li>
                        <a>Guidelines</a>
                    </li>
                    <li>
                        <a>Committee</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>

            {/* <Divider style={{ minWidth: "60vw", width: "60vw", backgroundColor: "#595959" }} /> */}

            <div>
                <div className="disclaimer-section">
                    This work and its contents is licensed under a{" "}
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                        Creative Commons Attribution-ShareAlike 4.0 International License
                    </a>{" "}
                    <br />
                    Other works (software, source code, etc.) referenced in this website are under their own respective licenses.
                    {/* <p><a href="https://www.freepik.com/free-vector/bangkok-city-detailed-skyline-vector-illustration-thailand_23144328.htm#query=bangkok%20skyscraper&position=0&from_view=search&track=ais">Image by Sky and Glass</a> on Freepik</p> */}
                </div>
            </div>
        </div>
    );
};
