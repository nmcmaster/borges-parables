'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageModal from '@/ui/ImageModal'

const images = [
  { 
    src: '/inferno/dore_leopard.png', 
    alt: 'Inferno illustration by Gustave Doré',
    artist: 'Gustave Doré'
  },
  { 
    src: '/inferno/blake_3_beasts.jpg', 
    alt: 'Inferno illustration by William Blake',
    artist: 'William Blake'
  },
  { 
    src: '/inferno/leonard_baskin_leopard.jpg', 
    alt: 'Inferno illustration by Leonard Baskin',
    artist: 'Leonard Baskin'
  }
]

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(images[0])

  const openModal = (image: typeof images[0]) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex gap-4 mt-8">
        {images.map((image) => (
          <button
            key={image.src}
            onClick={() => openModal(image)}
            className="relative w-40 h-40 overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="160px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <ImageModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        artist={selectedImage.artist}
      />
    </>
  )
}
