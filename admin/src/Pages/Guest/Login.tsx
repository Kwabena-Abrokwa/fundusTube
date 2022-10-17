import React, { useState } from "react";
import CustomButton from "../../Components/Customs/CustomButton";
import CustomInput from "../../Components/Customs/CustomInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
	const [data, setdata] = useState({
		username: "",
		password: "",
	});

	const [loader, setloader] = useState<Boolean>(false);
	const [message, setmessage] = useState<String>("");
	const [color, setcolor] = useState("red");

	const navigate = useNavigate();

	const handleChange = (event: any): void => {
		setdata({
			...data,
			[event.target.name]: event.target.value,
		});
	};

	const handleLogin = async (e: any) => {
		e.preventDefault();
		setloader(true);
		if (data.username === "" || data.password === "") {
			setloader(false);
			setmessage("All fields are required");
			return null;
		}
		await axios
			.post(`/loginAdmin`, data)
			.then(({ data }) => {
				if (data.status) {
					setloader(false);
					localStorage.setItem("user_id", data.userData.user_id);
					localStorage.setItem("username", data.userData.username);
					localStorage.setItem("token", data.userData.token);
					navigate("/dashboard-home");
				} else {
					setmessage(data.message);
					setcolor("red");
					setloader(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setloader(false);
			});
	};

	return (
		<section>
			<div className="lg:w-2/6 mx-auto mt-16">
				<div className="logo w-20 mx-auto"></div>
				<div className="title text-center py-6">
					<h3 className="text-xl font-medium">Admin Dashboard</h3>
				</div>
				<div className="w-full lg:shadow-md lg:border lg:rounded-lg p-2 my-5">
					<form
						className="w-11/12 lg:w-5/6 mx-auto"
						onSubmit={handleLogin}
					>
						<div className="my-8">
							<label className="text-md font-semibold">Admin Name</label>
							<CustomInput
								type={"text"}
								value={data.username}
								name={"username"}
								handleChange={handleChange}
							/>
						</div>
						<div className="my-8">
							<label className="text-md font-semibold">Password</label>
							<CustomInput
								type={"password"}
								value={data.password}
								name={"password"}
								handleChange={handleChange}
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
							{loader ? "Please wait..." : "Login"}
						</CustomButton>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Login;
