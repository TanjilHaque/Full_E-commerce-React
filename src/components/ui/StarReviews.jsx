import React from "react";
import { FaStar } from "react-icons/fa";

const StarReviews = ({ rating = 4, maxStars = 5, size = 18 }) => {
  const starColor = "#FFAD33";
  const emptyColor = "#E5E7EB";

  const starProps = {
    size,
    style: { display: "inline-block", verticalAlign: "middle" },
  };

  return (
    <div style={{ display: "inline-flex", gap: 4 }}>
      {Array.from({ length: maxStars }, (_, i) => {
        const fillFraction = Math.max(0, Math.min(1, rating - i)); // 0..1
        const fillPct = fillFraction * 100;

        return (
          <div
            key={i}
            style={{
              position: "relative",
              width: `${size}px`,
              height: `${size}px`,
              lineHeight: 0,
            }}
          >
            {/* empty (gray) star behind */}
            <FaStar {...starProps} color={emptyColor} />

            {/* filled (yellow) star clipped to fillPct */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                width: `${fillPct}%`,
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <FaStar {...starProps} color={starColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarReviews;
