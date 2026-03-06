import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Kauan',
      numero: '(19)99999-9999',
      email: 'kauan@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 2,
      nome: 'Paulo',
      numero: '(19)99999-9999',
      email: 'paulo@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 3,
      nome: 'Ana',
      numero: '(19)99999-9999',
      email: 'ana@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 4,
      nome: 'Anais',
      numero: '(19)99999-9999',
      email: 'anais@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 5,
      nome: 'Ana Paula',
      numero: '(19)99999-9999',
      email: 'anapaula@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    },
    {
      id: 6,
      nome: 'Paulo Jorge',
      numero: '(19)99999-9999',
      email: 'paulojorge@gmail.com',
      prioridade: enums.Prioridade.NORMAL
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já extiste um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    favoritar: (state, action: PayloadAction<{ id: number; fav: boolean }>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].prioridade = action.payload.fav
          ? enums.Prioridade.FAVORITOS
          : enums.Prioridade.NORMAL
      }
    },
    bloquear: (
      state,
      action: PayloadAction<{ id: number; block: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].prioridade = action.payload.block
          ? enums.Prioridade.BLOQUEADO
          : enums.Prioridade.NORMAL
      }
    }
  }
})

export const { remover, editar, cadastrar, favoritar, bloquear } =
  contatoSlice.actions
export default contatoSlice.reducer
