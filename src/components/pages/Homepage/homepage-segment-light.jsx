import React from "react";
import "./homepage.styles.css";
import { Image, Button } from "antd";
import SegmentDividerBottom from "../../../assets/bg-svg/segment-divider-bottom.svg";
import SegmentDividerTop from "../../../assets/bg-svg/segment-divider-top.svg";

export const HomepageSegmentLight = (props) => {
    const contents = props.contents;
    return (
        <section className="homepage-segment">
            {props.topDivider ? (
                <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerTop})` }} />
            ) : (
                <div></div>
            )}

            <div>
                {props.headerImage ? (
                    <div className="segment-header-image-container">
                        <Image className="segment-header-image" height={200} preview={false} src={props.headerImage}></Image>
                    </div>
                ) : (
                    <div></div>
                )}

                {contents.header ? <p className="segment-heading">{contents.header}</p> : <div></div>}

                {contents.contentText ? <p className="segment-content-text">{contents.contentText}</p> : <div></div>}
            </div>
            {contents.link ? (
                <div>
                    <a href={contents.link}>{contents.link}</a>
                </div>
            ) : (
                <div></div>
            )}
            {props.elements ? <div>{props.elements}</div> : <div></div>}
            {contents.buttonText ? (
                <div style={{ padding: 40 }}>
                    <Button shape="round" type="primary" size="large" className="segment-button">
                        {contents.buttonText}
                    </Button>
                </div>
            ) : (
                <div></div>
            )}
            <div className="segment-divider" style={{ marginBottom: 0, height: 100, backgroundImage: `url(${SegmentDividerBottom})` }} />
        </section>
    );
};

// style={{ backgroundImage: `url(${bgContourLight})` }}
// {props.elements ? <div style={{maxWidth:600, minWidth: 360}}>{props.elements}</div> : <div></div>}
