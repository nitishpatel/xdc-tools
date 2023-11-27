import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')
  async function addApothemNetwork() {
    try {
      setError('');
      const result = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0x33",
          rpcUrls: ["https://erpc.apothem.network"],
          chainName: "XDC Apothem Network",
          nativeCurrency: {
            name: "TXDC",
            symbol: "TXDC",
            decimals: 18
          },
          blockExplorerUrls: ["https://apothem.blocksscan.io/"]
        }]
      });
    } catch (error){
      setError(error.message)
    }
  }

  async function addXinfinNetwork() {
    try {
      setError('');
      const result = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0x32",
          rpcUrls: ["https://erpc.xinfin.network"],
          chainName: "XDC Network",
          nativeCurrency: {
            name: "XDC",
            symbol: "XDC",
            decimals: 18
          },
          blockExplorerUrls: ["https://xdc.blocksscan.io/"]
        }]
      });
    } catch (error){
      setError(error.message)
    }
  }
  return (
    <>
      <div>
        <h1>XDC Tools</h1>

        <hr/> 
      </div>
      {
        error && (
          <div className='error'>
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )
      }
      <div className='button-div'>
        <button className='add-apothem-chain' onClick={addApothemNetwork}>Add Apothem Chain</button>
      </div>
      <div className='button-div'>
        <button className='add-xinfin-chain' onClick={addXinfinNetwork}>Add Xinfin Mainnent Chain</button>
      </div>


      <div className='footer'>
        <p>
          Made with{' '}
          <span className='heart' role='img' aria-label='love'>
            💜
          </span>{' '}
          <br/>
          <a href='https://github.com/nitishpatel/xdc-tools' target='_blank' rel='noopener noreferrer'>
            Contribute on Github
          </a>
        </p>
      </div>
    </>
  )
}
