import React from "react";
import { 
    HomeOutlined, 
    InfoCircleOutlined, 
    QuestionCircleOutlined, 
    AlignCenterOutlined,
    TeamOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    SnippetsOutlined
} from "@ant-design/icons";

const MenuItems = [
    {
        label: "Home",
        key: "/sotm-asia-2023",
        icon: <HomeOutlined />,
    },
    {
        label: "About",
        key: "/about",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "SoTM Asia",
                key: "/about/sotm-asia",
            },
            {
                label: "SoTM Asia History",
                key: "/about/sotm-asia-history",
            },
            {
                label: "Code of Conduct",
                key: "/about/code-of-conduct",
            },
            {
                label: "Committee",
                key: "/about/committee",
            },
        ],
    },
    {
        label: "Proposals",
        key: "/proposals",
        icon: <UnorderedListOutlined />,
        children: [
            {
                label: "Call for Proposals",
                key: "/proposals/call-for-proposals",
            },
            {
                label: "Submit Proposal"
                // (
                //     <a href="https://conference.foss4g.in.th/2023/submit/ynAMwv/info/" target="_blank" rel="noopener noreferrer">
                //       Submit Proposal
                //     </a>
                //   )
                  ,
                key: "/proposals/submit-proposal",
            },
        ],
    },
    {
        label: "Attending",
        key: "attending",
        icon: <TeamOutlined />,
        children: [
            {
                label: "Registration",
                key: "attending:1",
            },
            {
                label: "Travel Grant",
                key: "attending:2",
            },
            {
                label: "Studentship Grant",
                key: "attending:3",
            },
            {
                label: "Accomodation",
                key: "attending:4",
            },
            {
                label: "Attending Guidelines",
                key: "attending:5",
            },
            {
                label: "Visa Info",
                key: "attending:6",
            },
            {
                label: "Getting to Bangkok",
                key: "attending:7",
            },
            {
                label: "Venue",
                key: "attending:8",
            },
        ],
    },
    {
        label: "Schedule",
        key: "schedule",
        icon: <AlignCenterOutlined />,
        children: [
            {
                label: "Keynote",
                key: "schedule:1",
            },
            {
                label: "Presentations Schedule",
                key: "schedule:2",
            },
            {
                label: "Workshop Schedule",
                key: "schedule:3",
            },
            {
                label: "Laghtning Talks Schedule",
                key: "schedule:4",
            },
            {
                label: "Social Events",
                key: "schedule:5",
            },
            {
                label: "Other Events",
                key: "schedule:6",
            },
        ],
    },
    {
        label: "Sponsors",
        key: "sponsors",
        icon: <AppstoreOutlined />,
        children: [
            {
                label: "Call for Sponsors",
                key: "sponsors:1",
            },
            {
                label: "Sponsors and Partners",
                key: "sponsors:2",
            },
        ],
    },
    {
        label: "News",
        key: "news",
        icon: <SnippetsOutlined />,
        children: [
            {
                label: "News",
                key: "news:1",
            },
            {
                label: "Announcement",
                key: "news:2",
            },
            {
                label: "FAQs",
                key: "news:23",
            },
        ],
    },
];

export default MenuItems;
