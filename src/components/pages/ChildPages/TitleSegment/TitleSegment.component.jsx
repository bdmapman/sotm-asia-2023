import React from "react";
import { Divider, Image } from "antd";
import "./TitleSegment.styles.css";
import TitleImage from "../../../../assets/2023-header-pages.jpg";
import waveBlueBottom from '../../../../assets/bg-svg/bg-footer-wave.svg'
import PageHeaderWave from '../../../../assets/bg-svg/page-header-wave.svg'

export const TitleSegment = (props) => {
    const contents = props.titleContents;
    return (
        <div>
            <div className="title-segment">
                <Image height={"400px"} preview={false} src={TitleImage} />
                <div className="image-overlay-gradient"></div>
                {/* <Image className="wave-bottom" preview={false} src={waveBlueBottom}></Image> */}
                <div className="title-header-container">
                    <div className="title-header">{contents.header}</div>
                    <div className="title-sub-header">{contents.subHeader}</div>
                </div>
                <Image className="header-wave" preview={false} src={PageHeaderWave}></Image>
            </div>
        </div>
    );
};
