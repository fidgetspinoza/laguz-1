import AndromedaClient, * as andr from "@andromedaprotocol/andromeda.js";

import { Buffer } from "buffer"
window.Buffer = window.Buffer || Buffer;

const connectionConfig = {
  endpoint: "https://rpc-andromeda-testnet.cereslabs.io/",
  registryAddr: "andr14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9shptkql"
}

const appConfig = {
  contractAddr: "andr1y6n8r02ch0vpt4xchxdt54gs56wplwwt7lm67ftals9q3v8q8ddqf32fty"
}

const a = new AndromedaClient()
a.connect(connectionConfig.endpoint, connectionConfig.registryAddr).then(async thing => {
  AndromedaClient
  const app = await andr.queryApp(appConfig.contractAddr)
  console.log({ app })
})



export default function App() {
  return (
    <div>
    </div>
  )
}