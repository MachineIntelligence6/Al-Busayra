export const permissions = [
    {
      name: "Companies",
      level: 0,
      permissions: ["view", "add", "edit", "delete"],
      customPermissions: ["Add Companies"],
    },
    {
      name: "Campaigns",
      level: 0,
      permissions: ["view"],
      customPermissions: [],
    },
    {
      name: "Campaign List",
      level: 1,
      permissions: ["view"],
      customPermissions: ["Add Campaign", "Edit Campaign", "Delete Campaign", "Status", "Copy Link"],
    },
    {
      name: "Not Qualified",
      level: 1,
      permissions: ["view"],
      customPermissions: ["Edit Details", "On Hold"],
    },
    {
      name: "Applicants",
      level: 0,
      permissions: [],
      customPermissions: [],
    },
    {
      name: "Shortlisted",
      level: 1,
      permissions: ["view", "add", "edit", "delete"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "First Review",
      level: 1,
      permissions: ["view", "add", "edit"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "Hold",
      level: 1,
      permissions: ["view", "add", "edit"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "Not Qualified",
      level: 1,
      permissions: ["view"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "Employees",
      level: 0,
      permissions: [],
      customPermissions: [],
    },
    {
      name: "Incomplete Profile",
      level: 1,
      permissions: ["view", "edit"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "Active Employee",
      level: 1,
      permissions: ["view", "add"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
    {
      name: "Inactive Employee",
      level: 1,
      permissions: ["view", "edit"],
      customPermissions: ["Add New", "Edit", "Hold", "Not Qualified", "Export"],
    },
  ]