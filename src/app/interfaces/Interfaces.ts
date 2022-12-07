import { DataSource } from "@angular/cdk/collections";
import { AbstractType } from "@angular/core";
import { DataUsers } from "./InterfaceAllUser";
import { Severity } from './RespApi';

export interface LoginInterface{

    status:         boolean;
    deptartament?:    Department;
    user?:          User;
    menu?:          Menu[];
    accessToken?:   string;
    message?:       string;
}


export interface Menu {
    titulo:         string;
    icono:          string;
    url:            string;
}

export interface User{

  image:      string;
  _id:        string;
  name:       string;
  username:   string;
  role:       string;
  online:     boolean;
  isActive: boolean;

}

export interface Department{

  image:      string;
  _id:        string;
  name:       string;
  ubication:   string;

}

export interface RespuestaRegistrarUsuario{

    status:     boolean;
    message?:   string;

    user?:{
        name:       string;
        username:   string;
        image:      string;
        role:       string;
        online:     boolean;
        isActive:   boolean;
        _id:        string;
    }

    accessToken?:    string;
}


export interface RespEditar {
    message: string;
    status:  boolean;
    user:    User_Editar;
}

export interface User_Editar {
    _id:      string;
    name:     string;
    username: string;
    image:    string;
    role:     string;
    online:   boolean;
    isActive: boolean;
}



export interface RegistrarUsuario{


        name:       string;
        role:       string;
        username:   string;
        password:   string;


}



export interface Service{
    _id: string,
    createdAt: Date,
    report: Report,
    staff?: User,
    status: string,
    updatedAt: Date,
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

export interface Department {
    _id:       string;
    name:      string;
    ubication: string;
    user:      string;
    __v:       number;
}



export interface AssignInterface{

    from:       string;
    to:         string;
    service:    any;
    severity:   string;
    depto:      string;

}


export interface RespBitacora {
    status:       boolean;
    bitacora:     Bitacora[];
    totalResults: number;
}

export interface Bitacora {
    _id:         string;
    description: string;
    solution:    string;
}


export interface RespuestaCrearPeriodo {
  status:  boolean;
  message: string;
  periodoNuevo:  Period;
}
export interface RespuestaAsignarTarea {
  status:  boolean;
  message: string;
  task:  Tarea;
}

export interface Period {
    name:      string;
    startDate: Date;
    finalDate: Date;
    isActive:  boolean;
    _id:       string;
}


export interface GetAllPeriodos {
    status:       boolean;
    periods:      Period[];
    totalResults: number;
}

export interface GradeInterface {
  dificulty: number;
  quality: number;
}

export interface Tarea {
  _id: string,
  name: string;
  description: string;
  asignments: [{
    assignedTo: DataUsers;
    time: number
  }]
}
  export interface taskLog {
    _id: string,
    task: Tarea,
    user: User,
    observation: string,
    solution: string,
    severity: string,
    date: Date

}
