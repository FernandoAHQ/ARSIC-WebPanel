export interface Ranking {
    status:  boolean;
    periodo: Periodo;
}

export interface Periodo {
    _id:     string;
    name:    string;
    ranking: RankingElement[];
}

export interface RankingElement {
    user:   User;
    points: number;
    _id:    string;
}

export interface User {
    _id:   string;
    name:  string;
    image: string;
}
