import {Record} from 'immutable'
import {DECREMENT, INCREMENT} from "../actions/count";

const InitialState = Record({
  count: 0
})

const initialState = new InitialState

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.withMutations(ctx => {
        ctx.set('count', state.count+1)
      })
    case DECREMENT:
      return state.withMutations(ctx => {
        ctx.set('count', state.count-1)
      })
    default:
      return state
  }
}