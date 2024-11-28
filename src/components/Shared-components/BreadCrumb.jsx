"use client"
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

    return (
        <Breadcrumbs aria-label="breadcrumb">


            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return isLast ? (
                    <Typography key={index} color="text.primary">
                        {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                    </Typography>
                ) : (
                    <Link key={index} href={crumb.href} passHref>
                        <Typography color="primary" sx={{ cursor: "pointer" }}>
                            {crumb.label.charAt(0).toUpperCase() + crumb.label.slice(1)}
                        </Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default DynamicBreadcrumb;
