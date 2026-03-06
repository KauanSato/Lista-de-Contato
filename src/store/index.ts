import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './redurcers/contatos'
import filtroReducer from './redurcers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
