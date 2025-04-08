import fs from 'fs';
import path from 'path';
import ArtGallery from './ArtGallery';

export default function ArtGalleryPage() {
    const dir = path.join(process.cwd(), 'public', 'art');
    const filenames = fs.readdirSync(dir);

    const images = filenames.map(name => `/art/${name}`);

    return <ArtGallery images={images} />;
}
