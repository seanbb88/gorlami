import React from "react";
import { Button } from "./Button";

import "./ProjectCard.css";

export const ProjectCard = ({
    className,
    projectName,
    projectImg,
    projectDesc,
    projectNote,
    projectLink,
    buttonText,
}: {
    className?: string;
    projectName: string;
    projectImg?: any;
    projectDesc: string[];
    projectNote?: string;
    buttonText?: string;
    projectLink?: string;
}) => {
    return (
        <div className="flip-card m-4">
            <div className="flip-card-inner">
                <div className="text-coolGray-100 flip-card-front">
                    <div className="text-2xl py-4">{projectName}</div>
                    {projectImg && (
                        <img
                            className="mx-auto"
                            width="150"
                            src={projectImg}
                            alt="project-img"
                        />
                    )}
                    <div className="underline pb-2">Features</div>
                    {projectDesc.map((desc: string) => (
                        <div key={desc} className="text-xs">
                            {desc}
                        </div>
                    ))}
                </div>
                <div className="flip-card-back flex flex-col justify-between">
                    {projectNote && (
                        <div className="text-coolGray-100 p-2 m-4 rounded border border-coolGray-100">
                            {projectNote}
                        </div>
                    )}
                    {projectLink && (
                        <Button
                            className="text-xl px-4 w-fit mx-auto mt-8 mb-4 rounded-md border border-coolGray-100 text-coolGray-100"
                            to={{ pathname: projectLink }}
                            openInNewWindow
                            color="white"
                        >
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
