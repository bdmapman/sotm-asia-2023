import React from "react";
import { InfoCircleOutlined, QuestionCircleOutlined, AlignCenterOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

const MenuItems = [
    {
        label: "About",
        key: "about",
        icon: <InfoCircleOutlined />,
        children: [
            {
                label: "SoTM Asia",
                key: "about:1",
            },
            {
                label: "SoTM Asia History",
                key: "about:2",
            },
            {
                label: "Code of Conduct",
                key: "about:3",
            },
            {
                label: "Committee",
                key: "about:4",
            },
        ],
    },
    {
        label: "Proposals",
        key: "proposals",
        icon: <AlignCenterOutlined />,
        children: [
            {
                label: "Presentation",
                key: "proposals:1",
            },
            {
                label: "Workshop",
                key: "proposals:2",
            },
            {
                label: "Lightning",
                key: "proposals:3",
            },
        ],
    },
    {
        label: "Attending",
        key: "attending",
        icon: <QuestionCircleOutlined />,
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
        icon: <QuestionCircleOutlined />,
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
        icon: <AlignCenterOutlined />,
        children: [
            {
                label: "News",
                key: "news:1",
            },
            {
                label: "Announcement",
                key: "news:2",
            },
        ],
    },
];

export default MenuItems;
