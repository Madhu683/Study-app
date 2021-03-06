import React from 'react'
import {View,Text,StatusBar,TouchableOpacity,TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
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


function Input({title,placeholder,secureTextEntry})
{
    return(
        <View style={{height:82,width:'100%',backgroundColor:'white',marginBottom:16}}>
            <Text style={{fontFamily:'Poppins_400Regular',
                          fontStyle:'normal',
                          fontWeight:'normal',
                          fontSize:15,
                          lineHeight:25,
                          letterSpacing:0.2,
                          marginBottom:6}}>{title}</Text>
            <TextInput style={{width:'100%',
                               height:49,
                               backgroundColor:'rgba(241,245,249,0.4)',
                               borderWidth:1,
                               borderColor:'#CBD5E1',
                               borderRadius:10,
                                padding:15,
                               fontFamily:'Poppins_400Regular',
                               fontStyle:'normal',
                                fontWeight:'normal',
                               fontSize:15,
                                lineHeight:24,
                               letterSpacing:0.2}} 
                               placeholder={placeholder}
                               
                               secureTextEntry={secureTextEntry}></TextInput>
        </View>
    )
}  

function SignUp({navigation}) {
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
    <View style={{height:'100%',
                   width:'100%',
                   backgroundColor:'white'
                   }}>
        <StatusBar hidden={true}/>               
        <View style={{height:48,
                       width:'100%',
                       backgroundColor:'#FFFFFF',
                       justifyContent:'center'}}>
            <Text style={{fontFamily:'Poppins_500Medium',
                          fontStyle:'normal',
                          fontWeight:'500',
                          fontSize:17,
                          lineHeight:24,
                          alignSelf:'center',
                          color:'#000000'}}>Sign up</Text>
        </View>
        <View style={{height:'55%',
                     width:'90%',
                     alignSelf:'center',
                     backgroundColor:'#FFFFFF',
                     marginTop:20,
                     }}>
        <Input title="Name" placeholder="Your Name"/>
        <Input title="Email" placeholder="study@email.com"/>
        <Input title="Password" placeholder="Your password" secureTextEntry={true}/>
        <Input title="Phone Number"placeholder="0334 xxxx xxxx"/>
        </View>
        <View style={{height:'12%',
                      width:'90%',
                      backgroundColor:'#FFFFFF',
                      alignSelf:'center',
                      marginTop:20,
                      flexDirection:'row'}}>
            
            <Text style={{fontFamily:'Poppins_400Regular',
                          fontStyle:'normal',
                          fontWeight:'normal',
                          fontSize:13,
                          lineHeight:22,
                          letterSpacing:0.2,
                          color:'#647488',
                          position:'absolute',
                          right:0}}>I agree with the terms and conditions and {'\n'} also the protection of my personal data{'\n'} on this application</Text>
        </View>    
        <TouchableOpacity style={{height:'8%',
                                  width:'92%',
                                  backgroundColor:'#52B6DF',
                                  borderRadius:10,
                                  alignSelf:'center',
                                  position:'absolute',
                                  alignItems:'center',
                                  justifyContent:'center',
                                  bottom:20,
                                   }}>
               <Text style={{ fontFamily:'Poppins_600SemiBold',
                              fontStyle:'normal',
                              fontWeight:'600',
                              fontSize:17,
                              lineHeight:24,
                              color:'#FFFFFF'

                              }}>Sign Up</Text>
        </TouchableOpacity> 

    </View>

  )
}

export default SignUp