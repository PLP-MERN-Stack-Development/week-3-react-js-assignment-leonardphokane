import Card from './Card';
import ImageCard from './ImageCard';
import homeImage from '../assets/home.png';
import successImage from '../assets/animated-success.png';
import shimmerImage from '../assets/shimmer.png';

const images = [
  { src: homeImage, alt: 'Homepage screen', label: 'Homepage' },
  { src: shimmerImage, alt: 'Loading shimmer', label: 'Shimmer' },
  { src: successImage, alt: 'Success screen', label: 'Success' },
];

const ImageGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-4">
    {images.map(({ src, alt, label }, index) => (
      <Card key={index} title={label}>
        <ImageCard src={src} alt={alt} label={label} />
      </Card>
    ))}
  </div>
);

export default ImageGallery;
