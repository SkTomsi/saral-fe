import { cn } from "@/lib/utils";

export const HeaderLSemiBold = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <h1 className="text-lg font-semibold">{children}</h1>;
};

export const HeaderPrimarySemibold = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<h1 className="text-[28px] font-semibold text-center text-magenta-15">
			{children}
		</h1>
	);
};

export const BodyLRegular = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"text-base/relaxed font-normal text-center text-brand-secondary ",
				className,
			)}
		>
			{children}
		</p>
	);
};

export const HeaderXLMedium = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1 className={cn("text-xl font-medium text-brand-text", className)}>
			{children}
		</h1>
	);
};

export const HeaderXS = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1 className={cn("text-sm font-medium text-brand-secondary", className)}>
			{children}
		</h1>
	);
};

export const TagSRegular = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span className={cn("text-xs font-normal text-brand-secondary", className)}>
			{children}
		</span>
	);
};
