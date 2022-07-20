import { CombinedState, combineReducers, Reducer } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { IReducer } from '../page/home/types';
import { cardReducer } from './card';

export const rootReducer: Reducer<CombinedState<IReducer>> = combineReducers({
    card: cardReducer,
    form: reduxFormReducer,
});


