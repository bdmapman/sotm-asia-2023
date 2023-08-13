import React from "react";
import { Layout, theme } from "antd";
import './App.css'
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from "./components/contents/content.component";

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
                <ContentComponent />
            </Content>
            <Footer className="footer-custom">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};
export default App;
