import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const LIST = 'boardlist/LIST';

export const list = createAction(LIST);

const initalState = Map({
  name:'a',
  size:'a',
  account:'a'

});


//리듀서
export default handleActions({
    [LIST]: (state, action) => {
       // const { payload: filedata } = action;
        return state.set('filedata', true);
      }
},initalState)