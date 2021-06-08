import { combineReducers } from 'redux';
import cart from './addtocart';
import addremovecurruser from './addremovecurruser';

export default combineReducers({
    cart,
    addremovecurruser
})