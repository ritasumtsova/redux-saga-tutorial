import { APieceOfNews } from './generalInterfaces';

export interface NewsInitState {
  latestNews: APieceOfNews[];
  popularNews: APieceOfNews[];
}

export interface ErrorInitState {
  latestNewsError: string;
  popularNewsError: string;
}
