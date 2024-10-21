export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className="max-w-[600px] min-h-[800px] mx-auto bg-white px-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
				{children}
			</div>
		</section>
	);
}
