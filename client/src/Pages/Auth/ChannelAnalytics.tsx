import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "../../Components/Charts/BarChart";
import CustomButton from "../../Components/Customs/CustomButton";
import CustomInput from "../../Components/Customs/CustomInput";
import CustomSelect from "../../Components/Customs/CustomSelect";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import TableComponent from "../../Components/MadeComponents/TableComponent";

const donation = [
	{
		id: 1,
		date: "Sunday",
		donation: 300,
	},
	{
		id: 1,
		date: "Monday",
		donation: 100,
	},
	{
		id: 1,
		date: "Tuesday",
		donation: 500,
	},
];

const transactions = [
	{
		name: "Mike Mimi",
		amount: 25,
		date: "Sunday",
	},
	{
		name: "Kwabena Abrokwa",
		amount: 20,
		date: "Monday",
	},
	{
		name: "Esther Asamoah",
		amount: 35,
		date: "Tuesday",
	},
];

interface ChannelAnalyticsProps {}

const ChannelAnalytics: React.FC<ChannelAnalyticsProps> = ({}) => {
	const [barChartdata, setlineChartdata] = useState({
		labels: transactions.map((item) => item.date),
		datasets: [
			{
				label: "Donations",
				data: transactions.map((item) => item.amount),
				backgroundColor: ["#00000"],
				borderColor: "#0000",
			},
		],
	});

	const [loader, setloader] = useState<Boolean>(false);
	const [message, setmessage] = useState<string>("");
	const [color, setcolor] = useState("red");
	const [displayAddVideo, setdisplayAddVideo] = useState(false);
	const [displayEvidence, setdisplayEvidence] = useState(false);

	return (
		<DashboardLayout>
			<div className="w-11/12 mx-auto my-8">
				<>
					{displayAddVideo ? (
						<div className="fixed w-screen h-screen bg-[#00000070] top-0 left-0 z-50">
							{" "}
							<div className="bg-white w-2/6 mx-auto mt-36 overflow-scroll h-[480px]">
								<div
									className="  "
									onClick={() => setdisplayAddVideo(false)}
								>
									<h1>Close</h1>
								</div>

								<div className="w-full p-2 my-5">
									<form className="w-11/12  mx-auto ">
										<div className="my-8">
											<label className="text-md font-semibold">
												Account number
											</label>
											<CustomInput
												type={"text"}
												value={""}
												name={"email"}
												handleChange={() => {}}
												placeholder={"Example: kwabena@gmail.com"}
											/>
										</div>

										<div className="my-8">
											<label className="text-md font-semibold">
												Amount
											</label>
											<CustomInput
												type={"email"}
												value={""}
												name={"number"}
												handleChange={() => {}}
												placeholder={"Example: kwabena@gmail.com"}
											/>
										</div>
										{message && (
											<div
												className="text-center p-4 my-8 rounded-lg w-full"
												style={{ backgroundColor: color }}
											>
												<p className="text-white">{message}</p>
											</div>
										)}
										<CustomButton>
											{loader ? "Please wait..." : "Submit request"}
										</CustomButton>
									</form>
								</div>
							</div>
						</div>
					) : null}
				</>

				<>
					{displayEvidence ? (
						<div className="fixed w-screen h-screen bg-[#00000070] top-0 left-0 z-50">
							{" "}
							<div className="bg-white w-2/6 mx-auto mt-36 overflow-scroll h-[480px]">
								<div
									className="  "
									onClick={() => setdisplayEvidence(false)}
								>
									<h1>Close</h1>
								</div>

								<div className="w-full p-2 my-5">
									<form className="w-11/12  mx-auto ">
										<div className="my-8">
											<label className="text-md font-semibold">
												Add receipts here
											</label>
											<CustomInput
												type={"file"}
												value={""}
												name={"email"}
												handleChange={() => {}}
												placeholder={"Example: kwabena@gmail.com"}
											/>
										</div>

										<div className="my-8">
											<label className="text-md font-semibold">
												Additional Information
											</label>
											<div>
												<textarea
													className="w-full border rounded-md border-black outline-black px-4 py-2"
													placeholder="write here"
													rows={5}
												/>
											</div>
										</div>
										{message && (
											<div
												className="text-center p-4 my-8 rounded-lg w-full"
												style={{ backgroundColor: color }}
											>
												<p className="text-white">{message}</p>
											</div>
										)}
										<CustomButton>
											{loader
												? "Please wait..."
												: "Submit project completion proof"}
										</CustomButton>
									</form>
								</div>
							</div>
						</div>
					) : null}
				</>
				<div className="h-[30rem]">
					<div className="flex justify-between items-center w-full">
						<div className="flex justify-between items-center w-1/2">
							<div className="w-60">
								<CustomButton onclick={() => setdisplayAddVideo(true)}>
									Request for payout
								</CustomButton>
							</div>

							<div className="w-60">
								<CustomButton onclick={() => setdisplayEvidence(true)}>
									Submit project evidence
								</CustomButton>
							</div>
						</div>
						<div>
							<h2 className="text-xl">Amount Raised: GHS 80.00</h2>
						</div>
					</div>
					<BarChart barChartdata={barChartdata} />
				</div>
				<div className="mt-52">
					<h3 className="text-4xl">Transactions for this video content</h3>
					<div className="py-20">
						<div className="flex flex-col">
							<div className="overflow-x-auto">
								<div className="p-1.5 w-full inline-block align-middle">
									<div className="overflow-hidden border rounded-lg">
										<table className="min-w-full divide-y divide-gray-200">
											<thead className="bg-gray-50">
												<tr>
													<th
														scope="col"
														className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
													>
														Name
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
													>
														Amount
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
													>
														Status
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
													>
														Date
													</th>
												</tr>
											</thead>
											{transactions &&
												transactions.map((item: any, n: number) => (
													<TableComponent
														name={item.name}
														amount={item.amount}
														date={item.date}
														key={n}
														buttonText={"Received"}
													/>
												))}
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default ChannelAnalytics;
