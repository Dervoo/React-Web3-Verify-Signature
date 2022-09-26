import { getContractComponents } from '../../helper'
const { ethereum } = window

export const MessageHash = (props) => {
    const mssHash = async () => {
        if(props.globalProviderProps) {
            const [,,,contract] = getContractComponents(props.globalProviderProps);
            const address = props.globalProviderProps.provider.selectedAddress
            const amount = 50
            const message = "secret message"
            const nonce = 50
            const Message = await contract.getMessageHash(address, amount, message, nonce)
            console.log("Message", Message)
            const sig = await ethereum.request({method: "personal_sign", params: [address, Message]})
            console.log("True Sig Code: ", sig)
            const ethSignedMess = await contract.getEthSignedMessageHash(Message)
            const recover = await contract.recoverSigner(ethSignedMess, sig)
            console.log("recover: ", recover)
            const verify = await contract.verify(address, address, amount, message, nonce, sig)
            console.log("Verify boolean: ", verify)
            const fakeVerify = await contract.verify(address, address, amount,  "fakeinfo", nonce, sig)
            console.log("FakeMessage Boolean: ", fakeVerify)
        }
            else {
                console.log('To perform this action please login!')
            }
        }
        return (
            <div>
              <h1>createMsgHash</h1>
              <button onClick={() => mssHash()}>Message</button>
            </div>
          )
    }