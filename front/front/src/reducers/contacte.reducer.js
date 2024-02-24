import { contactes } from '../actions/constantes';

const initialState = {
  contacts: [],
  error: null,
  contez:[],
  contezz:[]
};
 const red =(state = initialState, action) => {
  switch (action.type) {
    case contactes.get_request:
      return state;

    case contactes.get_success:
      return {
        ...state,
        contacts: action.payload.contacte,
      };

    case contactes.get_fail:
      return {
        ...state,
        error: action.payload.error,
      };
      case contactes.post_success:
      return {
        ...state,
        contez: action.payload.contactez,
      };
      case contactes.post_fail:
      return {
        ...state,
        error: action.payload.error,
      };
      case contactes.delete_success:
      return {
        ...state,
        contezz: action.payload.contactezz,
      };
      case contactes.delete_fail:
      return {
        ...state,
        error: action.payload.error,
      };
      case contactes.put_success:
        return {
          ...state,
          contezzz: action.payload.contactezz,
        };
        case contactes.put_fail:
        return {
          ...state,
          error: action.payload.error,
        };

    default:
      console.log('default actions');
      return state; 
  }
};
export default red