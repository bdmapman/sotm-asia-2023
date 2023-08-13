import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
            <div
                style={{
                    backgroundColor: "rgba(37, 34, 82, 0.9)",
                    width: '100%',
                    borderRadius: 10,
                }}
            >
                <p
                    style={{
                        color: "white",
                        fontSize: 36,
                        fontWeight: 700,
                        margin: 0,
                        padding: 10,
                    }}
                >
                    {value}
                </p>
            </div>

            <span
                style={{
                    color: "white",
                }}
            >
                {type}
            </span>
        </div>
    );
};

export default DateTimeDisplay;
