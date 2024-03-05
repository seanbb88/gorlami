import React from "react";

import "./KillYourMasters.css";

export const KillYourMasters = () => {
	return (
		<div className="KillYourMastersContainer flex flex-col text-coolGray-100 mx-auto px-2 h-screen">
			<StarRow />
			<StarRowOpposite />
			<StarRow />
			<StarRowOpposite />
			<StarRow />
			<div className="flex justify-between">
				<div className="w-full">
					<MiniStarRow className="justify-start" />
					<MiniStarRowOpposite className="justify-start" />
					<MiniStarRow className="justify-start" />
				</div>

				<div className="KillMastersFont text-9xl pt-12 pb-6 px-36 text-center">
					Kill Your Masters
				</div>
				<div className="w-full">
					<MiniStarRowOpposite className="justify-end" />
					<MiniStarRow className="justify-end" />
					<MiniStarRowOpposite className="justify-end" />
				</div>
			</div>
			<StarRowOpposite />
			<StarRow />
			<StarRowOpposite />
			<StarRow />
			<StarRowOpposite />
		</div>
	);
};

const StarRow = () => (
	<div className="flex justify-between py-5">
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
	</div>
);

const StarRowOpposite = () => (
	<div className="flex justify-between py-5">
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
		<div className="star"></div>
		<div className="star-opposite"></div>
	</div>
);

const MiniStarRow = ({ className }: { className: string }) => (
	<div className={`${className} flex py-5`}>
		<div className="star-opposite"></div>
	</div>
);

const MiniStarRowOpposite = ({ className }: { className: string }) => (
	<div className={`${className} flex py-5`}>
		<div className="star"></div>
	</div>
);

export default KillYourMasters;
