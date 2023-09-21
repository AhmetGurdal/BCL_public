import { IItem } from "../item";

export interface IGroup {
  name: string;
  items: IItem[];
}

export default class Group {
  name: string;
  items: IItem[];

  constructor(props: { name: string; items: IItem[] }) {
    this.name = props.name;
    this.items = props.items;
  }
}
