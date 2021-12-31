export type TableHeadersType = { label: string; key: string }[];

export type TableDataType = {
  headers: TableHeadersType;
  rows: {
    [key: string]: any;
    profilePic: string;
    contractorName: string;
    type: string;
    startDate: string;
    amount: string;
    status: string;
    actions: {
      label: string;
      value: string;
      icon: string;
      iconColor: string;
    }[];
  }[];
};
