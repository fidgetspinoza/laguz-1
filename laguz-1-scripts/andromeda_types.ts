import { TODO } from "./types";

export type ADOBase = {
  id: string;
  path: string;
  required: boolean;
  enabled: boolean;
};

export type FormDataKV = {
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
