'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const ROLES = [
	'developer 👨‍💻',
	'dependent on inspiration 👓',
	'gaming enthusiast 🎮',
	'code maker 💻',
	'coffee lover ☕',
];

export function DynamicRoles() {
	const typedElement = useRef(null);

	useEffect(() => {
		const typed = new Typed(typedElement.current, {
			strings: ROLES,
			typeSpeed: 50,
			backSpeed: 25,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, [typedElement]);

	return <span ref={typedElement} />;
}
