import React from "react";
import { useNav } from "../hooks/useNav";
import { ProjectCard } from "./ProjectCard";
import appLogo from "../assets/applogo87.png";

const projects = [
    {
        projectName: "Now-Playing",
        projectImg: appLogo,
        projectDesc: ["React Native", "Python server", "Postgress"],
        projectNote:
            "Note: This application is for storing movie suggestions and allowing you to pick a random from your list as well as other features. This also is implemented with a seperatly maintained design system for React Native components",
    },
    {
        projectName: "Untitled Application",
        projectDesc: ["React Native", "Python server", "Postgress"],
        projectNote:
            "Note: application in development",
    }
];

export const Projects = () => {
    const projectsRef = useNav("Projects");

    return (
        <section
            className="flex w-full h-screen"
            ref={projectsRef}
            id="projectsContainer"
        >
            <div className="text-coolGray-300 h-1/2 w-10/12 m-auto">
                <div className="mb-8 text-4xl text-coolGray-100 pl-4 max-[690px]:text-center max-[690px]:pl-0">
                    Projects
                </div>
                <div className="grid grid-cols-3 max-[1070px]:grid-cols-2 max-[690px]:grid-cols-1 max-[690px]:place-items-center">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.projectName}
                            projectName={project.projectName}
                            projectImg={project.projectImg}
                            projectDesc={project.projectDesc}
                            projectNote={project.projectNote}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
