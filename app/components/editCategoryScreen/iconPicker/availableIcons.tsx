import { Icons } from 'react-native-fontawesome';

export const availableIcons = [
	Icons.allergies,
	Icons.ankh,
	Icons.archive,
	Icons.strava,
	Icons.bandAid,
	Icons.ban,
	Icons.camera,
	Icons.poop,
	Icons.venusMars,
	Icons.umbrella,
	Icons.puzzlePiece,
	Icons.yahoo,
	Icons.walking,
	Icons.shower,
	Icons.expand,
	Icons.kissBeam,
	Icons.carBattery,
	Icons.weibo,
	Icons.readme,
	Icons.teeth,
	Icons.question,
];

export function getRandomIcon() {
	const index = Math.floor(Math.random() * availableIcons.length);
	return availableIcons[index]
}
