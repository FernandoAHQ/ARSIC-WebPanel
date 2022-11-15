export interface RespAlluser{

    status : boolean;
    users? : DataUsers[];
    totalResults: number;

}

export interface DataUsers{

    isActive: boolean;
    name:     string;
    username: string;
    role?:     string;
    image:    string;
    online:   string;
    _id:      string;


}
