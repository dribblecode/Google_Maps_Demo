import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CardField, useStripe, createToken } from '@stripe/stripe-react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import {SP_KEY} from '@env';
import PaymentButton from '../components/PaymentButton';
// import createPaymentIntent from '../api/stripeAPI';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const [paymentData, setPaymentData] =useState(null);

  const fetchDetails = (cardDetails) => {
    if(cardDetails.complete){
      setCardInfo(cardDetails);
    } else{
      setCardInfo(null)
    }
  }

  const createPaymentIntent = (data) => {
    const url = 'http://10.0.2.2:4002/payment-sheet'
    const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data),
      };
      fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
setPaymentData(data);
   
  });
  
    
}

  const onDone = async() => {

    let apiData = {
      amount: 400,
      currency: 'INR'
  }
    // try {
    //   const res = await createPaymentIntent()
    //   console.log("Payment Intent Res", res)
    // } catch (error) {
    //   console.log("error in Payment Intent", error)
    // }
    
    try {
      
      const res = await createPaymentIntent(apiData)
      console.log("payment intent create succesfully...!!!", paymentData.paymentIntent)

      if (paymentData?.paymentIntent) {
          let confirmPaymentIntent = await confirmPayment(paymentData?.paymentIntent, { paymentMethodType: 'Card' })
          console.log("confirmPaymentIntent res++++", confirmPaymentIntent)
          alert("Payment succesfully...!!!")
      }
  } catch (error) {
      console.log("Error during payment intent", error)
  }

    // if(!!cardInfo){
    //   try {
    //     const resToken = await createToken({...cardInfo, type:'Card'});
    //     alert("Payment Success")
    //     console.log('resToken:',resToken)
    //   } catch (error) {
    // alert('error raise during token')
    //   }
    // }
  }

    const { confirmPayment } = useStripe();

  return (
    <View style={{backgroundColor:'lightblue', flex:1}}>
        <StripeProvider
  publishableKey={SP_KEY}
  merchantIdentifier="merchant.identifier" // required for Apple Pay
  urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
>
  {/* <PaymentScreen /> */}

      <CardField
      postalCodeEnabled={false}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        fetchDetails(cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    </StripeProvider>
    <PaymentButton onPress={onDone}
    disabled={!cardInfo}
    />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})