export function getAverageColorFromImage(img: HTMLImageElement) {
	// Create a canvas element
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d')!;

	// Set the canvas width and height to match the image
	canvas.width = img.naturalWidth;
	canvas.height = img.naturalHeight;

	// Draw the image onto the canvas
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

	// Get the image data from the canvas
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

	// Get the pixel data from the image data
	const pixels = imageData.data;

	// Create an object to store the color counts
	const colorCounts: { [k: string]: number } = {};

	// Loop through each pixel
	for (let i = 0; i < pixels.length; i += 4) {
		// Get the RGB values of the pixel
		const r = pixels[i];
		const g = pixels[i + 1];
		const b = pixels[i + 2];

		// Convert the RGB values to a string representation of the color
		const color = `${r},${g},${b}`;

		// If the color is not in the color counts object, add it with a count of 1
		if (colorCounts[color]) {
			// If the color is already in the color counts object, increment its count by 1
			colorCounts[color]++;
		} else {
			colorCounts[color] = 1;
		}
	}

	// sum up the RGB values of all pixels
	let totalR = 0;
	let totalG = 0;
	let totalB = 0;
	const totalPixels = pixels.length / 4; // 4 bytes per pixel (R, G, B, A)
	for (let i = 0; i < pixels.length; i += 4) {
		totalR += pixels[i];
		totalG += pixels[i + 1];
		totalB += pixels[i + 2];
	}

	// calculate the average color
	const avgR = Math.round(totalR / totalPixels);
	const avgG = Math.round(totalG / totalPixels);
	const avgB = Math.round(totalB / totalPixels);

	return [avgR, avgG, avgB];
}
