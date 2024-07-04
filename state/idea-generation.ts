import { stat } from 'fs';
import { create } from 'zustand'
interface Productb {
  _id: string;
  name: string;
  image: Array<string>;
  Sdetails: string;
  Ldetails: string;
  price: number;
  price2: number;
  stringC: Array<string>
  productcategory: string;
  quantity: number;
  foundProduct: any;
}
interface Productc {
  _id: string;
  name: string;
  image: Array<string>;
  Sdetails: string;
  Ldetails: string;
  price: number;
  price2: number;
  stringC: Array<string>
  productcategory: string;
  quantity: number;
  foundProduct: any;
  stock: number,
  shoulder: number,
  sleeve: number,
  collar: number,
  chest: number,
  hip: number,
  last: number,
  blouse: number,
  dotpoint: number,
  waistaround: number,
  BeltFit: number,
  hipLine: number,
  pant: number,
  sizeslect: string,
  sSkirt: string,
  sleevee: string,
  collare: string,
  pocket: string,
  pante: string,
  Cusian: string,
  color: string,
}
interface GenerationState {
  cartItems: Productc[];
  totalPrice: number;
  totalQuantities: number;
  totallstock: number;
  totallshoulder: number;
  totallsleeve: number;
  totallcollar: number;
  totallchest: number;
  totallhip: number;
  totalllast: number;
  totallblouse: number;
  totalldotpoint: number;
  totallwaistaround: number;
  totallBeltFit: number;
  totallhipLine: number;
  totallpant: number;
  sizeslect: string;
  sSkirt: string;
  sleevee: string;
  collare: string;
  pocket: string;
  pante: string;
  Cusian: string;
  color: string,
  getshoulder: string;
  showCart: boolean;
  addToCart: (product: any, quantity: number, stock: number, shoulder: number, sleeve: number, collar: number, chest: number, hip: number, last: number, blouse: number, dotpoint: number, waistaround: number, BeltFit: number, hipLine: number, pant: number, sizeslect: string, sSkirt: string, sleevee: string, collare: string, pocket: string, pante: string, Cusian: string, color: string,) => void;
  removecart: (product: any) => void;
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void;
  tabType: string,
  settabType: (tabType: string) => void,
  CType: string,
  setCType: (CType: string) => void,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
  iscoat: boolean, 
  setiscoat: (iscoat: boolean) => void,
  hidecoat: boolean, 
  sethidecoat: (hidecoat: boolean) => void,
  hidejew: boolean, 
  sethidejew: (hidejew: boolean) => void, 
  isjew: boolean, 
  setisjew: (isjew: boolean) => void, 
  sluger: Productb | null,
  setSluger: (sluger: Productb | null) => void,
  allproducts: any[] | null,
  setAllProducts: (allproducts: any[] | null) => void,
  index: number,
  setIndex: (index: number) => void,
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  totallstock: 0,
  totallshoulder: 0,
  totallsleeve: 0,
  totallcollar: 0,
  totallchest: 0,
  totallhip: 0,
  totalllast: 0,
  totallblouse: 0,
  totalldotpoint: 0,
  totallwaistaround: 0,
  totallBeltFit: 0,
  totallhipLine: 0,
  totallpant: 0,
  sizeslect: '',
  sSkirt: '',
  sleevee: '',
  collare: '',
  pocket: '',
  pante: '',
  Cusian: '',
  color: '',
  getshoulder: '',
  showCart: false,
  foundProduct: undefined,
  removecart: (product) => {
    set((state: GenerationState) => {
      let foundProduct: Productc | undefined;
      const updatedCartItems = state.cartItems.filter((item: Productc) => {
        if (item._id === product._id) {
          foundProduct = item;
          return false; // Remove the item from the cart
        }
        return true; // Keep other items in the cart
      });
  
      if (foundProduct) {
        const updatedTotalPrice = state.totalPrice - (foundProduct.price * foundProduct.quantity);
        const updatedTotalQuantities = state.totalQuantities - foundProduct.quantity;
  
        return {
          cartItems: updatedCartItems,
          totalPrice: updatedTotalPrice,
          totalQuantities: updatedTotalQuantities,
          getshoulder: state.getshoulder,
          showCart: state.showCart,
        };
      }
  
      return state; // If no item is found, return the current state
    });
  },
  
