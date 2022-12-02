import AndromedaClient, * as andr from "@andromedaprotocol/andromeda.js";


const madeAddressList = {
  "$type": "address-list",
  "$class": "module",
  "$classifier": "address",
  "$enabled": true,
  "$removable": true,
  "is_inclusive": true
}
import { Buffer } from "buffer"
window.Buffer = window.Buffer || Buffer;

const a = new AndromedaClient()
a.connect("https://rpc-andromeda-testnet.cereslabs.io/", "andr14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9shptkql").then(async thing => {
  AndromedaClient
  console.log(a.isConnected)
  // const z = await andr.queryTxByAccount("galileo-2", "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn", )
  const app = await andr.queryApp("andr1y6n8r02ch0vpt4xchxdt54gs56wplwwt7lm67ftals9q3v8q8ddqf32fty")
  console.log({ app })
  const z = await andr.queryAddressListIncludesAddress("andr1h6jj96e5m07c4nz22jlu4tasegp65f64rqk6f4tzf89ppjk98d8qulya72", "andr15zxx4vntdvpzq3xlajufthgjp27qtzqwqa4umn")
  console.log({ z })
  // console.log(z.map(zz => JSON.parse(zz.rawLog)))
})



export default function App() {
  return (
    <div>
    </div>
  )
}