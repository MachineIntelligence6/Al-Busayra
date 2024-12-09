"use client";

import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider } from "@mui/material";

export default function BasicInfo({ profile1, onEdit }) {
  return (
    <ViewCard title={profile1.title} onEdit={onEdit}>
      {profile1.data.map((item, index) => (
        <Box key={item.id} sx={{}}>
          <ViewItem
            label={
              <Box component="label" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                <span>{item.label}</span>
              </Box>
            }
            value={item.value}
          />
          {index < profile1.data.length - 1 && (
            <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
          )}
        </Box>
      ))}
    </ViewCard>
  );
}
