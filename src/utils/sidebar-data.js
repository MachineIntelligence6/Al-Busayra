export const menuData = [
    // {
    //     id: "1",
    //     title: "Companies",
    //     url: "/companies", // Simple route
    // icon: "/sidebarIcons/svg/office.svg",
    // },
    {
        id: "2",
        title: "Campaigns",
        icon: "/sidebarIcons/svg/ad-2.svg",
        item: [
            { id: "2-1", label: "Campaign List", url: "/campaigns" },
            { id: "2-2", label: "Create Campaign", url: "/campaigns/create" },
        ],
    },
    {
        id: "3",
        title: "Applicants",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "3-1", label: "Shortlisted", url: "/applicants" },
            { id: "3-2", label: "Final Review", url: "" },
            { id: "3-3", label: "Hold", url: "" },
            { id: "3-4", label: "Not Qualified", url: "" },
        ],
    },
    {
        id: "4",
        title: "Employees",
        icon: "/sidebarIcons/svg/user.svg",
        item: [
            { id: "4-1", label: "Employee List", url: "/employees/list" },
            { id: "4-2", label: "Add Employee", url: "/employees/add" },
        ],
    },
    {
        id: "5",
        title: "Inventory",
        icon: "/sidebarIcons/svg/archive.svg",
        item: [
            { id: "5-1", label: "Stock List", url: "/inventory/stock" },
            { id: "5-2", label: "Add Stock", url: "/inventory/add" },
        ],
    },
    {
        id: "6",
        title: "Corporate",
        icon: "/sidebarIcons/svg/user-info.svg",
        item: [
            { id: "6-1", label: "Corporate List", url: "/corporate/list" },
            { id: "6-2", label: "Add Corporate", url: "/corporate/add" },
        ],
    },
    {
        id: "7",
        title: "Challans",
        icon: "/sidebarIcons/svg/cash.svg",
        item: [
            { id: "7-1", label: "Salik", url: "/challans/salik" },
            { id: "7-2", label: "Traffic", url: "/challans/traffic" },
        ],
    },
    {
        id: "8",
        title: "Users",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "8-1", label: "User List", url: "/users/list" },
            { id: "8-2", label: "Add User", url: "/users/add" },
        ],
    },
    {
        id: "9",
        title: "Configuration",
        url: "/configuration", // Simple route
        icon: "/sidebarIcons/svg/settings.svg"
    },
];
