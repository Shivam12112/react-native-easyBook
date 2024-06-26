import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextScreen from './TextScreen';
import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';

function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            marginTop: hp2dp(10),
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 150,
              width: 150,
            }}
            source={require('../assets/logo.png')}
          />
        </View>
        <View
          style={{
            marginTop: 32,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{width: wp2dp(85)}}>
            <Text style={{fontSize: 28, color: 'black'}}>Login</Text>
            <Text>Please Signin to continue</Text>
          </View>
        </View>
        <View style={[styles.sectionContainer, {marginTop: 20}]}>
          <TextScreen label="Username / Email" />
          <TextScreen label="Password" secureTextEntry={true} />
        </View>
        <View style={styles.sectionContainer}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              // alignContent: 'center',
              flexDirection: 'row',
              // alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('homeScreen');
              }}
              style={styles.loginButton}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 14, color: 'black'}}>
                Do not have an account?{'  '}
                <Text
                  style={{fontSize: 14, color: '#1581ed'}}
                  onPress={() => navigation.navigate('SignupScreen')}>
                  Sign Up
                </Text>
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 14, color: '#1581ed'}}>
                Forget Password?
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  loginButton: {
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1581ed',
    borderBottomWidth: 2,
    width: wp2dp(85),
    height: 45,
    // borderRadius: 5,
  },
});

export default LoginScreen;
