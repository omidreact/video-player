
import React, { useState } from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import VideoPlayer from './screen/VideoPlayer';

function App(){
  const [count,setCount]=useState(0);
  const addr = [require('./videos/16.mp4'), require('./videos/15.mp4'), require('./videos/3.mp4')
  , require('./videos/4.mp4'), require('./videos/5.mp4'), require('./videos/6.mp4')
  , require('./videos/7.mp4'), require('./videos/8.mp4'), require('./videos/9.mp4')
  , require('./videos/10.mp4'), require('./videos/11.mp4'), require('./videos/12.mp4')
  , require('./videos/13.mp4'), require('./videos/14.mp4'), require('./videos/2.mp4')
  , require('./videos/1.mp4')];
  if(count===16)
  setCount(0)
  if(count===-1)
  setCount(15)
  return(
<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
  
<Pressable onPress={()=>setCount(count+1)} onLongPress={()=>setCount(count-1)}>
<VideoPlayer source={addr[count]} />
</Pressable>
</View>
  );
}
export default App;
