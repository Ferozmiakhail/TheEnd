import { loadStripe } from '@stripe/stripe-js';

let stripePromise:any;
const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_live_51NdrzNH8PI4bUNKLgWKgcJdT2IkIR05BocQr2uQKfeG1tt2QgmOlGB0au9nUKvAxroSc0byAQuzj8AWvmjqoxRYN00fPSzyLJ0');
  }

  return stripePromise;
}

export default getStripe;
