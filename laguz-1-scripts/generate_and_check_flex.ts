import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as assert from "node:assert/strict";

type TODO = unknown;
type TODO_zod = unknown;

const PROJECT_NAME = "laguz-1";

const ADO_EXPORTS_FOLDER = path.join(__dirname, "..", "ado-exports");
const FLEX_TEMPLATE_FILENAME = `template_${PROJECT_NAME}.flex`;

const FLEX_TEMPLATE_FILEPATH = path.join(
  ADO_EXPORTS_FOLDER,
  FLEX_TEMPLATE_FILENAME
);

let doesFlexTemplateExist = false;
try {
  doesFlexTemplateExist = (await fs.stat(FLEX_TEMPLATE_FILEPATH)).isFile();
} catch {
  console.error("Existing flex template file does not exist.");
}

assert.ok(doesFlexTemplateExist, "Here we expect a template file to exist.");

const existingFlexTemplateFile = await fs.readFile(FLEX_TEMPLATE_FILEPATH, {
  encoding: "utf-8",
});

const existingFlexTemplate: TODO_zod = JSON.parse(existingFlexTemplateFile);
const generatedFlexTemplate = generateFlexTemplate({
  project_name: PROJECT_NAME,
});

assert.deepEqual(existingFlexTemplate, generatedFlexTemplate);
console.log("All OK!");

type GenerateFlexTemplateOptions = {
  project_name: string;
};

function generatePublishSettingsADO(): TODO {
  return {
    id: "publish-settings",
    path: "publish-settings",
    required: true,
    enabled: true,
  };
}

function generateCW721ADO(options: GenerateFlexTemplateOptions): TODO {
  return {
    id: `${options.project_name}-721`,
    path: "cw721/0.1.0/cw721",
    required: true,
    enabled: true,
  };
}

function generatePrimitiveADO(options: GenerateFlexTemplateOptions): TODO {
  return {
    id: `${options.project_name}-primitive`,
    path: "primitive/0.1.0/primitive",
    required: true,
    enabled: true,
  };
}

function generateBidsADO(options: GenerateFlexTemplateOptions): TODO {
  return {
    id: `${options.project_name}-bid`,
    path: "cw721-bids/0.1.0/cw721-bids",
    required: true,
    enabled: true,
  };
}

function generateListBiddersADO(options: GenerateFlexTemplateOptions): TODO {
  return {
    id: `${options.project_name}-bidders`,
    path: "address-list/0.1.0/address-list",
    required: true,
    enabled: true,
  };
}

function generateListHoldersADO(options: GenerateFlexTemplateOptions): TODO {
  return {
    id: `${options.project_name}-holders`,
    path: "address-list/0.1.0/address-list",
    required: true,
    enabled: true,
  };
}

type FormDataTODO = {
  name: string;
  value: TODO;
};

function generatePublishSettingsFormData(
  options: GenerateFlexTemplateOptions
): FormDataTODO {
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
): FormDataTODO {
  return {
    name: `${options.project_name}-721`,

    value: {
      minter: {
        identifier: "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn",
      },
      modules: [],
      $type: "cw721",
      $class: "baseADO",
      $classifier: "collectible",
      $enabled: true,
      $removable: true,
      name: options.project_name,
      symbol: "LAGUZ1",
    },
  };
}

function generatePrimitiveFormData(
  options: GenerateFlexTemplateOptions
): FormDataTODO {
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
): FormDataTODO {
  return {
    name: `${options.project_name}-bid`,
    value: {
      $type: "cw721-bids",
      $class: "baseADO",
      $classifier: "sale",
      $enabled: true,
      $removable: true,
      andromeda_cw721_contract: `${options.project_name}-721`,
      valid_denom: "uandr",
    },
  };
}

function generateListBiddersFormData(
  options: GenerateFlexTemplateOptions
): FormDataTODO {
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
): FormDataTODO {
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

type LaguzComponent = {
  ado: TODO;
  formData: FormDataTODO;
};

function generateComponents(
  options: GenerateFlexTemplateOptions
): LaguzComponent[] {
  return [
    {
      ado: generatePublishSettingsADO(),
      formData: generatePublishSettingsFormData(options),
    },
    {
      ado: generateCW721ADO(options),
      formData: generateCW721FormData(options),
    },
    {
      ado: generatePrimitiveADO(options),
      formData: generatePrimitiveFormData(options),
    },
    {
      ado: generateBidsADO(options),
      formData: generateBidsFormData(options),
    },
    {
      ado: generateListBiddersADO(options),
      formData: generateListBiddersFormData(options),
    },
    {
      ado: generateListHoldersADO(options),
      formData: generateListHoldersFormData(options),
    },
  ];
}

function generateFlexTemplateInner(options: GenerateFlexTemplateOptions) {
  const components: LaguzComponent[] = generateComponents(options);

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

function generateFlexTemplate(options: GenerateFlexTemplateOptions): TODO {
  const { ados, formData } = generateFlexTemplateInner(options);

  const a = {
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
    ados,
    formData,
  };

  return a;
}
