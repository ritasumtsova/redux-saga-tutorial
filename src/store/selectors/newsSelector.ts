import { NewsInitState } from "../../types/store/initStateInterfaces";
import { rootState } from '../../types/store/rootStateType';

export const newsSelector = (state: rootState): NewsInitState => state.news;