import { generateFlexTemplate, laguzComponent } from "./flex_template";
import { GenerateFlexTemplateOptions, LaguzComponent } from "./laguz_types";

const options: GenerateFlexTemplateOptions = {
  project_name: "laguz-2",
  minter_addr: "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn",
  bid_valid_denom: "uandr",
  symbol_721: "LAGUZ2",
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

console.log(JSON.stringify(generatedFlexTemplate, null, 2));
