import Image from "next/image";
export const Flag = ({
	size = 32,
	nation,
}: {
	size?: number;
	nation: string;
}) => {
	return (
		<Image
			src={`https://flagsapi.com/${nation}/flat/32.png`}
			width={size}
			height={size}
			alt="flag"
		/>
	);
};
