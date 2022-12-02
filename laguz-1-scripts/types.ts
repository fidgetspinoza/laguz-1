export type TODO = unknown;
export type TODO_zod = unknown;

export type GenerateFlexTemplateOptions = {
  project_name: string;
  minter_addr: string;
  bid_valid_denom: string;
  "721_symbol": string;
};

export type LaguzComponent = {
  ado: TODO;
  formData: FormDataTODO;
};

export type LaguzComponentTypes =
  | "publish-settings"
  | "721"
  | "primitive"
  | "bid"
  | "bidders"
  | "holders";

export type ADOBase = {
  id: string;
  path: string;
  required: boolean;
  enabled: boolean;
};

export type FormDataTODO = {
  name: string;
  value: FormData;
};

export type FormData =
  | FormDataPublishSettings
  | FormData721
  | FormDataPrimitive
  | FormDataBids
  | FormDataAddressList;

type FormDataBase = {
  $type: string;
  $class: string;
  $classifier: string;
  $enabled: boolean;
  $removable: boolean;
};

type FormDataPrimitive = FormDataBase;
type FormDataPublishSettings = FormDataBase & {
  name: string;
};

type FormData721 = FormDataBase & {
  minter: {
    identifier: string;
  };
  modules: TODO[];
  symbol: string;
};

type FormDataBids = FormDataBase & {
  andromeda_cw721_contract: string;
  valid_denom: string;
};

type FormDataAddressList = FormDataBase & {
  is_inclusive: boolean;
};
