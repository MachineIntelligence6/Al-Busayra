"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";

const DynamicBreadcrumb = () => {
    const pathname = usePathname();

    const pathArray = pathname.split("/").filter((path) => path);

    const breadcrumbs = pathArray.map((path, index) => {
        const href = `/${pathArray.slice(0, index + 1).join("/")}`;
        return { label: path.replace("-", " "), href };
    });

    // Helper function to capitalize each word
    const toTitleCase = (text) =>
        text
            .split(" ") // Split into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(" "); // Join back into a single string

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return isLast ? (
                    <Typography key={index} color="text.primary">
                        {toTitleCase(crumb.label)}
                    </Typography>
                ) : (
                    <Link key={index} href={crumb.href} passHref>
                        <Typography color="primary" sx={{ cursor: "pointer" }}>
                            {toTitleCase(crumb.label)}
                        </Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default DynamicBreadcrumb;