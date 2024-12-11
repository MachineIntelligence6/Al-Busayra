export const menuData = [
    {
        id: "1",
        title: "Companies",
        url: "/admin/companies", // Simple route
        icon: "/sidebarIcons/svg/office.svg",
    },
    {
        id: "2",
        title: "Campaigns",
        icon: "/sidebarIcons/svg/ad-2.svg",
        item: [
            { id: "2-1", label: "Campaign List", url: "/admin/campaigns" },
            { id: "2-2", label: "Not Qualified", url: "/admin/campaigns/not-qualified" },
        ],
    },
    {
        id: "3",
        title: "Applicants",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "3-1", label: "Shortlisted", url: "/admin/applicants" },
            { id: "3-2", label: "Final Review", url: "/admin/applicants/final-review" },
            { id: "3-3", label: "Hold", url: "/admin/applicants/hold" },
            { id: "3-4", label: "Not Qualified", url: "/admin/applicants/not-qualified" },
        ],
    },
    {
        id: "4",
        title: "Employees",
        icon: "/sidebarIcons/svg/user.svg",
        item: [
            { id: "4-2", label: "Active Employees", url: "/admin/employees" },
            { id: "4-3", label: "Inactive Employees", url: "/admin/employees/inactive-employee" },
            { id: "4-1", label: "Incomplete Profile", url: "/admin/employees/incomplete-profile" },
        ],
    },
    {
        id: "5",
        title: "Inventory",
        icon: "/sidebarIcons/svg/archive.svg",
        item: [
            { id: "5-1", label: "Dashboard", url: "/admin/inventory" },
            { id: "5-2", label: "Inventory List", url: "/admin/inventory/inventory-list" },
        ],
    },
    {
        id: "6",
        title: "Corporate",
        icon: "/sidebarIcons/svg/user-info.svg",
        item: [
            { id: "6-1", label: "Vendors", url: "/admin/corporate" },
            { id: "6-2", label: "Platforms", url: "/admin/corporate/platforms" },
        ],
    },
    {
        id: "7",
        title: "Challans",
        icon: "/sidebarIcons/svg/cash.svg",
        item: [
            { id: "7-1", label: "Salik", url: "/admin/challans" },
            { id: "7-2", label: "Traffic", url: "/admin/challans/traffic" },
        ],
    },
    {
        id: "8",
        title: "Users",
        icon: "/sidebarIcons/svg/users.svg",
        item: [
            { id: "8-1", label: "Active User", url: "/admin/users" },
            { id: "8-2", label: "Inactive User", url: "/admin/users/inactive" },
            { id: "8-3", label: "Roles Template", url: "/admin/users/roles-template" },
        ],
    },
    {
        id: "9",
        title: "Configuration",
        url: "/admin/configuration", // Simple route
        icon: "/sidebarIcons/svg/settings.svg"
    },
];
