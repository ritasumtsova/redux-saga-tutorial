import { ErrorInitState } from "../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const errorSelector = (state: rootState): ErrorInitState => state.error;