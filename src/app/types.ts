export type TableHeadersType = { label: string; key: string }[];

export type TableRowActionsType = {
  label: string;
  value: string;
  icon: string;
  iconColor: string;
};

export const TableRowActionsTypeInitialized = {
  label: '',
  value: '',
  icon: '',
  iconColor: '',
};

export type TableRowType = {
  [key: string]: any;
  profilePic: string;
  contractorName: string;
  type: string;
  startDate: string;
  amount: string;
  status: string;
  actions: TableRowActionsType[];
};

export const TableRowTypeInitialized = [
  {
    profilePic: '',
    contractorName: '',
    type: '',
    startDate: '',
    amount: '',
    status: '',
    actions: [{ label: '', value: '', icon: '', iconColor: '' }],
  },
];

export type TableDataType = {
  headers: TableHeadersType;
  rows: TableRowType[];
};

export const TableDataTypeInitialized = {
  headers: [{ label: '', key: '' }],
  rows: [
    {
      profilePic: '',
      contractorName: '',
      type: '',
      startDate: '',
      amount: '',
      status: '',
      actions: [{ label: '', value: '', icon: '', iconColor: '' }],
    },
  ],
};
