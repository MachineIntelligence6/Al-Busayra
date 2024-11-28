import React, { useState, useRef } from "react";

const OTPInput = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        if (isNaN(value)) return; // Ensure only numbers are entered

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        // Move focus to the next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const updatedOtp = [...otp];
            updatedOtp[index] = ""; // Clear current input
            setOtp(updatedOtp);

            // Move focus to the previous input if it exists
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData
            .getData("text")
            .slice(0, 6)
            .split("");

        const updatedOtp = [...otp];
        pasteData.forEach((char, i) => {
            if (i < 6 && !isNaN(char)) {
                updatedOtp[i] = char;
            }
        });

        setOtp(updatedOtp);

        // Focus the last filled input
        const lastIndex = pasteData.length - 1;
        if (lastIndex < 6) {
            inputRefs.current[lastIndex].focus();
        }
    };

    const handleSubmit = () => {
        alert(`Entered OTP: ${otp.join("")}`);
    };

    return (
        <div className="flex w-full  items-center justify-between gap-2 mt-4">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    placeholder="-"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-12 h-12 border rounded-md text-center text-lg"
                />
            ))}
            {/* <button
        onClick={handleSubmit}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button> */}
        </div>
    );
};

export default OTPInput;
