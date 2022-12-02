import { GenerateFlexTemplateOptions, LaguzComponent, TODO_zod } from "./types";
import { generateFlexTemplate, laguzComponent } from "./flex_template";

const options: GenerateFlexTemplateOptions = {
  project_name: "laguz-2",
  minter_addr: "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn",
  bid_valid_denom: "uandr",
  "721_symbol": "LAGUZ2",
};

const components: LaguzComponent[] = [
  laguzComponent(options, "publish-settings"),
  laguzComponent(options, "721"),
  laguzComponent(options, "primitive"),
  laguzComponent(options, "bid"),
  laguzComponent(options, "bidders"),
  laguzComponent(options, "holders"),
];

const generatedFlexTemplate = generateFlexTemplate(components);

console.log(generatedFlexTemplate);
