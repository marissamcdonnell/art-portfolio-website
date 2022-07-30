import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
// import Carousel, { Modal, ModalGateway } from 'react-images'

import pic from '../content/images/colorfullymine3.jpg'

const photos = [
  {
    src: pic,
    width: 4,
    height: 3,
  },
  {
    src: pic,
    width: 1,
    height: 1,
  },
  {
    src: pic,
    width: 4,
    height: 3,
  },
  {
    src: pic,
    width: 2,
    height: 1,
  },
  {
    src: pic,
    width: 4,
    height: 3,
  },
  {
    src: pic,
    width: 2,
    height: 2,
  },
  {
    src: pic,
    width: 4,
    height: 3,
  },
  {
    src: pic,
    width: 1,
    height: 1,
  },
]

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </>
  )
}

export default Home
