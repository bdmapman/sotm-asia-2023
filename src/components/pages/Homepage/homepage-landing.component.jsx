import React from "react";
import { Divider, Image } from "antd";
import "./homepage.styles.css";
import LandingImage from "../../../assets/2023-header-homepage.png";
import { CountdownTimer } from "../../contents/countdown/CountdownTimer";
import waveBlueBottom from "../../../assets/bg-svg/bg-footer-wave.svg";
import PageHeaderWave from "../../../assets/bg-svg/page-header-wave.svg";
import moment from "moment";
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled, GithubFilled } from "@ant-design/icons";

export const HomepageLanding = (props) => {
    const contents = props.contents;
    const programDate = moment("20231116, 10:00:00", "YYYYMMDD, hh:mm:ss").valueOf();

    const onFoss4gClick = () => {
        window.open("https://2023.foss4g.in.th/", "_blank", "noopener,noreferrer");
    };
    return (
        <div className="landing-image" style={{ backgroundImage: `url(${LandingImage})` }}>
            <div className="landing-overlay-gradient" />
            <div className="landing-header-container">
                <div className="landing-header">{contents.header}</div>
                <p className="landing-sub-header">
                    {contents.date}
                    <br />
                    {contents.venue}
                </p>
                <p className="landing-sub-header" style={{ fontSize: 20 }}>
                    {contents.coOrganiser}
                </p>
                <div className="landing-link">
                    <text className="landing-link-text">{contents.link}</text>
                </div>
                <div className="countdown-timer-container">
                    <CountdownTimer targetDate={programDate} style={{ maxWidth: 360 }} />
                </div>

                <p className="landing-sub-header" style={{ fontSize: 20 }}>
                    Find more on
                </p>
                <div className="social-icon-containrer">
                    <div className="social-icon" style={{ backgroundColor: "#4267B2" }}>
                        <FacebookFilled style={{ fontSize: "32px", color: "white" }} />
                    </div>
                    <div className="social-icon" style={{ backgroundColor: "#0A66C2" }}>
                        <LinkedinFilled style={{ fontSize: "32px", color: "white" }} />
                    </div>
                    <div className="social-icon" style={{ backgroundColor: "#00acee" }}>
                        <TwitterCircleFilled style={{ fontSize: "32px", color: "white" }} />
                    </div>
                    <div className="social-icon" style={{ backgroundColor: "#171515" }}>
                        <GithubFilled style={{ fontSize: "32px", color: "white" }} />
                    </div>
                </div>
            </div>
            <div className="landing-header-wave" style={{ backgroundImage: `url(${PageHeaderWave})` }}></div>
        </div>
    );
};
