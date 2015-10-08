var React = require('react-native');

var { View, Text, Image, StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ownerText: {
    color: '#fff',
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
  }
});

var OwnerProfile = React.createClass({
  render: function(){
    return (
      <View>
        <View>
          <Image source={{uri: this.props.picUrl}} style={styles.image}/>
          <Text style={styles.ownerText}>{this.props.name}</Text>
          <Text style={styles.ownerText}>{this.props.species}</Text>

        </View>
      </View>
    )
  }
});

OwnerProfile.propTypes = {
  picUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  firstname: React.PropTypes.string.isRequired,
  lastname: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired
}

module.exports = OwnerProfile;