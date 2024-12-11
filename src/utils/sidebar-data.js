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
            { id: "2-2", label: "Not Qualified", url: "/campaigns/not-qualified" },
        ],
    },
    {
        id: "3",
        title: "Applicants",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "3-1", label: "Shortlisted", url: "/applicants" },
            { id: "3-2", label: "Final Review", url: "/applicants/final-review" },
            { id: "3-3", label: "Hold", url: "/applicants/hold" },
            { id: "3-4", label: "Not Qualified", url: "/applicants/not-qualified" },
        ],
    },
    {
        id: "4",
        title: "Employees",
        icon: "/sidebarIcons/svg/user.svg",
        item: [
            { id: "4-2", label: "Active Employees", url: "/employees" },
            { id: "4-3", label: "Inactive Employees", url: "/employees/inactive-employee" },
            { id: "4-1", label: "Incomplete Profile", url: "/employees/incomplete-profile" },
        ],
    },
    {
        id: "5",
        title: "Inventory",
        icon: "/sidebarIcons/svg/archive.svg",
        item: [
            { id: "5-1", label: "Dashboard", url: "/inventory" },
            { id: "5-2", label: "Inventory List", url: "/inventory/inventory-list" },
        ],
    },
    {
        id: "6",
        title: "Corporate",
        icon: "/sidebarIcons/svg/user-info.svg",
        item: [
            { id: "6-1", label: "Vendors", url: "/corporate" },
            { id: "6-2", label: "Platforms", url: "/corporate/platforms" },
        ],
    },
    {
        id: "7",
        title: "Challans",
        icon: "/sidebarIcons/svg/cash.svg",
        item: [
            { id: "7-1", label: "Salik", url: "/challans" },
            { id: "7-2", label: "Traffic", url: "/challans/traffic" },
        ],
    },
    {
        id: "8",
        title: "Users",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "8-1", label: "Active User", url: "/users" },
            { id: "8-2", label: "Inactive User", url: "/users/inactive-users" },
            { id: "8-3", label: "Roles Template", url: "/users/roles-template" },
        ],
    },
    {
        id: "9",
        title: "Configuration",
        url: "/configuration", // Simple route
        icon: "/sidebarIcons/svg/settings.svg"
    },
];
