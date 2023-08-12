import { React } from "react";
import { Breadcrumb, Layout, Menu, Col, Row, theme } from "antd";
import { HomepageBannerPanel } from "./components/contents/banner-homepage.component";
import { HomepageAboutPanel } from "./components/contents/about-homepage.component";
import { HomepageProposalPanel } from "./components/contents/proposal-homepage.component";
import { HomepageSponsorsPanel } from "./components/contents/homepage-sponsors.component";
import { HomepageVenuePanel } from "./components/contents/homepage-venue.component";
import { HeaderMenu } from "./components/headers/header-menu.component";
import { HomepageSpeakersPanel } from "./components/contents/homepage-speakers.component";
import { HomepageSchedulePanel } from "./components/contents/homepage-schedule.component";

const { Header, Content, Footer } = Layout;

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header
                style={{
                    height: 100,
                    backgroundColor: "rgba(37, 34, 82, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <HeaderMenu />
            </Header>
            <Content>
                <div>
                    <HomepageBannerPanel />
                    <HomepageAboutPanel />
                    <HomepageProposalPanel />
                    <HomepageSponsorsPanel />
                    <HomepageSpeakersPanel />
                    <HomepageSchedulePanel />
                    <HomepageVenuePanel />
                </div>
            </Content>
            <Footer
                style={{
                    background: "black",
                    textAlign: "center",
                    color: "white",
                }}
            >
                This work and its contents is licensed under a{" "}
                <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                    Creative Commons Attribution-ShareAlike 4.0 International License
                </a>{" "}
                <br />
                Other works (software, source code, etc.) referenced in this website are under their own respective licenses.
            </Footer>
        </Layout>
    );
};
export default App;
