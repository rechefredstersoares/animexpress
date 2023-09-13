"use client";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

const CircularScore = ({ score }: { score: number }) => {
    return (
        <div style={{ width: 40, height: 40 }}>
            <CircularProgressbarWithChildren
                value={score}
                strokeWidth={14}
                maxValue={10}
                counterClockwise
                styles={{
                    path: {
                        // Path color
                        stroke: `#0cbc4d`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Customize transition animation
                        transition: "stroke-dashoffset 0.5s ease 0s",
                        // Rotate the path
                        // transform: "rotate(0.25turn)",
                        transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: "#d6d6d6",
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "butt",
                        // Rotate the trail
                        transform: "rotate(0.25turn)",
                        transformOrigin: "center center",
                    },
                }}
            >
                <div className="text-xs font-bold text-black-1">{score}</div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default CircularScore;
