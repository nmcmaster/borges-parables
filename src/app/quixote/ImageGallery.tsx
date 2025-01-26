'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageModal from '@/ui/ImageModal'

const images = [
  { 
    src: '/quixote/daliquixote.jpg', 
    alt: 'Don Quixote by Salvador Dali',
    artist: 'Salvador Dalí'
  },
  { 
    src: '/quixote/daumier_quixote.jpg', 
    alt: 'Don Quixote by Honoré Daumier',
    artist: 'Honoré Daumier'
  },
  { 
    src: '/quixote/picasso_quixote.png', 
    alt: 'Don Quixote by Pablo Picasso',
    artist: 'Pablo Picasso'
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
