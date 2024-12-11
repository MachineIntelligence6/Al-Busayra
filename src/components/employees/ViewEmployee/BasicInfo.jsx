"use client";

import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider } from "@mui/material";

export default function BasicInfo({ profile, onEdit }) {
  console.log("view card", profile)
  return (
    <ViewCard title={profile?.title} onEdit={onEdit}>
      {profile?.data?.map((item, index) => (
        <Box key={item?.id} sx={{}}>
          <ViewItem
            label={
              <Box component="label" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item?.icon}
                <span>{item?.label}</span>
              </Box>
            }
            value={item?.value}
          />
          {index < profile?.data?.length - 1 && (
            <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
          )}
        </Box>
      ))}
    </ViewCard>
  );
}
