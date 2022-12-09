Commands: <br /> <br />
Verify contract, get hash, compare and use that for further verification's processes <br /> <br />
npx hardhat block-number --network <network_name> <br />
npx hardhat deploy <br />
npx hardhat deploy --tags mocks <br />
npm i create-react-app <br />
npx create-react-app <app_name> <br />
npm start -> RUN REACT APP <br />
npm run build -> builds build APP <br />

web inspect steps: <br />

ethereum.enable() <br />
account = <metamask_address> use String <br />
hash = <secret_message_hash> use String <br />
ethereum.request((method: "personal_sign", params: [account, hash])) <br />

![sigg](https://user-images.githubusercontent.com/30512638/192316212-11db269c-14ee-4f51-a9ef-6fd084971615.png)
