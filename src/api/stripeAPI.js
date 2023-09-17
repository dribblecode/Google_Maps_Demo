import axios from "axios";

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
    console.log('Response',data);
  });
  
    
}

export default createPaymentIntent

// }).then(function (res) {
//     console.log('Resolve')
//     resolve(res)
// }).catch(function (error) {
//     console.log('Reject',error)
//     // reject(error)
// })

// import axios from "axios";

// const creatPaymentIntent = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log('Promise check')
//         axios.post('http://localhost:4002/payment-sheet', data).then(function (res) {
//             console.log('Resolve')    
//         resolve(res)
//         }).catch(function (error) {
//             console.log('Reject', error)
//             reject(error)
//         })
//     })
// }

// export default creatPaymentIntent