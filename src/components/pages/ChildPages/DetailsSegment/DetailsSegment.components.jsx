import React from "react";
import { Divider, Image } from "antd";
import "./DetailsSegment.styles.css";
import descriptionImage from '../../../../assets/bg-svg/section-icon-about-us.svg'
import waveBlueBottom from '../../../../assets/bg-svg/bg-footer-wave.svg'

export const DetailsSegment = (props) => {
    const contents = props.detailsContent;
    return (
        <div>
            <div className="description-section">
                <div className="description-image-container">
                    <Image height={160} preview={false} src={descriptionImage}></Image>
                </div>
                <p className="section-heading">{contents.contentTitle}</p>
                <p className="section-content-text">{contents.contentText}</p>
                <Image className="wave-bottom" preview={false} src={waveBlueBottom}></Image>
            </div>
        </div>
    );
};