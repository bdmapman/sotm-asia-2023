import React from "react";
import { Button } from "antd";
import "./content.styles.css";

import bgImgTopo from "../../assets/2023-bg-topo.png";

export const HomepageProposalPanel = () => {
    const onProposalBtnClick = () => {
        window.open("https://2023.foss4g.in.th/presentation/", "_blank", "noopener,noreferrer");
    };

    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundPosition: "center",
                backgroundImage: `url(${bgImgTopo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    top: "80px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    padding: 20,
                    // backgroundColor: 'lightcoral',
                }}
            >
                <p className="section-heading dark-section-text">Call for Proposals</p>
                <p className="section-content-text dark-section-text">
                    We are now accepting proposals for presentations (25 mins), workshops (2-4 hours), and lightning talks (5-10 mins) for
                    FOSS4G Thailand and State of the Map Asia 2023.If you have something to share in geospatial technology, cartography,
                    community building, or any other related field, we encourage you to submit your proposals and be a part of this
                    enriching event.
                </p>
                <Button shape="round" type="primary" size="large" className="section-button" onClick={onProposalBtnClick}>
                    Submit Your Proposal
                </Button>
                <p className="section-content-text dark-section-text">
                Should you have any questions or require further information <br/> 
                please contact us at stateofthemapasia@gmail.com
                </p>
            </div>
        </section>
    );
};
