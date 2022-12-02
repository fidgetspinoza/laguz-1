import { FormDataKV } from "./andromeda_types";
import { TODO } from "./types";

export type GenerateFlexTemplateOptions = {
  project_name: string;
  minter_addr: string;
  bid_valid_denom: string;
  symbol_721: string;
};

export type LaguzComponent = {
  ado: TODO;
  formData: FormDataKV;
};

export type LaguzComponentTypes =
  | "publish-settings"
  | "721"
  | "primitive"
  | "bid"
  | "bidders"
  | "holders";
