export interface Pokemon{
    count:number;
    next:string;
    previus: string|null;
    results:Array<Result>;
}

export interface Result {
    name: string;
    url: string;
  }