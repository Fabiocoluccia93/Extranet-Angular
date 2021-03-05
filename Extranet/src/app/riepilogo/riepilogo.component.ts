import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { Anno, Avanzamento, Commessa, UsoRisorse } from '../classi/ClassiGenerali';
import { InserimentoService } from '../services/inserimento.service';


@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})

export class RiepilogoComponent implements OnInit  {

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels : Array<any> = []
  public lineChartOptions: any  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType : any =  "line";
  public lineChartPlugins = [];

  public lineChartData2: ChartDataSets[] = [];
  public lineChartLabels2 : Array<any> = []
  public lineChartOptions2: any  = {
    responsive: true,
  };
  public lineChartColors2: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend2 = true;
  public lineChartType2 : any =  "line";
  public lineChartPlugins2 = [];

  commessa : Commessa = new Commessa;

  anni : Anno [] = []
  anno : Anno = new Anno

  k : number = 0

  previsioniRicavi : any [] = []
  ricavi : any [] = []

  previsioneCosti: any [] = []
  costi : any [] = []

  usorisorse : UsoRisorse[]=[]
  usorisorse2 : UsoRisorse[]=[]

  avanzamento : Avanzamento[] = []
  avanzamento2 :Avanzamento [] = []
  grafico : boolean = false
  messaggioerrore : boolean = false
  messaggio : string = ''


  constructor(private inserimento : InserimentoService, private session : SessionStorageService) { }

  ngOnInit() {
    this.inserimento.getAnniCommesse(this.session.get('IDCOMMESSA')).subscribe(response =>{this.anni = response
    if(response.length>0)
  {
    this.messaggioerrore = false
  }
  else
  {
    this.messaggioerrore = true
    this.messaggio = "Non ci sono anni da visualizzare"
  }
  })


    this.inserimento.getMesi().subscribe(response=>{     
      for(var i = 0; i < response.length; i++)
      {
        this.lineChartLabels[i] = response[i].nome
      }
       })

       this.lineChartData = []
  }

  CambioAnno(anno : Anno)
  {
    this.grafico=true
    this.lineChartData = []
    this.lineChartData2 = []
    this.avanzamento=[]
    this.avanzamento2=[]
    this.usorisorse=[]
    this.usorisorse2=[]

    this.inserimento.getCommessaId(this.session.get('IDCOMMESSA')).subscribe(
      response=>{
        this.commessa=response 
        
        if(this.commessa.id_commessa != null)
        {
          this.inserimento.getUsoRisorse(this.commessa.id_commessa , 1 ).subscribe(
            response=>{
              console.log(response)
              for(var i=0 ; i<response.length; i++)
              {
                if(response[i].anno?.numero == anno.numero)
                {
                  this.usorisorse.push(response[i])
                }
              }
              for ( var i=0 ; i<this.lineChartLabels2.length ; i++)
              {
                this.previsioneCosti[i] = 0
                for( var k = 0 ; k<this.usorisorse.length ; k++)
                {                
                  if(this.lineChartLabels2[i] == this.usorisorse[k].mese?.nome)
                  {
                    this.previsioneCosti[i] = this.previsioneCosti[i] + this.usorisorse[k].costi 
                  }
                }
              }
            })

          this.inserimento.getUsoRisorse(this.commessa.id_commessa , 2 ).subscribe(
            response=>{
              console.log(response)
              for(var i=0 ; i<response.length; i++)
              {
                if(response[i].anno?.numero == anno.numero)
                {
                  this.usorisorse2.push(response[i])
                }
              }
              for ( var i=0 ; i<this.lineChartLabels2.length ; i++)
              {
                this.costi[i] = 0
                for( var k = 0 ; k<this.usorisorse2.length ; k++)
                {                
                  if(this.lineChartLabels2[i] == this.usorisorse2[k].mese?.nome)
                  {
                    this.costi[i] = this.costi[i] + this.usorisorse2[k].costi 
                  }
                }
              }
            })

          this.inserimento.getAvanzamentoByCommessaType(this.commessa.id_commessa , 3 ).subscribe(
            response=>{
              for(var i=0 ; i<response.length; i++)
              {
                if(response[i].anno?.numero == anno.numero)
                {
                  this.avanzamento.push(response[i])
                }
              }
              for ( var i=0 ; i<this.lineChartLabels.length ; i++)
              {
                this.previsioniRicavi[i] = 0
                for( var k = 0 ; k<this.avanzamento.length ; k++)
                {                
                  if(this.lineChartLabels[i] == this.avanzamento[k].mese?.nome)
                  {
                    this.previsioniRicavi[i] = this.previsioniRicavi[i] + this.avanzamento[k].valore 
                  }
                }
              }
            })

            this.inserimento.getAvanzamentoByCommessaType(this.commessa.id_commessa , 2 ).subscribe(
              response=>{
                for(var i=0 ; i<response.length; i++)
              {
                if(response[i].anno?.numero == anno.numero)
                {
                  this.avanzamento2.push(response[i])
                }
              }
            
                for ( var i=0 ; i<this.lineChartLabels.length ; i++)
                {
                  this.ricavi[i] = 0
                  for( var k = 0 ; k<this.avanzamento2.length ; k++)
                  {                
                    if(this.lineChartLabels[i] == this.avanzamento2[k].mese?.nome)
                    {             
                        this.ricavi[i] = this.ricavi[i] + this.avanzamento2[k].valore
                    }
                  }
                }
                
              })
              this.lineChartData = [
                { data : this.previsioniRicavi , label : 'Previsione ricavi'},
                { data : this.ricavi , label : 'Ricavi effettivi'}]
                this.lineChartData2 = [
                  { data : this.previsioneCosti , label : 'Previsione ricavi'},
                  { data : this.costi , label : 'Ricavi effettivi'}]
          }
        })
      }    
}