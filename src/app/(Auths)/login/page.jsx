import React from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import Login from "@/components/Auth-components/Login";

const page = () => {
    return (
        <AuthLayout>
            <Login />
        </AuthLayout>
    );
};

export default page;
