import { React } from "react";
import { Breadcrumb, Layout, Menu, Col, Row, theme } from "antd";
import './App.css'
import { HomepageBannerPanel } from "./components/contents/homepage-banner.component";
import { HomepageAboutPanel } from "./components/contents/homepage-about.component";
import { HomepageProposalPanel } from "./components/contents/homepage-proposal.component";
import { HomepageSponsorsPanel } from "./components/contents/homepage-sponsors.component";
import { HomepageVenuePanel } from "./components/contents/homepage-venue.component";
import { HomepageSpeakersPanel } from "./components/contents/homepage-speakers.component";
import { HomepageSchedulePanel } from "./components/contents/homepage-schedule.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

const { Header, Content, Footer } = Layout;

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header className="header-custom">
                <HeaderComponent />
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
            <Footer className="footer-custom">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};
export default App;
