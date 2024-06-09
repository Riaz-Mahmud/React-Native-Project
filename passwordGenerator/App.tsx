import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox'

//Form validation
import * as Yup from 'yup'
import { Formik } from 'formik'

const PasswordSChema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must be at least 4 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password length is required')
    .typeError('Password length must be a number'),
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ''

    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    const numbersChar = '0123456789'
    const symbolsChar = '!@#$%^&*()_+'

    if (upperCase) {
      characterList += upperCaseChar
    }
    if (lowerCase) {
      characterList += lowerCaseChar
    }
    if (numbers) {
      characterList += numbersChar
    }
    if (symbols) {
      characterList += symbolsChar
    }

    const passwordResult = createPassword(characterList, passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    console.log(result)
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSChema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                    <TextInput 
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowerCase</Text>
                  <BouncyCheckbox 
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include upperCase</Text>
                  <BouncyCheckbox 
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include numbers</Text>
                  <BouncyCheckbox 
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckbox 
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="29AB87"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={handleSubmit}
                  >
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={ () => {
                    handleReset();
                    resetPasswordState()
                  }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
              <Text style={styles.description}>Long press to copy</Text>
            </View>
          ): null}

        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color: '#16213e',
  },
  description: {
    flex: 1,
    color: '#758283',
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
})