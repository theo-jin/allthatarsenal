export default function FormationSelector({
	current,
	onChange,
}: {
	current: string;
	onChange: (value: string) => void;
}) {
	const formations = ["4-3-3", "4-4-2", "4-2-3-1"];
	return (
		<select
			className="border rounded p-2 my-4"
			value={current}
			onChange={(e) => onChange(e.target.value)}
		>
			{formations.map((f) => (
				<option key={f} value={f}>
					{f}
				</option>
			))}
		</select>
	);
}
