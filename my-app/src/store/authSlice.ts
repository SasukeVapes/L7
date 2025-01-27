import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  title: string;
  picture: string;
  description: string;
  price: string;
  customerName: string;
  customerAddress: string;
}


interface AuthState {
  userName: string | null;
  token: string | null;
  role: string | null;
  email: string | null;
  cards: Card[] | null;
}

const initialState: AuthState = {
  userName: null,
  token: null,
  role: null,
  email: null,
  cards: [
    {
      title: 'Order 1',
      picture: '/Book1.jpg',
      description: 'Emdroded Ametyst Rainbow VII.',
      price: '$9000',
      customerName: 'Lord Baldwin',
      customerAddress: 'ballsCastle,79 LongRoad'
    },
    {
      title: 'Order 2',
      picture: '/Book2.jpg',
      description: 'Void & Abyss, Emerald.',
      price: '$12700',
      customerName: 'Mc Feetisher',
      customerAddress: 'oldfstreet, lostDreams bulivard, 69'
    },
    {
      title: 'Order 3',
      picture: '/Book3.jpg',
      description: 'Sorrow n Agony of the Mefen.',
      price: '$2000',
      customerName: 'MitchelMcBallRib',
      customerAddress: 'BellEnd rully, hitfromtheback strett, 65'
    },
    {
      title: 'Order 4',
      picture: '/Book4.jpg',
      description: 'Oblivion - full History by Mavrodiy Avreliy.',
      price: '$5478',
      customerName: 'George',
      customerAddress: 'All or nothing street, kys98'
    },
    {
      title: 'Order 5',
      picture: '/Book5.jpg',
      description: 'Iron Depicted Skyrim.',
      price: '$500',
      customerName: 'Deez Cohnwhoyey',
      customerAddress: 'sloppyhump street, badbJ420'
    },
    {
      title: 'Order 6',
      picture: '/Book6.jpg',
      description: 'The Reader shell die thy was thi order.',
      price: '$3 0000 000',
      customerName: 'Special Name',
      customerAddress: 'The other End, no explanation st.'
    }
  ],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setToken, setEmail,  setPlayerName, setCards } = authSlice.actions;
export default authSlice.reducer;