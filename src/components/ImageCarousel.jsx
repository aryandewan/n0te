'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ImageCarousel = ({ images = [], interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length, interval]);

    return (
        <div className="relative w-full overflow-hidden rounded-t-4xl">
            <div
                className="flex transition-transform ease-in-out duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div className="w-full flex-shrink-0" key={index}>
                        <Image
                            src={src}
                            alt={`carousel-${index}`}
                            className="object-cover w-full"
                            width={1500}
                            height={1500}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ImageCarousel
