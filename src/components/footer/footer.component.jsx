import React from "react";
import { Image } from "antd";
import "./footer.styles.css";
import waveBlueBottom from "../../assets/bg-svg/bg-footer-wave.svg";

export const FooterComponent = () => {
    return (
        <div>
            <div>
                <div>
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