  addToCart: (product, quantity, stock, shoulder, sleeve, collar, chest, hip, last, blouse, dotpoint, waistaround, BeltFit, hipLine, pant, sizeslect, sSkirt, sleevee, collare, pocket, pante, Cusian, color) => {
    set((state: GenerationState) => {
      const checkProductInCart = state.cartItems.find((item: Productc) => item._id === product._id);
  
      const updatedTotalPrice = state.totalPrice + product.price * quantity;
      const updatedTotalQuantities = state.totalQuantities + quantity;
      const updatestock = state.totallstock;
      const updateshoulder = state.totallshoulder;
      const updatesleeve = state.totallsleeve;
      const updatecollar = state.totallcollar;
      const updatechest = state.totallchest;
      const updatehip = state.totallhip;
      const updatelast = state.totalllast;
      const updateblouse = state.totallblouse;
      const updatedotpoint = state.totalldotpoint;
      const updatewaistaround = state.totallwaistaround;
      const updateBeltFit = state.totallBeltFit;
      const updatehipLine = state.totallhipLine;
      const updatepant = state.totallpant;
      const updatesizeslect = state.sizeslect;
      const updatesSkirt = state.sSkirt;
      const updatesleevee = state.sleevee;
      const updatecollare = state.collare;
      const updatepocket = state.pocket;
      const updatepante = state.pante;
      const updateCusian = state.Cusian;
      const updatecolor = state.color
  
      let updatedCartItems;
      if (checkProductInCart) {
        updatedCartItems = state.cartItems.map((cartProduct: Productc) =>
          cartProduct._id === product._id
            ? { ...cartProduct, quantity: cartProduct.quantity + quantity, stock: cartProduct.stock, shoulder: cartProduct.shoulder, sleeve: cartProduct.sleeve, collar: cartProduct.collar, chest: cartProduct.chest, hip: cartProduct.hip, last: cartProduct.last, blouse: cartProduct.blouse, dotpoint: cartProduct.dotpoint, waistaround: cartProduct.waistaround, BeltFit: cartProduct.BeltFit, hipLine: cartProduct.hipLine, pant: cartProduct.pant, sizeslect: cartProduct.sizeslect, sSkirt: cartProduct.sSkirt, sleevee: cartProduct.sleevee, collare: cartProduct.collare, pocket: cartProduct.pocket, pante: cartProduct.pante, Cusian: cartProduct.Cusian, color: cartProduct.color }
            : cartProduct
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...product, quantity, stock, shoulder, sleeve, collar, chest, hip, last, blouse, dotpoint, waistaround, BeltFit, hipLine, pant, sizeslect, sSkirt, sleevee, collare, pocket, pante, Cusian, color }];
      }
  
      return {
        cartItems: updatedCartItems,
        totalPrice: updatedTotalPrice,
        totalQuantities: updatedTotalQuantities,
        totallstock: updatestock,
        totallshoulder: updateshoulder,
        totallsleeve: updatesleeve,
        totallcollar: updatecollar,
        totallchest: updatechest,
        totallhip: updatehip,
        totalllast: updatelast,
        totallblouse: updateblouse,
        totalldotpoint: updatedotpoint,
        totallwaistaround: updatewaistaround,
        totallBeltFit: updateBeltFit,
        totallhipLine: updatehipLine,
        totallpant: updatepant,
        sizeslect: updatesizeslect,
        sSkirt: updatesSkirt,
        sleevee: updatesleevee,
        collare: updatecollare,
        pocket: updatepocket,
        pante: updatepante,
        Cusian: updateCusian,
        color: updatecolor,
        getshoulder: state.getshoulder,
        showCart: state.showCart,
      };
    });
  },

  toggleCartItemQuantity: (id, value) => {
    set((state) => {
      const foundProduct = state.cartItems.find((item) => item._id === id);

      if (!foundProduct) {
        return state;
      }

      const newCartItems = state.cartItems.filter((item) => item._id !== id);

      if (value === 'inc') {
        const updatedQuantity = foundProduct.quantity + 1;
        const updatedTotalPrice = state.totalPrice + foundProduct.price;
        const updatedTotalQuantities = state.totalQuantities + 1;

        return {
          cartItems: [...newCartItems, { ...foundProduct, quantity: updatedQuantity }],
          totalPrice: updatedTotalPrice,
          totalQuantities: updatedTotalQuantities,
        };
      } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
          const updatedQuantity = foundProduct.quantity - 1;
          const updatedTotalPrice = state.totalPrice - foundProduct.price;
          const updatedTotalQuantities = state.totalQuantities - 1;

          return {
            cartItems: [...newCartItems, { ...foundProduct, quantity: updatedQuantity }],
            totalPrice: updatedTotalPrice,
            totalQuantities: updatedTotalQuantities,
          };
        }
      }

      return state;
    });
  },
  
  tabType: "Clothes",
  settabType: (tabType: string) => set({ tabType }),
  CType: "Female",
  setCType: (CType: string) => set({ CType }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  iscoat: false,
  setiscoat: (iscoat: boolean) => set({ iscoat }),
  hidecoat: true,
  sethidecoat: (hidecoat: boolean) => set({ hidecoat }),
  hidejew: true, 
  sethidejew: (hidejew: boolean) => set({ hidejew }), 
  isjew: false, 
  setisjew: (isjew: boolean) => set({ isjew }),
  sluger: null,
  setSluger: (sluger: Productb | null) => set({ sluger }),
  allproducts: null,
  setAllProducts: (allproducts: any[] | null) => set({ allproducts }),
   index: 0,
   setIndex: (index: number) => set({ index }),
}))
