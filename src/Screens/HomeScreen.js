import React from 'react';
import {Text,View,Image, StatusBar} from 'react-native';
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

function HomeScreen() {
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

    <View style={{width:'100%',
                  height:'100%',
                  backgroundColor:'yellow',
                  position:'relative'}}>
        <StatusBar hidden={true}/>
        <View style={{width:'100%',
                      height:'45%',
                      backgroundColor:'#F3F5F8',
                      alignItems:'center',

                      }}>
            <View style={{width:'90%',
                          height:'20%',
                          
                          margin:10,
                          flexDirection:'row',
                          position:'relative'}}>
                <View style={{width:'80%',
                               height:'100%',
                               }}>
                    <Text style={{fontFamily:'Poppins_600SemiBold',
                                  fontWeight:'600',
                                  fontStyle:'normal',
                                  fontSize:22,
                                  lineHeight:24,}}>Hi, Jenny Wilson</Text>
                    <Text style={{fontFamily:'Poppins_400Regular',
                                  fontWeight:'400',
                                  fontStyle:'normal',
                                  fontSize:15,
                                  lineHeight:22,
                                  letterSpacing:0.2}}>Here is your activity today, </Text>              
                </View>
                <Image source={require('./../../assets/Images/HomeScreen/notifications.png')}
                       style={{height:24,
                                width:24,
                                position:'absolute',
                                top:2,
                                right:2,
                                }} />
                       
                    
            </View>
            <View style={{width:'90%',
                          height:'60%',
                          }}>
                <View style={{width:'100%',
                              height:'50%',
                              flexDirection:'row'
                              }}>
                    
                    <View style={{height:'97%',
                                  width:'47%',
                                  marginRight:'1%',
                                  marginLeft:'2%',
                                  marginBottom:'1%',
                                  marginTop:'2%',
                                  backgroundColor:'white',
                                  borderRadius:10,
                                  justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins_600SemiBold',
                                      fontStyle:'normal',
                                      fontWeight:'600',
                                      fontSize:20,
                                      lineHeight:24,
                                      color:'#B45309',
                                      marginLeft:20}}>89%</Text>
                        <Text style={{fontFamily:'Poppins_500Medium',
                                      fontStyle:'normal',
                                      fontWeight:'500',
                                      fontSize:13,
                                      lineHeight:22,
                                      letterSpacing:0.2,
                                      color:'#64748B',
                                      marginLeft:20}}>Presence</Text>     
                    </View>
                    <View style={{height:'97%',
                                  width:'47%',
                                  marginRight:'2%',
                                  marginLeft:'1%',
                                  marginBottom:'1%',
                                  marginTop:'2%',
                                  backgroundColor:'white',
                                  borderRadius:10,
                                  justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins_600SemiBold',
                                      fontStyle:'normal',
                                      fontWeight:'600',
                                      fontSize:20,
                                      lineHeight:24,
                                      color:'#4178D4',
                                      marginLeft:20}}>100%</Text>
                        <Text style={{fontFamily:'Poppins_500Medium',
                                      fontStyle:'normal',
                                      fontWeight:'500',
                                      fontSize:13,
                                      lineHeight:22,
                                      letterSpacing:0.2,
                                      color:'#64748B',
                                      marginLeft:20}}>Completeness</Text>                
                             
                    </View>
                
                </View>
                <View style={{width:'100%',
                              height:'50%',
                              flexDirection:'row'
                              }}>
                    <View style={{height:'97%',
                                  width:'47%',
                                  marginRight:'1%',
                                  marginLeft:'2%',
                                  marginBottom:'2%',
                                  marginTop:'3%',
                                  backgroundColor:'white',
                                  borderRadius:10,
                                  justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins_600SemiBold',
                                      fontStyle:'normal',
                                      fontWeight:'600',
                                      fontSize:20,
                                      lineHeight:24,
                                      color:'#52B6DF',
                                      marginLeft:20}}>18</Text>
                        <Text style={{fontFamily:'Poppins_500Medium',
                                      fontStyle:'normal',
                                      fontWeight:'500',
                                      fontSize:13,
                                      lineHeight:22,
                                      letterSpacing:0.2,
                                      color:'#64748B',
                                      marginLeft:20}}>Assignments</Text>  
                             
                    </View>
                    <View style={{height:'97%',
                                  width:'47%',
                                  marginRight:'2%',
                                  marginLeft:'1%',
                                  marginBottom:'2%',
                                  marginTop:'3%',
                                  backgroundColor:'white',
                                  borderRadius:10,
                                  justifyContent:'center'}}>
                        <Text style={{fontFamily:'Poppins_600SemiBold',
                                      fontStyle:'normal',
                                      fontWeight:'600',
                                      fontSize:20,
                                      lineHeight:24,
                                      color:'#F59E0B',
                                      marginLeft:20}}>12</Text>
                        <Text style={{fontFamily:'Poppins_500Medium',
                                      fontStyle:'normal',
                                      fontWeight:'500',
                                      fontSize:13,
                                      lineHeight:22,
                                      letterSpacing:0.2,
                                      color:'#64748B',
                                      marginLeft:20}}>Total Subject</Text>  
                             
                    </View>
                </View>
            </View>
            
        </View>
        <View style={{width:'100%',
                      height:'15%',
                      backgroundColor:'white',
                      flexDirection:'row'}}>
            <View style={{height:'100%',
                          width:'25%',
                          backgroundColor:"green"}}>
                <View>
                    
                </View>
            </View>
        </View>

    </View>
  )
}

export default HomeScreen