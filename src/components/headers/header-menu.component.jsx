import React, { useState } from "react";
import { InfoCircleOutlined, QuestionCircleOutlined, AlignCenterOutlined } from "@ant-design/icons";
import { Menu, Layout, Col, Row } from "antd";
import logo from "../../assets/sotm-asia-2023-logo.png";

const items = [
    {
        label: "ABOUT",
        key: "about",
        icon: <InfoCircleOutlined />,
    },
    {
        label: "PROGRAMS",
        key: "programs",
        icon: <AlignCenterOutlined />,
    },
    {
        label: "FAQs",
        key: "faqs",
        icon: <QuestionCircleOutlined />,
    },
];
export const HeaderMenu = () => {
    const [current, setCurrent] = useState("mail");
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <Layout>
            <Row
                style={{
                    backgroundColor: "rgba(37, 34, 82, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Col
                    span={18}
                    push={6}
                    style={{
                        float: "right",
                    }}
                >
                    <Menu 
                        theme='dark'
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                        style={{
                            fontWeight: 500,
                            fontSize: 'large',
                            backgroundColor: "rgba(0,0,0,0)",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    />
                </Col>
                <Col
                    span={6}
                    pull={18}
                    style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img src={logo} alt="logo" height={100} style={{ marginLeft: 1 }} />
                </Col>
            </Row>
        </Layout>
    );
};
