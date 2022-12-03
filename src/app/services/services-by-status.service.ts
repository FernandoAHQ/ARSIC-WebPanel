import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map, catchError, tap } from 'rxjs/operators';
import { Service, RespTableServices, GetRoles, Role, GetStatus, Status, GetSeverities, Severity, GetActivateUsers, ChicoServicio, GetAllComputers, Computer, Ap, GetAllAps, GetAllVlans, VLAN, Switch, GetAllSwitches, RespRegisterVLAN, RespUpdateVLAN, RegisterAp, RespUpdateAp, RespTableTasks, TaskLogsResponse } from '../interfaces/RespApi';
import { RespBitacora, Bitacora, RespuestaCrearPeriodo, Tarea, RespuestaAsignarTarea, taskLog } from '../interfaces/Interfaces';
import { Ranking } from '../interfaces/interfaceRanking';
import { Department, RespDepartment, RespRegisterPC, RespSpecs } from '../interfaces/InterfaceAllDepartment';






@Injectable({
  providedIn: 'root'
})
export class ServicesByStatusService {


  private baseURL: string = environment.baseURL + '/api';
  private Servicios!:             Service[];
  private Roles!:                 Role[]
  private Status!:                Status[]
  private Severities!:            Severity[];
  private ChicosServicioActivos!: ChicoServicio[];
  private bitacora!:             Bitacora[];
  private inventory!:             Computer[];
  private Aps!:                   Ap[];
  private Vlans!:                 VLAN[];
  private Switches!:              Switch[];
  private Deparments!:             Department[];
  private Tasks!:             Tarea[];
  private TaskLogs!:             taskLog[];


  get DataTable(){ return {...this.Servicios}}

  get DataRoles(){ return {...this.Roles}}

  get DataStatus() {return {...this.Status}}

  get DataSeverities(){ return {...this.Severities}}

  get DataBitacora(){ return {...this.bitacora} }

  get DataInventory(){ return {...this.inventory} }

  get DataAps(){ return {...this.Aps} }

  get DataVlan(){ return {...this.Vlans} }

  get DataSwitches(){ return {...this.Switches} }

  get DataDeparments(){ return {...this.Deparments} }

  get DataTasks(){ return {...this.Tasks} }

  get DataTaskLogs(){ return {...this.TaskLogs} }


  constructor(private http: HttpClient) { }

