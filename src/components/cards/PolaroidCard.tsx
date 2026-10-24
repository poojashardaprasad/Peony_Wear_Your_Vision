import React from 'react';

interface PolaroidCardProps {
  id: string;
  image: string;
  alt: string;
  date: string; // ISO String
  rotation: -6 | -3 | 3 | 6;
  positionKey?: number;
  isFeatured?: boolean;
  key?: string | number;
}

export const PolaroidCard = ({
  id,
  image,
  alt,
  date,
  rotation,
  positionKey,
  isFeatured = false
}: PolaroidCardProps) => {
  // Map rotation to standard Tailwind rotation classes safely
  const rotationClasses = {
    '-6': '-rotate-6 hover:-rotate-3',
    '-3': '-rotate-3 hover:-rotate-1',
    '3': 'rotate-3 hover:rotate-1',
    '6': 'rotate-6 hover:rotate-3'
  };

  const selectedRotation = rotationClasses[rotation.toString() as '-6' | '-3' | '3' | '6'] || 'rotate-0';

  // Format ISO Date beautifully (e.g. "JULY 16, 2024")
  const formatDate = (isoString: string) => {
    try {
      const dateObj = new Date(isoString);
      return dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).toUpperCase();
    } catch (e) {
      return "JULY 16, 2024";
    }
  };

  return (
    <div
      id={`polaroid-card-${id}`}
      className={`polaroid-card bg-white p-4 pb-8 rounded-xl shadow-md border border-neutral-100 flex flex-col gap-4 transition-all duration-500 ease-out hover:shadow-xl hover:scale-103 z-10 ${selectedRotation}`}
    >
      {/* Image container */}
      <div className="overflow-hidden bg-neutral-100 aspect-square rounded-lg relative">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80";
          }}
        />
        {isFeatured && (
          <div className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-xs text-[8px] font-semibold text-white tracking-widest px-2 py-1 rounded uppercase">
            Signature Design
          </div>
        )}
      </div>

      {/* Date metadata and sticker tag */}
      <div className="flex flex-col items-center gap-1.5 px-1 pt-1">
        <div className="w-6 h-1.5 rounded-full bg-neutral-100" />
        <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
          {formatDate(date)}
        </span>
      </div>
    </div>
  );
};
