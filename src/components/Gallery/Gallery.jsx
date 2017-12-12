import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import ImageGallery from 'react-image-gallery';
import galleryData from '../../data/gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = (props) => (
  <Box align="center"> 
    <Box full="horizontal"><Heading level={3}>Gallery</Heading></Box>
    <ImageGallery items={galleryData.images} showThumbnails={false} />
  </Box>
);

export default Gallery;