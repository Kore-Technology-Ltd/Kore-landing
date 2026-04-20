"use client";

import { useState } from "react";

interface TeamAvatarProps {
  image: string;
  name: string;
  initials: string;
  tagColor: string;
  accentColor: string;
  borderColor: string;
}

export function TeamAvatar({ 
  image, 
  name, 
  initials, 
  tagColor, 
  accentColor, 
  borderColor 
}: TeamAvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`w-full h-full rounded-full bg-gradient-to-br ${accentColor} border-2 ${borderColor} flex items-center justify-center overflow-hidden`}
    >
      {!imageError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={`text-3xl font-serif ${tagColor}`}>
          {initials}
        </div>
      )}
    </div>
  );
}
