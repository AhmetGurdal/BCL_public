export enum ItemTypes {
  Question = "Question",
  Answer = "Answer",
  Group = "Group",
  Return = "Return",
}

export interface IItem {
  type: ItemTypes;
}

export class Item implements IItem {
  type!: ItemTypes;
}
