export class Utente
{
  constructor(
  public id ?: number ,
  public username  ?: string,
  public password ?:  string,
  public stato ?: number,
  public primo_accesso ?: number,
  public gruppo ?: Gruppo
  ){}
}

export class Gruppo
{
  constructor(
   public id  ?: number,
   public descrizione ?: string
    ) {}
} 
export class Abilitazioni
{
  constructor(
    public id ?: number,
    public gruppo ?: Gruppo, 
    public gestioneUtenti ?: number,
    public gestioneCommesse ?: number,
    public visualizzazione ?: number,
  ){}
}