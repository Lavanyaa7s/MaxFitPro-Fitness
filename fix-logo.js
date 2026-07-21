import { Jimp } from 'jimp';

async function processLogo() {
  try {
    const image = await Jimp.read('./public/images/logo.png');
    
    // The image is a "fake transparent" PNG with a gray/white checkerboard background.
    // The actual logo is black (RGB near 0, 0, 0).
    // The checkerboard pixels are gray (RGB > 150) and white (RGB > 240).
    // We will make anything that isn't very dark completely transparent,
    // and turn the dark pixels (the logo) into pure white!

    image.scan((x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];

      const brightness = (red + green + blue) / 3;

      // If the pixel is dark (it's part of the black logo)
      if (brightness < 120) {
        // Turn it white
        image.bitmap.data[idx + 0] = 255;
        image.bitmap.data[idx + 1] = 255;
        image.bitmap.data[idx + 2] = 255;
        // Keep it opaque, but add slight anti-aliasing based on how dark it is
        const alpha = Math.min(255, ((120 - brightness) / 120) * 255 * 1.5);
        image.bitmap.data[idx + 3] = alpha; 
      } else {
        // It's the gray or white checkerboard! Make it fully transparent.
        image.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('./public/images/logo-transparent.png');
    console.log('Successfully removed fake checkerboard and created logo-transparent.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processLogo();
