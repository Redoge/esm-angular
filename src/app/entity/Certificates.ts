import {Tag} from "./Tag";

export class Certificates{
  private _id: number;
  private _name: string;
  private _description: string;
  private _price: number;
  private _duration: number;
  private _createdDate: Date;
  private _lastUpdateDate: Date;
  private _tags: Tag[];
  constructor(id: number, name: string, description: string,
              price: number, duration: number, createdDate: Date,
              lastUpdateDate: Date, tags: Tag[]){
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._duration = duration;
    this._createdDate = createdDate;
    this._lastUpdateDate = lastUpdateDate;
    this._tags = tags;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get lastUpdateDate(): Date {
    return this._lastUpdateDate;
  }

  set lastUpdateDate(value: Date) {
    this._lastUpdateDate = value;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }
}
