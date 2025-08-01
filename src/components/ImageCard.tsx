// src/components/ImageCard.tsx

interface ImageCardProps {
  src: string;
  alt: string;
  label: string;
}

const ImageCard = ({ src, alt, label }: ImageCardProps) => (
  <div className="flex flex-col items-center gap-2">
    <img src={src} alt={alt} className="w-[220px] h-auto rounded-lg shadow-md" />
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

export default ImageCard;
