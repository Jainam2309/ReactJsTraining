export function CartReducer(state,action) {
    switch(action.type) {
        case "ADD_TO_CART":
            const exists = state.find(item => item.id === action.item.id);
            if(exists) {
                return state.map(item => 
                    item.id === action.item.id? {...item, qty: item.qty + 1 } : item
                );
            }
            return  [...state, { ...action.item, qty: 1 }];

            case "REMOVE_FROM_CART" :
                return state.filter(item => item.id !== action.id);
                
                case "CHANGE_QTY" :
                    return state.map(item=>
                        item.id === action.id ? {...item, qty: action.qty} : item
                    );

                    case "LOAD_CART": 
                    return action.payload;

                    default :
                    return state;
    }
}