  Get_ServicesAPI(status : string, page: any){

    const url= `${this.baseURL}/services/all/${status}?page=${page}`;
    return this.http.get<RespTableServices>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.Servicios= resp.services!;
          this.Servicios.forEach((servicio)=>{
            servicio.status= this.statusTranslate(servicio as Service)
          })
        }
      })

    )
  }


  Get_RolesAPI(){

    const url= `${this.baseURL}/auth/roles`

    return this.http.get<GetRoles>(url)
    .pipe(
      tap(resp=>{
        this.Roles = resp.roles!;
      })
    )

  }

  Get_Departments(){

    const url = `${this.baseURL}/departments/all`

    return this.http.get<RespDepartment>(url).pipe(
      tap(resp=>{
        this.Deparments = resp.departments
      })
    )

  }

  getSpecs(){

    const url = `${this.baseURL}/inventory/specs`

    return this.http.get<RespSpecs>(url).pipe(
      tap(resp=>{
        //this.Deparments = resp.departments
      })
    )

  }


  Get_StatusAPI(){

    const url= `${this.baseURL}/services/status`

    return this.http.get<GetStatus>(url)
    .pipe(
      tap(resp=>{
        this.Status= resp.status;
      })
    )


  }


  Get_SeveritiesAPI(){

    const url= `${this.baseURL}/services/severity`

    return this.http.get<GetSeverities>(url)
    .pipe(
      tap(resp=>{

        this.Severities= resp.severities;

      })
    )
  }

  Get_ActiveUsersAPI(){

    const url= `${this.baseURL}/users/all/active`
    return this.http.get<GetActivateUsers>(url)
    .pipe(
      tap(resp=>{

        this.ChicosServicioActivos= resp.users

      })

    )


  }

  statusTranslate(element : Service):string{

    switch(element.status){
      case 'assigned':
        return 'Asignado';

      case 'not-assigned':
        return 'Sin Asignar';

      case 'pending':
        return 'Pendiente';

        case 'cancelled':
          return 'Cancelado';

          case 'finalized':
            return 'Finalizado';
    }
    return "Otro";
  }



  GetBitacora(PaginaActual:any){

    const url= `${this.baseURL}/services/bitacora?page=${PaginaActual}`
    return this.http.get<RespBitacora>(url).pipe(
      tap(resp=>{

        this.bitacora = resp.bitacora

      })
    )

  }

  CrearNuevoPeriodos(name:string, startDate: string, finalDate:string){

    const url= `${this.baseURL}/periods/create`
    const body= {name, startDate, finalDate}

    return this.http.post<RespuestaCrearPeriodo>(url,body).pipe(
      tap(resp=>{

      })
    )


  }

  asignarTarea(task:string, user: string, time:number){

    const url= `${this.baseURL}/tasks/assign`
    const body= {task, user, time}
    return this.http.post<RespuestaAsignarTarea>(url,body).pipe(
      tap(resp=>{

      })
    )


  }

  registrarTarea(name:string, description: string){

    const url= `${this.baseURL}/tasks/newTask`
    const body= {name, description}
    return this.http.post<{status: boolean, message: string}>(url,body).pipe(
      tap(resp=>{

      })
    )


  }


  GetRanking(){

    const url = `${this.baseURL}/periods/active`

    return this.http.get<Ranking>(url).pipe(
    tap(resp=>{
       })
    )


  }


  GetInventory(type:any, page:any){

    const url= `${this.baseURL}/inventory/${type}?page=${page}`

    return this.http.get<GetAllComputers>(url).pipe(
      tap(resp=>{

        this.inventory = resp.computers

      })
    )

  }

  GetInventoryAp(type:any){

    const url= `${this.baseURL}/inventory/${type}`

    return this.http.get<GetAllAps>(url).pipe(
      tap(resp=>{

        this.Aps = resp.aps

      })
    )

  }

  GetInventoryVlan(type:any){

    const url= `${this.baseURL}/inventory/${type}`

    return this.http.get<GetAllVlans>(url).pipe(
      tap(resp=>{

        this.Vlans = resp.vlans

      })
    )

  }

  GetInventorySwitches(type:any){

    const url= `${this.baseURL}/inventory/${type}`

    return this.http.get<GetAllSwitches>(url).pipe(
      tap(resp=>{

        this.Switches = resp.switches

      })
    )

  }


  PostRegistrarPC(
    department:any, folio:any, status: any,
    os:any, processor: any, ram:any, motherboard:any, type:any, capacity:any
    ){

    const url= `${this.baseURL}/inventory/computers/register`
    const body={
      department,
      folio,
      status,
      specs:{
        os,
        processor,
        ram,
        motherboard,
        storage:{
          type,
          capacity
        }
      }
    }
    console.log(body);
    return this.http.post<RespRegisterPC>(url, body).pipe(
      tap(resp=>{
        console.log("RESP--->")
        console.log(resp.status);

      })
    )


  }


  ActualizarPC(id:any, department:any, folio:any, status: any,
    os:any, processor: any, ram:any, motherboard:any, type:any, capacity:any){
    const url= `${this.baseURL}/inventory/computers/update`
    const body={
      id,department, folio, status,
      specs:{
        os,
        processor,
        ram,
        motherboard,
        storage:{
          type,
          capacity
        }
      }}
    console.log(body);

    return this.http.post(url,body).pipe(
      tap(resp=>{
        console.log(resp);
      })
    )
  }


  PostRegistrarAP(body:any){
    const url= `${this.baseURL}/inventory/aps/register`
    return this.http.post<RespRegisterVLAN>(url,body).pipe(
      tap(resp=>{
        console.log(resp)
      })
    )
  }

  ActualizarAp(body:any){

    const url= `${this.baseURL}/inventory/aps/update`
    return this.http.post<RespUpdateAp>(url,body).pipe(
      tap(resp=>{
        console.log(resp)
      })
    )

  }


  PostRegistrarVLAN(body:any){
    const url= `${this.baseURL}/inventory/vlans/register`
    return this.http.post<RespRegisterVLAN>(url,body).pipe(
      tap(resp=>{
        console.log(resp)
      })
    )

  }


  actualizatVLAN(body:any){

    const url= `${this.baseURL}/inventory/vlans/update`
    return this.http.post<RespUpdateVLAN>(url,body).pipe(
      tap(resp=>{

      })
    )

  }

  Get_TasksAPI(page: any){

    const url= `${this.baseURL}/tasks?page=${page}`;
    return this.http.get<RespTableTasks>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.Tasks= resp.tasks!;

        }
      })

    )
  }

  Get_TaskLogsAPI(page: any){

    const url= `${this.baseURL}/tasks/registered?page=${page}`;
    return this.http.get<TaskLogsResponse>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.TaskLogs= resp.registros!;

        }
      })

    )
  }

}
