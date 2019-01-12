import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const order = {
        id: action.payload.id,
        recipe: action.payload.recipe,
        ingredients: [],
        position: 'clients'
      }
      return state.concat([order]);

    case MOVE_ORDER_NEXT:
      const movedOrderNext = { ...state.find(order => order.id === action.payload) };

      if(movedOrderNext.position === 'clients'){
        movedOrderNext.position = 'conveyor_1'
      } else if(movedOrderNext.position !== 'conveyor_4'){
        movedOrderNext.position = `conveyor_${+movedOrderNext.position.slice(-1) + 1}`
      } else if(movedOrderNext.ingredients.length > 0){
        movedOrderNext.position = 'finish'
      }
      return state.map((order) => order.id === movedOrderNext.id ? movedOrderNext : order);
    
    case MOVE_ORDER_BACK:
      const movedOrderBack = { ...state.find(order => order.id === action.payload) };

      if(movedOrderBack.position !== 'conveyor_1' && movedOrderBack.position !== 'finish'){
        movedOrderBack.position = `conveyor_${+movedOrderBack.position.slice(-1) - 1}`
      } 
      return state.map((order) => order.id === movedOrderBack.id ? movedOrderBack : order);

    case ADD_INGREDIENT:
      const modifiedOrder = { ...state.find(order => order.position === action.payload.from) };
      modifiedOrder.ingredients = [...modifiedOrder.ingredients, action.payload.ingredient]

      return state.map((order) => order.id === modifiedOrder.id ? modifiedOrder : order);
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);