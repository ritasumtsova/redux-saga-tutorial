export interface News {
  hits: Array<APieceOfNews>;
}

export interface APieceOfNews {
  objectID: string | number;
  url: string;
  title: string;
  points: number;
  num_comments: number;
  created_at: string;
  author: string
}
