import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-native-paper';
import styles from '../../styles/QuestionStyles';
import { coho } from '../../images';

const DeadCoho = ({ navigation }) => (
  <View style={styles.container}>
    <Card>
      <Card.Title title="Coho" subtitle="White mouth, green/red body" />
      <Card.Cover source={coho.cohoFemale} />
    </Card>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('DeadFish1')}
    >
      Main Page
    </Button>
  </View>
);
DeadCoho.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

DeadCoho.defaultProps = {
  navigation: {
    navigate: () => null,
  },
};

export default DeadCoho;
