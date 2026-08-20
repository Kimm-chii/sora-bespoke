import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
}

export function CustomImage({ src, alt, className = "", aspectRatio = "aspect-[4/5]", ...props }: ImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-brand-image-bg text-brand-meta w-full h-full ${aspectRatio} ${className}`}>
        <span className="text-xs italic font-serif opacity-50 px-4 text-center break-all">[ {src || alt || "Image"} ]</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full ${className}`}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
