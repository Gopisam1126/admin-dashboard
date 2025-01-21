import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RocketIcon from '@mui/icons-material/Rocket';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export const sideBarItems = [
    {
        icon: React.createElement(ShoppingCartIcon),
        item: "Overview",
        path: "/"
    },
    {
        icon: React.createElement(RocketIcon),
        item: "Projects",
        path: "/projects"
    },
    {
        icon: React.createElement(CampaignIcon),
        item: "Marketing",
        path: "/marketing"
    },
    {
        icon: React.createElement(AnalyticsIcon),
        item: "Statisics",
        path: "/statistics"
    },
    {
        icon: React.createElement(TrendingUpIcon),
        item: "Sales",
        path: "/sales"
    },
    {
        icon: React.createElement(WarningIcon),
        item: "Issues",
        path: "/issues"
    },
    {
        icon: React.createElement(AccountCircleIcon),
        item: "Users",
        path: "/users"
    },
    {
        icon: React.createElement(InventoryIcon),
        item: "Inventory",
        path: "/inventory"
    },
    {
        icon: React.createElement(FeedbackIcon),
        item: "Feedbacks",
        path: "/feedback"
    },
    {
        icon: React.createElement(PersonIcon),
        item: "Staffs",
        path: "/staffs"
    },
    {
        icon: React.createElement(ElectricBoltIcon),
        item: "Perfomance",
        path: "/perfomance"
    },
    {
        icon: React.createElement(SettingsIcon),
        item: "Settings",
        path: "/settings"
    },
];
