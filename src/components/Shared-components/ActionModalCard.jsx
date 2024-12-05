"use client";

import { useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DoneIcon from "@mui/icons-material/Done";
import { useFormik } from "formik";
import { Schema } from "@/components/Shared-components/Schemas/Schema";

const statusOptions = [
  { label: "Shortlist", value: "shortlist" },
  { label: "On Hold", value: "onHold" },
  { label: "Call Back", value: "callBack" },
  { label: "Not Qualified", value: "notQualified" },
];

const ActionModalCard = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      status: "",
      remarks: "",
    },
    validationSchema: Schema(),
    onSubmit: (values) => {
      console.log("Form data submitted: ", values);
    },
  });

  const PopUpRef = useRef(null);

  const closePopUp = (e) => {
    if (PopUpRef.current === e.target) {
      onClose();
    }
  };

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      ref={PopUpRef}
      onClick={closePopUp}
      className="fixed inset-0 bg-[rgba(17,17,17,0.80)] flex justify-center items-center z-50"
    >
      <div className="flex flex-col gap-8 bg-white p-10 rounded-[10px] min-w-[865px]">
        <div className="flex gap-6 items-center">
          {statusOptions.map((option) => (
            <div className="flex gap-1" key={option.value}>
              <input
                type="radio"
                id={option.value}
                name="status"
                value={option.value}
                onChange={formik.handleChange}
                checked={formik.values.status === option.value}
              />
              <label htmlFor={option.value} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {formik.touched.status && formik.errors.status && (
          <Typography color="error" variant="body2">
            {formik.errors.status}
          </Typography>
        )}

        <div>
          <h1 className="text-[#104774] text-md font-medium">
            Add your remarks <span className=" text-[#E6483D]">*</span>
          </h1>
          <textarea
            name="remarks"
            id="remarks"
            rows={5}
            className="w-full resize-none mt-2 rounded-[6px] border border-[rgba(47,43,61,0.25)] bg-[#FCFCFC] p-2 focus:outline-none"
            value={formik.values.remarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.remarks && formik.errors.remarks && (
            <Typography color="error" variant="body2">
              {formik.errors.remarks}
            </Typography>
          )}
        </div>
        <div className="border-t-2 w-full border-[rgba(47,43,61,0.25)]"></div>
        <div className="flex justify-between items-center">
          <Button
            variant="outlined"
            color="error"
            startIcon={<HighlightOffIcon />}
            onClick={handleClick}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            endIcon={<DoneIcon />}
            onClick={formik.handleSubmit}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionModalCard;
