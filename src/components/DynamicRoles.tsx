'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const ROLES = [
	'a developer 👨‍💻',
	'thriving on inspiration ✨',
	'a gaming enthusiast 🎮',
	'a code maker 💻',
	'a coffee lover ☕',
];

export function DynamicRoles() {
	const typedElement = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!typedElement.current) {
			return;
		}

		const typed = new Typed(typedElement.current, {
			strings: ROLES,
			typeSpeed: 50,
			backSpeed: 25,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return <span ref={typedElement} />;
}
