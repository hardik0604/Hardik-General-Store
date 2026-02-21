import sharp from 'sharp';
import fs from 'fs';

async function optimizeImages() {
  const logoBuf = fs.readFileSync('src/assets/logo.png');
  await sharp(logoBuf)
    .resize(88, 88, { fit: 'inside' }) 
    .webp({ quality: 80 })
    .toFile('src/assets/logo.webp');
    
  console.log('Optimized logo.webp');

  const mobileHeroImages = ['1-m.webp', '2-m.webp', '3-m.webp', '4-m.webp'];
  
  for (const imgName of mobileHeroImages) {
    const inputPath = `src/assets/hero/${imgName}`;
    const fileBuf = fs.readFileSync(inputPath);
    
    // Resize down to 400px width (sufficient for Moto G power / typical phones)
    // Reduce quality significantly to shave bytes
    await sharp(fileBuf)
      .resize(400)
      .webp({ quality: 20, effort: 6 }) 
      .toFile(inputPath);
      
    console.log(`Optimized ${imgName}`);
  }
}

optimizeImages().catch(console.error);
