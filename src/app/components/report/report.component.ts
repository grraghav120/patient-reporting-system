import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild('patientForm') patientForm!:NgForm;
  openfirst: boolean=false;
  openHilum: boolean=false;
  openMasses: boolean=false;
  openCavity: boolean=false;
  openOpacity: boolean=false;
  openTrachea: boolean=false;
  openMedia: boolean=false;
  openCardic:boolean=false;
  openAortic:boolean=false;
  openPneumothorax:boolean=false;
  fracture:boolean=false;
  openbony:boolean=false;
  openBonyCage:boolean=false;
  openBreastShadow: boolean=false;
  openDiaphragm: boolean=false;
  openSoftTissue: boolean=false;
  openCostophrenicAngles: boolean=false;

  constructor(public dialog: MatDialog){}

  CardiacShape:any="";
  bronchovascularmarking="";
  bronchovascularmarkingSide=""
  bronchovascularmarkingRegion="";
  opacity="";
  opacitySide="";
  opacityRegion="";
  cavity="";
  cavitySide="";
  cavityRegion="";
  massesSide="";
  masses="";
  massesRegion="";
  hilum="";
  trachea="";
  tracheaShiftSide="";
  mediastinal="";
  mediastinalShiftSide="";
  CardiacSize=""; 
  CardiacShapeAbnormal="";
  BreastShadow="";
  BreastShadowSide=""
  Diaphragm="";
  DiaphragmSide="";
  SoftTissue="";
  SoftTissueSide="";
  FractureRibNumber="";
  Bonylesion="";
  FractureSide="";
  Finding="";
  BonyCage="";
  BonyCageSide="";
  Pneumothorax="";
  PneumothoraxSide="";
  CostophrenicAngles="";
  CostophrenicAnglesSide="";
  LymphNodes="";
  AorticKnuckleAbnormal="";
  AorticKnuckle="";
  ngOnInit(): void {
    
  }
  onChangeBroncho(event:any){
    if(event.target.value==='Prominent') this.openfirst=true;
    else this.openfirst=false;
  }
  onCavity(event:any){
    if(event.target.value==='Present') this.openCavity=true;
    else this.openCavity=false;
  }
  onMasses(event:any){
    if(event.target.value==='Present') this.openMasses=true;
    else this.openMasses=false;
  }

  onHilum(event:any){
    if(event.target.value==='Prominent') this.openHilum=true;
    else this.openHilum=false;
  }
  onOpacity(event:any){
    if(event.target.value==='Present') this.openOpacity=true;
    else this.openOpacity=false;
  }
  onTrachea(event:any){
    if(event.target.value==='Shift') this.openTrachea=true;
    else this.openTrachea=false;
  }
  onMediastinal(event:any){
    if(event.target.value==='shifted') this.openMedia=true;
    else this.openMedia=false;
  }
  onCardicShapeAbnormal(event:any){
    if(event.target.value==='Abnormal') this.openCardic=true;
    else this.openCardic=false;
  }
  onAortic(event:any){
    if(event.target.value==='Prominent') this.openAortic=true;
    else this.openAortic=false;
  }
  onPneumothorax(event:any){
    if(event.target.value==='Present') this.openPneumothorax=true;
    else this.openPneumothorax=false;
  }

  onFinding(event:any){
    if(event.target.value==='fracture'){
      this.fracture=true;
      this.openbony=false;
    }
    else{
      this.openbony=true;
      this.fracture=false;
    }
  }

  onBonyCage(event:any){
    if(event.target.value==='Abnormal') this.openBonyCage=true;
    else this.openBonyCage=false;
  }

  onDiaphragm(event:any){
    if(event.target.value==='Abnormal') this.openDiaphragm=true;
    else this.openDiaphragm=false;
  }

  onBreastShadow(event:any){
    if(event.target.value==='Abnormal') this.openBreastShadow=true;
    else this.openBreastShadow=false;
  }

  onSoftTissue(event:any){
    if(event.target.value==='Present') this.openSoftTissue=true;
    else this.openSoftTissue=false;
  }

  onCostophrenicAngles(event:any){
    if(event.target.value==='Blunt') this.openCostophrenicAngles=true;
    else this.openCostophrenicAngles=false;
  }
  onClick(patientForm:NgForm){
    console.log(patientForm);
    if(patientForm.invalid){
      this.openDialog();
    }
  }

  openDialog(){
    let dialogRef=this.dialog.open(AlertComponent,{
      width:'auto',
      height:'auto',
      data:{msg:'fields'},
    });
  }

  onReset(){
    this.patientForm.reset();
    this.openfirst=false;
    this.openHilum=false;
    this.openMasses=false;
    this.openCavity=false;
    this.openOpacity=false;
    this.openTrachea=false;
    this.openMedia=false;
    this.openCardic=false;
    this.openAortic=false;
    this.openPneumothorax=false;
    this.fracture=false;
    this.openbony=false;
    this.openBonyCage=false;
    this.openBreastShadow=false;
    this.openDiaphragm=false;
    this.openSoftTissue=false;
    this.openCostophrenicAngles=false;

  }

}