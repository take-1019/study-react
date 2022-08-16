import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

export const useCounter = () => {
	const [count, setCount] = useState(1);
	const [isShow, setisShow] = useState(true);

	const doubleCount = useMemo(() => {
		return count * 2;
	}, [count]);

	const handleClick = useCallback(() => {
		if (count < 10) {
			setCount((prevCount) => prevCount + 1);
		}
	}, [count]);

	const handleDisplay = useCallback(() => {
		setisShow((prevIsShow) => !prevIsShow);
	}, []);

	return { count, doubleCount, isShow, handleClick, handleDisplay };
};
