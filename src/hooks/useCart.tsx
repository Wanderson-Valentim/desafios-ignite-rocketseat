import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  /*async function loadProduct(id: number) {
    try{
      const { data } = await api.get('/products/' + 60)
      const product = await response.data
      const formatProduct: Product = await {
        ...product,
        amount: 1
      }
      return formatProduct
    }
    catch(error){
      toast.error('Quantidade solicitada fora de estoque');
    }
  }*/

  async function haveStock(id: number, amount:number) {
    try{
      const response = await api.get('/stock/' + id)
      const product = await response.data
      const stock: Stock = {
        ...product
      }
      return stock.amount - amount >= 0
    }
    catch(error){
      console.log(error)
    }
  }

  const addProduct = async (productId: number) => {
    try {
      const cartIndex = cart.findIndex( product => product.id === productId)
      
      if(cartIndex === -1){
        const response = await api.get('/products/' + productId)
        const product = await response.data
        const formatProduct: Product = await {
          ...product, 
          amount: 1
        }
        const stock = await haveStock(productId, 1)

        if(stock){
          const newCart = [
            ...cart,
            formatProduct
          ]
          setCart(newCart as Product[])
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
        }
        else{
          toast.error('Quantidade solicitada fora de estoque');
        }
      }

      else{
        const stock = await haveStock(productId, cart[cartIndex].amount + 1)

        if(stock){
          const newCart = [...cart]
          newCart[cartIndex].amount += 1
          setCart(newCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
        }
        else{
          toast.error('Quantidade solicitada fora de estoque');
        }
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const cartIndex = cart.findIndex( product => product.id === productId)
      if(cartIndex === -1){
        toast.error('Erro na remoção do produto');
      }
      else{
        const newCart = [...cart]
        newCart.splice(cartIndex, 1)
        setCart(newCart)
        localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const cartIndex = cart.findIndex( product => product.id === productId)
      
      if(cartIndex === -1){
        toast.error('Erro na alteração de quantidade do produto');
      }
      else{
        const stock = await haveStock(productId, amount)

        if(stock && amount !== 0){
          const newCart = [...cart]
          newCart[cartIndex].amount = amount
          setCart(newCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newCart))
        }
        else{
          toast.error('Quantidade solicitada fora de estoque');
        }
      }
    } catch {
      
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
