export class Usorisorse
{
  constructor(
    public mesa? : Mese | null,
    public risorsa? : Risorse | null,
    public ore? : number |null,
    public ricavi? : number | null,
    public costi? : number | null,
    public tiporisorsa? : TipoRisorse | null,
    public attivita? : Attivita | null
  )  {  }
}

export class Risorse
{
  constructor(
    public id? : number | null,
    public nome? : string | null,
    public tariffa? : number | null,
    public attivo? : Boolean | null,
    public iniziovalidita? : Date | null
  ){}
}

export class TipoRisorse
{
  constructor(
    public id_uso_risorse? : number | null,
    public nome? : string | null
  ){}
}

export class Attivita
{
  constructor(
    public id_attivita? : number | null,
    public descrizione? : string | null,
    public commessa? : Commessa | null, //tipo commessa
    public valore? : number | null
  ){}
}

export class Mese
{
  constructor(
    public id_mese? : number,
    public nome? : string
  ){}
}

export class Anno
{
  constructor(
    public id_anno? : number,
    public numero? : number,
  ){}
}

export class Avanzamento
{
  constructor(
    public id_avanzamento? : number | null,
    public mese? : Mese | null ,
    public anno? : Anno | null ,
    public attivita? : Attivita  | null,
    public valore? : number  | null,
    public percentuale? : number  | null,
    public tipoAvanzamento? : TipoAvanzamento | null,
    public consolida? : Date | null,
    public fattura? : string | null
  ){}
}
export class TipoAvanzamento
{
  constructor(
    public  id_tipo_avanzamento? : number | null,
    public nome? : string  | null
  )
  {

  }
}

export class UsoRisorse
{
  
  constructor(
   public id? :number | null,
   public costi? : number | null,
   public ricavi? : number | null,
   public commessa? : Commessa | null,
   public ore? : number | null,
   public mese? : Mese | null,
   public anno? : Anno | null,
   public risorse? : Risorsa | null,
   public tipoUsoRisorse? : TipoUsoRisorse | null,
   public consolida? : Date | null
  ){}
}

export class TipoUsoRisorse
{
  constructor(
  public id_tipo_usorisorse? : number | null,
  public nome? : string | null
  ){}
}


export class Risorsa
{
  
    id_risorse? : number | null
    nome? : string | null
    tariffa? : number | null
 
}

export class Commessa
{

  
  constructor(
    public id_commessa? : number | null,
    public nome? : string | null,
    public cliente? : string | null,
    public valore? : number | null,
    public fatturato? : number | null,
    public inizio? : Date | null,
    public fine? : Date | null,
    
  )
{}
}