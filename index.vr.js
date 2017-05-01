import React from 'react';
import {
  AppRegistry,
  asset,
  Sphere,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToReactVR extends React.Component {
  constructor() {
    super()

    this.state = {backgroundColor: 'red'};
  }

  render() {
  // <View> below creates a view that is 2 meters wide and is positioned
  // 5 meters in front of the user (z = -5). Its child items are laid out
  // in a 'column' and marked to 'stretch' to the width of the view container.
  // This causes call child view to have the same width.
  return (
    <View>
      <Pano source={asset('chess-world.jpg')} />
      <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [-1, 1, -6]}, {rotateX: -20}],
      }}>

      <View style={{ margin: 0.1, height: 0.3, backgroundColor: this.state.backgroundColor}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}
          onEnter={() => this.setState({backgroundColor: 'blue'})}
          onExit={() => this.setState({backgroundColor: 'red'})}>
          Red
        </Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
      </View>

      <Sphere
        radius={0.5}
        widthSegments={20}
        heightSegments={12}
        style={{color: 'goldenrod', transform: [{translate: [-5, 1, -5]}]}}
      />

    </View>
  </View>
  );
}
};

AppRegistry.registerComponent('WelcomeToReactVR', () => WelcomeToReactVR);
