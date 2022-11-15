export interface RespDepartment {
    status:      boolean;
    departments: Department[];
}

export interface Department {
    _id:       string;
    name:      string;
    ubication: string;
    user:      User;
}

export interface User {
    _id:      string;
    name:     string;
    username: string;
    password: string;
    image:    string;
    role:     string;
    online:   boolean;
    isActive: boolean;
    __v:      number;
}


export interface RespRegisterPC {
    status:      boolean;
    message:     string;
    newComputer: NewComputer;
}

export interface NewComputer {
    department: string;
    folio:      string;
    status:     string;
    _id:        string;
}
