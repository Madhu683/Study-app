import React from 'react';
import {Text,View,Image,ImageBackground,} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

function Onboarding({navigation}) {

  let [fontsLoaded,error] = useFonts({
    Poppins_100Thin,
Poppins_100Thin_Italic,
Poppins_200ExtraLight,
Poppins_200ExtraLight_Italic,
Poppins_300Light,
Poppins_300Light_Italic,
Poppins_400Regular,
Poppins_400Regular_Italic,
Poppins_500Medium,
Poppins_500Medium_Italic,
Poppins_600SemiBold,
Poppins_600SemiBold_Italic,
Poppins_700Bold,
Poppins_700Bold_Italic,
Poppins_800ExtraBold,
Poppins_800ExtraBold_Italic,
Poppins_900Black,
Poppins_900Black_Italic 
})

if(!fontsLoaded){
    return <AppLoading/>
};
  return (
    <View style={{height:'100%',width:'100%',backgroundColor:'white'}}>
         <View style={{height:'55%',width:'100%',backgroundColor:'yellow'}}>
           <ImageBackground 
           source={require('./../../assets/Images/Rectangle_953.png')}
           style={{flex:1}}>
              <LinearGradient
              style={{flex:1,
                      alignItems:'center',
                      justifyContent:'center',}}
              useAngle={true}
              angle={180}
              locations={[-0.03, 1.00]}
              colors={['rgba(82, 182, 223, 0.2)','#4178D4']}>
                  <View style={{height:36,
                                width:110,
                                alignItems:'center',
                                justifyContent:'center',
                                position:'absolute',
                                bottom:30,
                                flexDirection:'row'}}>
                       <Image source={require('./../../assets/Images/Symbol.png')}
                              style={{height:32,
                                      width:32,
                                      marginRight:5}}/>
                       <Text style={{fontSize:21.6,
                                     fontFamily:'Poppins_500Medium',
                                     fontStyle:'normal',
                                     fontWeight:'500',
                                     letterSpacing:0.26,
                                     color:'#FFFFFF'}}>Study</Text>

                  </View>
              </LinearGradient>
           </ImageBackground>
         </View>
         <View style={{height:'45%',width:'100%',backgroundColor:'white'}}>
           <Swiper
                   style={{height:'100%',width:'100%'}}
                   showsButtons={true}
                   showsPagination={true}
                   autoplay={true}
                   paginationStyle={{position:'absolute',
                                    bottom:120}}
                   buttonWrapperStyle={{position:'absolute',
                                        color:'black',
                                         }}
                   prevButton={<View onPress={()=>NavigationContainer.navigate('SignUp')}style={{bottom:-120,left:10,alignItems:'center',justifyContent:'center'}} >
                                      <Text style={{fontStyle:'normal',
                                                    fontWeight:'500',
                                                    fontFamily:'Poppins_500Medium',
                                                    fontSize:15,
                                                    lineHeight:25,
                                                    color:'#52B6DF' }}>Skip</Text>
                                </View>}
                   nextButton={<View style={{bottom:-120,right:10,height:62,width:62,backgroundColor:'#52B6DF',borderRadius:62,alignItems:'center',justifyContent:'center'}} >
                                       <Image   style={{width:24,height:20}} 
                                                source={require('./../../assets/Images/Arrow.png')}/>
                                </View>} >
                     <View style={{backgroundColor:'white',
                                   justifyContent:'center',
                                   alignItems:'center',
                                   height:'100%',
                                   width:'100%'}}
                                   >
                       <Text style={{position:'absolute',
                                     top:50,
                                     fontStyle:'normal',
                                     fontFamily:'Poppins_600SemiBold',
                                     fontWeight:'600',
                                     fontSize:24,
                                     lineHeight:28,
                                     color:'#0F172A'}}>Find your favorite class</Text>
                       <Text style={{fontStyle:'normal',
                                     fontWeight:'normal',
                                     fontSize:13,
                                     fontFamily:'Poppins_400Regular',
                                     lineHeight:22,
                                     letterSpacing:0.2,
                                     color:'#647488',
                                     position:'absolute',
                                     top:100}}>Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit. Sit enim, ac amet ultrices.</Text>
                     </View>
                     <View style={{backgroundColor:'white',
                                   justifyContent:'center',
                                   alignItems:'center',
                                   height:'100%',
                                   width:'100%'}}
                                   >
                       <Text style={{position:'absolute',
                                     top:50,
                                     fontStyle:'normal',
                                     fontFamily:'Poppins_600SemiBold',
                                     fontWeight:'600',
                                     fontSize:24,
                                     lineHeight:28,
                                     color:'#0F172A'}}>Choose your favorite mentor</Text>
                       <Text style={{fontStyle:'normal',
                                     fontWeight:'normal',
                                     fontFamily:'Poppins_400Regular',
                                     fontSize:13,
                                     lineHeight:22,
                                     letterSpacing:0.2,
                                     color:'#647488',
                                     position:'absolute',
                                     top:100}}>Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit. Sit enim, ac amet ultrices.</Text>
                     </View>

           </Swiper>
         </View>
    </View>
  )
}

export default Onboarding