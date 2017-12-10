import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import ImageGallery from 'react-image-gallery';
import galleryData from '../../data/gallery';

const Gallery = (props) => (
  <Box>
    <Heading level={3}>Gallery</Heading>
    <ImageGallery items={galleryData.images} showThumbnails={false} />
  </Box>
);

export default Gallery;