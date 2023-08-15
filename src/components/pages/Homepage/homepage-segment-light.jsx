import React from "react";
import "./homepage.styles.css";
import { Image, Button } from "antd";

export const HomepageSegmentLight = (props) => {
    const contents = props.contents;
    return (
        <section className="homepage-segment">
            <div>
                {props.headerImage ? (
                    <div className="segment-header-image-container">
                        <Image className="segment-header-image" height={200} preview={false} src={props.headerImage}></Image>
                    </div>
                ) : (
                    <div></div>
                )}

                {contents.header ? (
                    <p className="segment-heading">{contents.header}</p>
                ) : (
                    <div></div>
                )}

                {contents.contentText ? (
                    <p className="segment-content-text">{contents.contentText}</p>
                ) : (
                    <div></div>
                )}
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
                <Button shape="round" type="primary" size="large" className="segment-button">
                    {contents.buttonText}
                </Button>
            ) : (
                <div></div>
            )}
        </section>
    );
};

// style={{ backgroundImage: `url(${bgContourLight})` }}
// {props.elements ? <div style={{maxWidth:600, minWidth: 360}}>{props.elements}</div> : <div></div>}