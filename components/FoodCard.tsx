import React from 'react';

interface FoodCardProps {
  name: string;
  image: string;
  className?: string;
  labelColor: 'yellow' | 'green';
}

export default function FoodCard({ name, image, className, labelColor }: FoodCardProps) {
  const labelBgColor = labelColor === 'yellow' ? 'bg-yellow-400' : 'bg-green-500';
  
  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-xl ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {/* Food Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">{image}</div>
        </div>
        
        {/* Label */}
        <div className={`absolute top-4 left-4 ${labelBgColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}>
          {name}
        </div>
      </div>
    </div>
  );
}