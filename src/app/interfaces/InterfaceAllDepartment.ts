export interface RespDepartment {
    status:      boolean;
    departments: Department[];
}

export interface RespSpecs {
  status: boolean;
  systems: OperatingSystem[];
  processors: Processor[];
  motherboards: Motherboard[];
  rams: RAM[];
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

export interface OperatingSystem {
  name: string;
  version: string;
  arquitectura: string;
  _id:        string;
}


export interface Motherboard {
  brand: string;
  model: string;
  _id: string;
}


export interface RAM {
  size: string;
  type: string;
  _id:        string;
}

export interface Processor {
  brand: string;
  model: string;
  _id: string;
}

