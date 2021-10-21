import { useState } from "react";

export function useHooks() {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return { isOpen, OnClick };
}
