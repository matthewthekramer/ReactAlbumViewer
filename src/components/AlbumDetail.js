import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/*
Functional component that when given an album json object containing
a title, artist, thumbnail_image, image, and url, displays all data
graphically with a button to buy the albumn on amazon
*/
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.textContainerStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};

export default AlbumDetail;
