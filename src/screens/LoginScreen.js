import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import InputField from '../components/form/InputField'
import {
  Icon,
  Button
} from 'native-base'
import colors from '../styles/colors'
import RoundButton from '../components/buttons/RoundButton'

class LoginScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Button transparent style={styles.backButton}>
          <Icon name="ios-close" style={{fontSize: 40, fontWeight: '700', color: colors.PRIMARY}} />
        </Button>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>用户登录</Text>
          <View style={styles.formWrapper}>
            <InputField 
              icons={<Icon name="ios-contact" style={{color: colors.PRIMARY}} />}
              placeholder="请输入用户名"
              style={{marginBottom: 20}}
            />
            <InputField 
              icons={<Icon name="ios-unlock" style={{color: colors.PRIMARY}} />}
              placeholder="请输入密码"
            />
            <Button transparent style={styles.connactButton}>
              <Text style={styles.connactText}>联系客服?</Text>
            </Button>
            <RoundButton text="确定登录"
            textColor={colors.WHITE}
             style={{width: '100%', borderRadius: 25, backgroundColor: colors.PINK, height: 40, marginBottom: 15}} />
            <RoundButton text="马上注册"
            onPress={() => this.props.navigation.navigate('Signup')}
            textColor={colors.WHITE}
             style={{width: '100%', borderRadius: 25, backgroundColor: colors.PRIMARY_DARk, height: 40}} />
             <View style={styles.notify}>
               <Button transparent>
                  <Text style={styles.connactText}>忘记密码?</Text>
               </Button>
               <Button transparent>
                  <Text style={styles.connactText}>免费试玩</Text>
               </Button>
             </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrollView: {
    flex: 1
  },
  title: {
    marginTop: 70,
    fontSize: 30,
    marginBottom: 50,
    fontWeight: '700',
    color: colors.PRIMARY,
    textAlign: 'center'
  },
  formWrapper: {
    paddingHorizontal: '5%',
  },
  connactButton: {
    alignSelf: 'flex-end'
  },
  connactText: {
    color: colors.PRIMARY
  },
  notify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default LoginScreen
