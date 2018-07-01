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

class SignupScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })
  _goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Button transparent style={styles.backButton} onPress={this._goBack}>
          <Icon name="ios-close" style={{fontSize: 40, fontWeight: '700', color: colors.PRIMARY}} />
        </Button>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>用户注册</Text>
          <View style={styles.formWrapper}>
            <InputField 
              icons={<Icon name="ios-contact" style={{color: colors.PRIMARY}} />}
              placeholder="请输入用户名"
              style={{marginBottom: 20}}
            />
            <InputField 
              icons={<Icon name="ios-unlock" style={{color: colors.PRIMARY}} />}
              placeholder="请输入密码"
              style={{marginBottom: 20}}
            />
            <InputField 
              icons={<Icon name="ios-unlock" style={{color: colors.PRIMARY}} />}
              placeholder="请输入确认密码"
            />
            <Button transparent style={styles.connactButton}>
              <Text style={styles.connactText}>联系客服?</Text>
            </Button>
            <RoundButton text="确定注册"
            textColor={colors.WHITE}
             style={{width: '100%', borderRadius: 25, backgroundColor: colors.PINK, height: 40}} />
             <View style={styles.notify}>
               <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.connactText}>已有账号</Text>
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

export default SignupScreen
