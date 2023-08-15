import React from "react";
import "./homepage.styles.css";
import { Image, Button } from "antd";
import bgContourLight from "../../../assets/2023-bg-topo.png";
import SegmentDivider from "../../../assets/bg-svg/segment-divider-top.svg";

export const HomepageSegmentDark = (props) => {
    const contents = props.contents;
    return (
        <section className="homepage-segment homepage-segment-dark">
            <div>
                {props.headerImage ? (
                    <div className="segment-header-image-container">
                        <Image className="segment-header-image-dark-theme" height={200} preview={false} src={props.headerImage}></Image>
                    </div>
                ) : (
                    <div></div>
                )}

                {contents.header ? <p className="segment-heading segment-heading-dark-theme">{contents.header}</p> : <div></div>}

                {contents.contentText ? (
                    <p className="segment-content-text segment-content-text-dark-theme">{contents.contentText}</p>
                ) : (
                    <div></div>
                )}
            </div>
            {contents.link ? (
                <div className="link-text">
                    <a href={contents.link}>{contents.link}</a>
                </div>
            ) : (
                <div></div>
            )}
            {props.elements ? <div>{props.elements}</div> : <div></div>}
            {contents.buttonText ? (
                <div style={{padding: 40}}>
                    <Button shape="round" type="primary" size="large" className="segment-button">
                        {contents.buttonText}
                    </Button>
                </div>
            ) : (
                <div></div>
            )}
        </section>
    );
};

// style={{ backgroundImage: `url(${bgContourLight})` }}
<a href="stateofthemapasia@gmail.com">stateofthemapasia@gmail.com</a>;
