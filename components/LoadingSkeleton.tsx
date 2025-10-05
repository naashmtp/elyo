'use client';

import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'circle' | 'rectangle';
  width?: string;
  height?: string;
  className?: string;
}

export default function LoadingSkeleton({
  variant = 'rectangle',
  width = 'w-full',
  height = 'h-4',
  className = '',
}: LoadingSkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse';

  const variantClasses = {
    card: 'rounded-xl p-8 min-h-[200px]',
    text: 'rounded-md',
    circle: 'rounded-full aspect-square',
    rectangle: 'rounded-lg',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${width} ${height} ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
