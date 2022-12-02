import { generateFlexTemplate, laguzComponent } from "./flex_template";
import * as assert from "node:assert/strict";
import { GenerateFlexTemplateOptions, LaguzComponent } from "./laguz_types";

assert.ok(
  process.argv.length === 6,
  `Usage: vite-node generate_flex.ts -- <project_name> <minter_addr> <bid_valid_denom> <symbol_721>`
);
// expect
const [, , project_name, minter_addr, bid_valid_denom, symbol_721] =
  process.argv;

const options: GenerateFlexTemplateOptions = {
  project_name,
  minter_addr,
  bid_valid_denom,
  symbol_721,
};

const components: LaguzComponent[] = [
  laguzComponent(options, "publish-settings"),
  laguzComponent(options, "721"),
  laguzComponent(options, "primitive"),
  laguzComponent(options, "bid"),
  // laguzComponent(options, "bidders"),
  // laguzComponent(options, "holders"),
];

const generatedFlexTemplate = generateFlexTemplate(components);

console.log(JSON.stringify(generatedFlexTemplate, null, 2));
