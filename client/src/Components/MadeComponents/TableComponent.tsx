import React from "react";

interface TableComponentProps {
	name: string;
	amount: number;
	buttonText: string;
	date: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
	name,
	amount,
	buttonText,
	date,
}) => {
	return (
		<tbody className="divide-y divide-gray-200">
			<tr>
				<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
					{name}
				</td>
				<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
					{`GHS ${amount}`}
				</td>

				<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
					<a
						className="text-green-500 hover:text-green-700"
						href={" "}
						target={"_blank"}
						rel="noreferrer"
					>
						{buttonText}
					</a>
				</td>

				<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
					{date}
				</td>
			</tr>
		</tbody>
	);
};

export default TableComponent;
