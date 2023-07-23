export type ItemACLType = {
  id: string;
  description: string;
  done: boolean;
};

export type ItemEntityType = ItemACLType;

export type ItemObjectValueType = Omit<ItemACLType, "id">;
