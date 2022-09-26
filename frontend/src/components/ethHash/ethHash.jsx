import { ethers } from 'ethers'
import { getContractComponents } from '../../helper'
import { MessageHash } from './sign.jsx'

export const ETHHash = (props) => {
    const ethhash = async () => {
        if(props.globalProviderProps) {
            const [, , signer, contract] = getContractComponents(props.globalProviderProps);
            const MSG = MessageHash.Message
            await contract.getEthSignedMessageHash(MSG)
        }
            else {  
                console.log('To perform this action please login!')
            }
        }
        return (
            <div>
              <h1>GETETHHASH</h1>
              <button onClick={() => ethhash()}>ETHHASH</button>
            </div>
          )
    }