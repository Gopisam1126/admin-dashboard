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
        path: "/ecommerce"
    },
    {
        icon: React.createElement(RocketIcon),
        item: "Projects"
    },
    {
        icon: React.createElement(CampaignIcon),
        item: "Marketing"
    },
    {
        icon: React.createElement(AnalyticsIcon),
        item: "Statisics"
    },
    {
        icon: React.createElement(TrendingUpIcon),
        item: "Sales"
    },
    {
        icon: React.createElement(WarningIcon),
        item: "Issues"
    },
    {
        icon: React.createElement(AccountCircleIcon),
        item: "Users"
    },
    {
        icon: React.createElement(InventoryIcon),
        item: "Inventory"
    },
    {
        icon: React.createElement(FeedbackIcon),
        item: "Feedbacks"
    },
    {
        icon: React.createElement(PersonIcon),
        item: "Staffs"
    },
    {
        icon: React.createElement(ElectricBoltIcon),
        item: "Perfomance"
    },
    {
        icon: React.createElement(SettingsIcon),
        item: "Settings"
    },
];
