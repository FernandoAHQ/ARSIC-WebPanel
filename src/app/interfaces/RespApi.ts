import { Motherboard, OperatingSystem, Processor, RAM } from "./InterfaceAllDepartment";
import { Tarea, taskLog } from "./Interfaces";

export interface RespTableServices {
  status:       boolean;
  services:     Service[];
  totalResults: number;
}

export interface RespTableTasks {
  status:       boolean;
  tasks:     Tarea[];
  totalResults: number;
}

export interface Service {
    _id:            string;
    period:         string;
    report:         Report;
    user:           AssignedTo;
    status:         string;
    device:         any[];
    staff:          any[];
    isRanked:       boolean;
    createdAt:      Date;
    updatedAt:      Date;
    assignedTo:     AssignedTo;
    severity:       string;
    description:    string;
    feedback:       string;
    solution:       string;
    evidenceImage?: string;
}

export interface Report{
  _id: string,
  category: string,
  createdAt: Date,
  department: Department,
  description: string,
  isAssigned: boolean,
  title: string,
  updatedAt: Date
}


export interface User {
    _id:      string;
    name:     string;
    username: string;
}

export interface AssignedTo {
    _id?:      string;
    name?:     string;
    username?: string;
}


export interface GetRoles {
    roles: Role[];
}

export interface Role {
    value: string;
    name:  string;
}

export interface GetStatus {
    status: Status[];
}

export interface Status {
    value: string;
    name:  string;
}


export interface GetSeverities {
    severities: Severity[];
}

export interface Severity {
    value: string;
    name:  string;
}


export interface GetActivateUsers {
    status: boolean;
    users:  ChicoServicio[];
}

export interface ChicoServicio {
    _id:      string;
    name:     string;
    username: string;
    image:    string;
    role:     Role;
    online:   boolean;
    isActive: boolean;
}

export enum RoleSite {
    SiteRole = "SITE_ROLE",
}

export interface GetAllComputers {
    status:       boolean;
    computers:    Computer[];
    totalResults: number;
}

export interface Computer {
    _id:        string;
    department: Department;
    folio:      string;
    status:     string;
    specs: {
      os: OperatingSystem,
      processor: Processor,
      ram: RAM,
      motherboard: Motherboard,
      storage: {
        type: String,
        capacity: String
      }
    }
}

export interface Department {
    _id:       string;
    name:      string;
    ubication: string;
    user:      string;
    __v:       number;
}

export interface Encargado {
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

export interface GetAllAps {
    status:       boolean;
    aps:          Ap[];
    totalResults: number;
}

export interface Ap {
    _id:       string;
    etiqueta:  string;
    mac:       string;
    serie:     string;
    usuario:   string;
    password:  string;
    marca:     string;
    modelo:    string;
    ubicacion: string;
}

export interface GetAllVlans {
    status:       boolean;
    vlans:        VLAN[];
    totalResults: number;
}

export interface RespUpdateVLAN {
    status:  boolean;
    message: string;
    vlan:    VLAN;
}

export interface VLAN {
    _id:          string;
    vlan:         string;
    name:         string;
    ip:           string;
    mask:         string;
    gateway:      string;
    broadcast:    string;
    staticStart:  string;
    staticEnd:    string;
    dynamicStart: string;
    dynamicEnd:   string;
}

export interface GetAllSwitches {
    status:       boolean;
    switches:     Switch[];
    totalResults: number;
}

export interface Switch {
    _id:           string;
    name:          string;
    building:      string;
    user:          string;
    ip:            string;
    mask:          string;
    password:      string;
    adminPorts:    string[];
    trunkPort:     string;
    brand:         string;
    model:         string;
    serie:         string;
    ethernetPorts: number[];
    gigabitPorts:  number[];
    sfpPorts:      number[];
    poePorts:      number[];
    console:       boolean;
}


export interface RegisterAp {
    status:  boolean;
    message: string;
    newAp:   NewAp;
}

export interface NewAp {
    etiqueta:  string;
    mac:       string;
    serie:     string;
    usuario:   string;
    password:  string;
    marca:     string;
    modelo:    string;
    ubicacion: string;
    _id:       string;
}

export interface RespUpdateAp {
    status:  boolean;
    message: string;
    ap:      Ap;
}



export interface RespRegisterVLAN {
    status:  boolean;
    message: string;
    newVlan: NewVLAN;
}

export interface NewVLAN {
    vlan:         string;
    name:         string;
    ip:           string;
    mask:         string;
    gateway:      string;
    broadcast:    string;
    staticStart:  string;
    staticEnd:    string;
    dynamicStart: string;
    dynamicEnd:   string;
    _id:          string;
}

export interface TaskLogsResponse{
  totalResults: number;
  status:  boolean;
  message: string;
  registros:      taskLog[];
}
