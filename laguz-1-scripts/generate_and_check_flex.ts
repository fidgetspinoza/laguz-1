import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as assert from "node:assert/strict";
import { generateFlexTemplate, laguzComponent } from "./flex_template";
import { GenerateFlexTemplateOptions, LaguzComponent } from "./laguz_types";
import { TODO_zod } from "./types";

const options: GenerateFlexTemplateOptions = {
  project_name: "laguz-1",
  minter_addr: "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn",
  bid_valid_denom: "uandr",
  symbol_721: "LAGUZ1",
};

const ADO_EXPORTS_FOLDER = path.join(
  __dirname,
  "..",
  "ado-exports",
  options.project_name
);
const FLEX_TEMPLATE_FILENAME = `template_${options.project_name}.flex`;

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

assert.ok(
  doesFlexTemplateExist,
  `Here we expect a template file to exist at ${FLEX_TEMPLATE_FILEPATH}`
);

const existingFlexTemplateFile = await fs.readFile(FLEX_TEMPLATE_FILEPATH, {
  encoding: "utf-8",
});

const existingFlexTemplate: TODO_zod = JSON.parse(existingFlexTemplateFile);

const components: LaguzComponent[] = [
  laguzComponent(options, "publish-settings"),
  laguzComponent(options, "721"),
  laguzComponent(options, "primitive"),
  laguzComponent(options, "bid"),
  laguzComponent(options, "bidders"),
  laguzComponent(options, "holders"),
];

const generatedFlexTemplate = generateFlexTemplate(components);

assert.deepEqual(existingFlexTemplate, generatedFlexTemplate);
console.log("All OK!");
