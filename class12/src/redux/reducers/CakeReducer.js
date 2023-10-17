import { BUY_CAKE, RESTOCK_CAKES } from "../../constants/CakeConstants";

const initialState = {
    cakes: 15,
    message: undefined
};

const CakeReducer = (state = initialState, action) => {
    // vrz tipot na akcijata, bi imale nekoi cases
    switch(action.type) {
        case BUY_CAKE: 
            // Dokolku nema dovolno torti na lager, ne pravime nisto tuku samo vrakame poraka deka nema dovolno torti
            if(state.cakes - action.payload < 0 ) {
                return {...state, message: `You cannot buy ${action.payload} that amount of cakes only ${state.cakes} left.`}
            } else {
                // Dokolku imame dovolno torti, samo gi odzemame tortite od vkupniot broj na torti sto gi imame momentalno
                return {...state, cakes: state.cakes - action.payload}
            }
        case RESTOCK_CAKES:
            return {...state, cakes: action.payload}
        // I sekogas imame default state kade sto g vrakame state
        default: return state;
    }
};

export default CakeReducer;