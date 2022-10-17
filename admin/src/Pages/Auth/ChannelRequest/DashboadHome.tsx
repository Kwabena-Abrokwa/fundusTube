import React, { useState } from "react";
import CustomButton from "../../../Components/Customs/CustomButton";
import DashboardLayout from "../../../Components/LayoutComponent/DashboardLayout";

interface DashboadHomeProps {}

const DashboadHome: React.FC<DashboadHomeProps> = ({}) => {
	const [loader, setloader] = useState<Boolean>(false);
	const [message, setmessage] = useState<string>("");
	const [color, setcolor] = useState("red");
	const [displayAddVideo, setdisplayAddVideo] = useState(false);
	const [project, setproject] = useState([]);
	return (
		<DashboardLayout>
			<>
				{displayAddVideo ? (
					<div className="fixed w-screen h-screen bg-[#00000070] top-0 left-0 z-50">
						{" "}
						<div className="bg-white w-2/6 mx-auto mt-36 overflow-scroll h-[480px] relative">
							<div	
							className="absolute right-3 top-2 cursor-pointer bg-red-600 p-2 text-white"
								onClick={() => setdisplayAddVideo(false)}
							>
								<h1>Close</h1>
							</div>

							<div className="w-full p-2 my-8">
								{message && (
									<div
										className="text-center p-4 my-8 rounded-lg w-full"
										style={{ backgroundColor: color }}
									>
										<p className="text-white">{message}</p>
									</div>
								)}
								<CustomButton>
									{loader ? "Please wait..." : "Approve channel request"}
								</CustomButton>
							</div>
						</div>
					</div>
				) : null}
				<div className="w-11/12 mx-auto mt-10">
					<h2 className="text-3xl font-semibold pb-8">
						Request for a channel
					</h2>
					<div className="grid grid-cols-4 gap-4">
						<div className="hover:shadow-lg h-32 shadow-sm rounded-md cursor-pointer flex flex-row items-center justify-center border relative" onClick={() => setdisplayAddVideo(true)} >
							<h3 className="text-center text-xl">
								Waterflow foundation
							</h3>
							<p className="absolute bottom-2 right-2 text-xs">
								20th October, 2022
							</p>
						</div>
					</div>
				</div>
			</>
		</DashboardLayout>
	);
};

export default DashboadHome;
