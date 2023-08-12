type ContainerProps = {
	children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
	return (
		<div className="flex items-center justify-between w-full max-w-7xl px-4 mx-auto">
			{children}
		</div>
	);
}
