const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256];
const inputLogo = path.join(__dirname, '../public/logo.png');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('Génération des favicons avec fond noir...');

  for (const size of sizes) {
    const padding = Math.floor(size * 0.15);
    const logoSize = size - (padding * 2);

    // Créer un carré noir
    const background = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    }).png().toBuffer();

    // Redimensionner le logo
    const resizedLogo = await sharp(inputLogo)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Composer l'image finale
    await sharp(background)
      .composite([{
        input: resizedLogo,
        top: padding,
        left: padding
      }])
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));

    console.log(`✓ favicon-${size}x${size}.png généré`);
  }

  // Générer favicon.ico (multi-résolution: 16, 32, 48)
  const favicon16 = await sharp(path.join(outputDir, 'favicon-16x16.png')).toBuffer();
  const favicon32 = await sharp(path.join(outputDir, 'favicon-32x32.png')).toBuffer();
  const favicon48 = await sharp(path.join(outputDir, 'favicon-48x48.png')).toBuffer();

  // Copier la version 32x32 comme favicon.ico (Sharp ne peut pas créer .ico multi-résolution)
  await sharp(path.join(outputDir, 'favicon-32x32.png'))
    .toFile(path.join(outputDir, 'favicon.ico'));

  console.log('✓ favicon.ico généré');
  console.log('✓ Tous les favicons ont été générés avec succès !');
}

generateFavicons().catch(console.error);
