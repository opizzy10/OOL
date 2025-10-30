import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="aspect-[4/3] rounded-xl overflow-hidden bg-muted cursor-pointer group relative"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={images[selectedImage]}
            alt={`${alt} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-lg text-sm">
              Click to enlarge
            </span>
          </div>
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white/10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white/10"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          <img
            src={images[selectedImage]}
            alt={`${alt} - Image ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
