import { ADOBase, FormDataKV } from "./andromeda_types";
import {
  GenerateFlexTemplateOptions,
  LaguzComponent,
  LaguzComponentTypes,
} from "./laguz_types";
import { TODO } from "./types";

export function laguzComponent(
  options: GenerateFlexTemplateOptions,
  laguzComponentType: LaguzComponentTypes
): LaguzComponent {
  const components = buildComponents(options);
  return components[laguzComponentType];
}

export function generateFlexTemplate(components: LaguzComponent[]): TODO {
  const flexTemplate = generateCommonFlexTemplate();
  const { ados, formData } = generateFlexTemplateInner(components);

  return {
    ...flexTemplate,
    ados,
    formData,
  };
}

function generatePublishSettingsADO(
  _options: GenerateFlexTemplateOptions
): ADOBase {
  return {
    id: "publish-settings",
    path: "publish-settings",
    required: true,
    enabled: true,
  };
}

function generateCW721ADO(options: GenerateFlexTemplateOptions): ADOBase {
  return {
    id: `${options.project_name}-721`,
    path: "cw721/0.1.0/cw721",
    required: true,
    enabled: true,
  };
}

function generatePrimitiveADO(options: GenerateFlexTemplateOptions): ADOBase {
  return {
    id: `${options.project_name}-primitive`,
    path: "primitive/0.1.0/primitive",
    required: true,
    enabled: true,
  };
}

function generateBidsADO(options: GenerateFlexTemplateOptions): ADOBase {
  return {
    id: `${options.project_name}-bid`,
    path: "cw721-bids/0.1.0/cw721-bids",
    required: true,
    enabled: true,
  };
}

function generateListBiddersADO(options: GenerateFlexTemplateOptions): ADOBase {
  return {
    id: `${options.project_name}-bidders`,
    path: "address-list/0.1.0/address-list",
    required: true,
    enabled: true,
  };
}

function generateListHoldersADO(options: GenerateFlexTemplateOptions): ADOBase {
  return {
    id: `${options.project_name}-holders`,
    path: "address-list/0.1.0/address-list",
    required: true,
    enabled: true,
  };
}

function generatePublishSettingsFormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: "publish-settings",

    value: {
      $type: "publish-settings",
      $class: "system",
      $classifier: "",
      $enabled: true,
      $removable: false,
      name: `${options.project_name}`,
    },
  };
}
function generateCW721FormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: `${options.project_name}-721`,

    value: {
      minter: {
        identifier: options.minter_addr,
      },
      modules: [],
      $type: "cw721",
      $class: "baseADO",
      $classifier: "collectible",
      $enabled: true,
      $removable: true,
      name: options.project_name,
      symbol: options["symbol_721"],
    },
  };
}

function generatePrimitiveFormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: `${options.project_name}-primitive`,
    value: {
      $type: "primitive",
      $class: "primitive",
      $classifier: "",
      $enabled: true,
      $removable: true,
    },
  };
}

function generateBidsFormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: `${options.project_name}-bid`,
    value: {
      $type: "cw721-bids",
      $class: "baseADO",
      $classifier: "sale",
      $enabled: true,
      $removable: true,
      andromeda_cw721_contract: `${options.project_name}-721`,
      valid_denom: options.bid_valid_denom,
    },
  };
}

function generateListBiddersFormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: `${options.project_name}-bidders`,
    value: {
      $type: "address-list",
      $class: "module",
      $classifier: "address",
      $enabled: true,
      $removable: true,
      is_inclusive: true,
    },
  };
}

function generateListHoldersFormData(
  options: GenerateFlexTemplateOptions
): FormDataKV {
  return {
    name: `${options.project_name}-holders`,
    value: {
      $type: "address-list",
      $class: "module",
      $classifier: "address",
      $enabled: true,
      $removable: true,
      is_inclusive: true,
    },
  };
}

function buildComponents(options: GenerateFlexTemplateOptions) {
  const components: Record<LaguzComponentTypes, LaguzComponent> = {
    "publish-settings": {
      ado: generatePublishSettingsADO(options),
      formData: generatePublishSettingsFormData(options),
    },
    "721": {
      ado: generateCW721ADO(options),
      formData: generateCW721FormData(options),
    },
    primitive: {
      ado: generatePrimitiveADO(options),
      formData: generatePrimitiveFormData(options),
    },
    bid: {
      ado: generateBidsADO(options),
      formData: generateBidsFormData(options),
    },
    bidders: {
      ado: generateListBiddersADO(options),
      formData: generateListBiddersFormData(options),
    },
    holders: {
      ado: generateListHoldersADO(options),
      formData: generateListHoldersFormData(options),
    },
  };
  return components;
}

function generateFlexTemplateInner(components: LaguzComponent[]) {
  const ados: TODO[] = components.map((component) => component.ado);

  const formData: Record<string, TODO> = {};

  for (let { name, value } of components.map(
    (component) => component.formData
  )) {
    formData[name] = value;
  }

  return {
    ados,
    formData,
  };
}
function generateCommonFlexTemplate() {
  return {
    id: "import",
    adoType: "app",
    name: "Import Template",
    icon: "/app-templates/icons/blank.png",
    description: "Import .flex file",
    opts: [
      "Import saved template",
      "Add on your prefered modules",
      "Save as a template",
      "Publish and use!",
    ],
    modules: [],
  };
}
