import {create} from 'zustand';

type CartItems = {
    id: string;
    name: string;
    price: number;
    total: number;
    image: string;
    count: number;
}

type CheckoutObj ={
    name : string;
    count : number;
    total : number;
}

type CheckoutInfo = {
    checkoutItems: CheckoutObj[];
    subtotal: number;
    instructions?: string | null;
    shipping: string;
    shippingDate?: string;
}

type CartStore = {
    count: number;
    subtotal: number;
    items: CartItems[];
    checkout: CheckoutInfo;
    addItem: (item : CartItems)=> void;
    removeItem: (item : CartItems[])=> void;
    deleteAll: ()=> void;
    editSubtotal: () => void;
    updateMinusQuantityTotal: (name: string) => void;
    updateAddQuantityTotal: (name: string) => void;
    addCheckoutInformation : (data: CheckoutInfo) => void;
    addCheckoutShippingDate : (data: Partial<CartStore["checkout"]>) => void;
}

export const useCartStore = create<CartStore>((set)=>({
    count: 0,
    subtotal:0,
    items: [],
    checkout: {
        checkoutItems: [],
        subtotal: 0,
        instructions: '',
        shipping: '',
        shippingDate: ''
    },
    addItem: (item) => set((state) => ({
        count: state.items.length + 1,
        items: [...state.items, item]
    })),
    removeItem: (item) => set((state) => ({
        count: state.items.length - 1,
        items: [...item]
    })),
    deleteAll: () => set((state) => ({
        count: 0,
        subtotal: 0,
        items: []
    })),
    editSubtotal: () => set((state) => ({
        subtotal: state.items?.reduce((a, b)=>
            a + b.total, 0
        )
    })),
    updateMinusQuantityTotal: (name) => set((state) => ({
        items: state.items?.map((item) => {
          return  item.name === name ? { ...item, count: item.count -1, total: item.total - item.price } : item
        }),
    })),
    updateAddQuantityTotal: (name) => set((state) => ({
        items: state.items?.map((item) => {
          return  item.name === name ? { ...item, count: item.count + 1, total: item.total + item.price } : item
        }),
    })),
    addCheckoutInformation: (data) => set((state) => ({
        checkout: {
        ...state.checkout,    
        checkoutItems: [...data.checkoutItems],
        subtotal: data.subtotal,
        instructions: data.instructions ? data.instructions : '',
        shipping: data.shipping,
        shippingDate: data.shippingDate
         }
    })),
    addCheckoutShippingDate: (data) => set((state) => ({
        checkout: {
            ...state.checkout,
            ...data,
        }
    }))
}))

