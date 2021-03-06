import React from 'react';
import {ImageBackground,View,Dimensions,Text, Button,Image, StatusBar,StyleSheet,TouchableOpacity} from 'react-native';
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
function CoverScreen({navigation}) {

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
    <View style={styles.Container}>
        <StatusBar hidden={true}/>
           <ImageBackground
           source={require('./../../assets/Images/IMAGE.png')}
           style={styles.BackgoundImage}
           >
             <LinearGradient
                useAngle={true}
                angle={180}
                locations={[-0.03, 0.77]}
                colors={['rgba(82, 182, 223, 0.2)','#4178D4']}
                style={styles.BackgoundLinearGradient}>
                       <View style={styles.LogoView}>
                            <Image source={require("./../../assets/Images/Symbol.png")} style={styles.LogoImage}/>
                            <Text style={styles.LogoTitle}>Study</Text>
                       </View>
                       <View style={styles.SubContainer}>
                             <Text style={styles.Headline}>Hello and</Text>
                             <Text style={styles.Headline}>welcome here!</Text>
                             <Text style={styles.Subline1}>Get an overview of how you are performing</Text>
                             <Text style={styles.Subline2}>and motivate yourself to achieve even moew.</Text>
                             <TouchableOpacity style={styles.Button}
                                               onPress={()=>navigation.navigate('Onboarding')}>
                                     <Text style={styles.ButtonText}>Let's start</Text>
                             </TouchableOpacity>
                             
                       </View>
              
              </LinearGradient>
           </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({

    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },

    BackgoundImage:{
        flex:1,
        position:'absolute',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        left:0,
        top:0,
    },

    BackgoundLinearGradient:{
        flex:1,          
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        justifyContent:'center',
        alignItems:'center',
    },

    LogoView:{
    position:'absolute',
    flexDirection:'row',
    top:40,
   },

   LogoImage:{
      margin:5,
   },

   LogoTitle:{
    margin:5,
    fontFamily:'Poppins_500Medium',
    fontSize:15,
    letterSpacing:0.2,
   },

   SubContainer:{
    flex:1,             
    position:'absolute',
    left:24,
    right:24,
    top:517,
    width:Dimensions.get('screen').width-48,
    height:144,
    justifyContent:'center',
    alignItems:'center',
   },

   Headline:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:32,
    fontWeight:'600',
    fontStyle:'normal',
    lineHeight:42,
    color:'#FFFFFF',
   },

   Subline1:{
    marginTop:27,
    fontSize:13,
    fontFamily:'Poppins_400Regular',
    fontWeight:'normal',
    fontStyle:'normal',
    lineHeight:22,
    color:'#FFFFFF',
    opacity:0.6,   
   },

   Subline2:{
    fontSize:13,
    fontFamily:'Poppins_400Regular',
    fontWeight:'normal',
    fontStyle:'normal',
    lineHeight:22,
    color:'#FFFFFF',
    opacity:0.6,   
   },

   Button:{
    height:56,
    width:149,
    backgroundColor:'#52B6DF',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    top:40,
   },

   ButtonText:{
    fontFamily:'Poppins_600SemiBold',   
    color:"#FFFFFF",
    fontSize:17,
    fontWeight:'600',
    lineHeight:24, 
   }
   


})



export default CoverScreen