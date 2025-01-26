'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'

type ImageModalProps = {
  isOpen: boolean
  closeModal: () => void
  imageSrc: string
  imageAlt: string
  artist: string
}

export default function ImageModal({ isOpen, closeModal, imageSrc, imageAlt, artist }: ImageModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-lg bg-white p-2 shadow-xl transition-all">
                <div className="relative h-[80vh]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-md text-gray-600">
                   {artist}
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
