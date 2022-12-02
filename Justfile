grow: generate_flex_compare generate_flex_laguz-2 generate_sample_flex

generate_flex_compare:
  cd laguz-1-scripts && vite-node generate_and_check_flex.ts

generate_flex_laguz-2:
  cd laguz-1-scripts && vite-node generate_flex_laguz-2.ts

generate_flex project_name minter_addr bid_valid_denom symbol_721:
  @cd laguz-1-scripts && vite-node generate_flex.ts -- {{project_name}} {{minter_addr}} {{bid_valid_denom}} {{symbol_721}}

generate_sample_flex:
  @just generate_flex "laguz-sample-1" "zzzzzandr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn" "uandrrrr" "LAGUZS"

frontend_dev:
  cd laguz-1-frontend && npm run dev

cargo:
  cd laguz-1-contract && cargo update && cargo build