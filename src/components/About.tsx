import React from "react";

import { useNav } from "../hooks/useNav";
import "./About.css";
import andreImg from '../assets/andre.jpg'
import meImg from '../assets/me.jpg'
import jonImg from '../assets/jb.jpg'
import tadImg from '../assets/tad.jpg'

export const About = () => {
	const aboutRef = useNav("About");

	return (
		<section
			className="flex w-full h-screen mb-8"
			ref={aboutRef}
			id="aboutContainer"
		>
			<div className="flex h-1/2 w-8/12 m-auto justify-around max-[760px]:justify-start">
				<div className="flex flex-col w-1/2 mr-2 max-[760px]:w-full">
					<div className="text-4xl text-coolGray-100">About</div>
					<div className="text-coolGray-300 text-sm w-full mt-2 pr-4">
						Gorlami was founded by a group of like-minded individuals, united by their passion for developing quality and maintainable software. Here is a brief introduction to who these individuals are:
					</div>
					<AboutCard imgSrc={meImg} person="Sean Brown" about="me - Cofounder" />
					<AboutCard imgSrc={jonImg} person="Jon Stults" about="Cofounder/Coder & Certified genius + has the unknown &quot;It&quot; factor" />
					<AboutCard imgSrc={andreImg} person="Andre Dankha" about="He does some scrum shit & business things. whatever you do dont ask him about mushrooms or plants. . seriously" />
					<AboutCard imgSrc={tadImg} person="Todd Reynolds" about="Another business boy, but also a man of many hats. Well known in the the tv and movie industry but now he has apps!" />
				</div>
			</div>
		</section>
	);
};

export default About;


const AboutCard = ({ imgSrc, person, about }: { imgSrc: any, person: string, about: string }) => {
	return (
		<div className="flex flex-row p-4">
			<img height={200} width={125} src={imgSrc} alt="sexy-bois" />
			<div className='p-2'>
				<div className="text-lg text-coolGray-100">{person}</div>
				<div className="text-sm text-coolGray-300">{about}</div>
			</div>
		</div>
	)
}
