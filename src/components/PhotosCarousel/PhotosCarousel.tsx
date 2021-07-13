import React, { useState } from 'react'
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native'
import styled from 'styled-components/native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const { width: viewportWidth } = Dimensions.get('window')

const CarouselContainer = styled(View)`
  min-width: 250px;
`
const ImageContainer = styled(View)`
  display: flex;
  justify-content: center;
  width: ${viewportWidth}px;
  height: 250px;
`
const CarouselImage = styled(Image)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
`

const paginationStyles = StyleSheet.create({
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
})

interface Props {
  photosArray: string[]
}

const PhotosCarousel: React.FC<Props> = ({ photosArray }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderImage = ({ item }: { item: string }) => (
    <TouchableHighlight>
      <ImageContainer>
        <CarouselImage source={{ uri: item }} />
      </ImageContainer>
    </TouchableHighlight>
  )

  return (
    <CarouselContainer>
      <Carousel
        data={photosArray}
        renderItem={renderImage}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        loop={false}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={photosArray.length}
        activeDotIndex={activeSlide}
        containerStyle={paginationStyles.paginationContainer}
        dotColor="rgba(255, 255, 255, 0.92)"
        dotStyle={paginationStyles.paginationDot}
        inactiveDotColor="white"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </CarouselContainer>
  )
}

export default PhotosCarousel
