import { Action } from 'redux';
import { ValidationState } from '../../state';
import { ActionType } from '../actions';
import {
	validateEditItem,
	ValidateEditItemAction,
} from '../../actions/validateEditAction';

export const defaultState: ValidationState = '';

export default function validationReducer(
	state: ValidationState = defaultState,
	action: Action,
): ValidationState {
	switch (action.type) {
		case ActionType.ValidateEditItem:
			return validateEditItem(state, action as ValidateEditItemAction);
		default:
			return defaultState;
	}
}
