// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import { login } from '../../modules/account'
import FaEye from 'react-icons/lib/fa/eye'
import FaEyeSlash from 'react-icons/lib/fa/eye-slash'
import Logo from '../../Components/Logo'
import Footer from '../../Components/Footer'

type Props = {
    dispatch: DispatchType,
    onWifChange: Function,
    history: Object
}

type State = {
  showKey: boolean,
  wif: string,
}

export default class LoginPrivateKey extends Component<Props, State> {
  state = {
    showKey: false,
    wif: ''
  }

  toggleKeyVisibility = () => {
    this.setState(prevState => ({
      showKey: !prevState.showKey
    }))
  }

  handleInputChange = (e) => {
    const value = e.target.value

    this.setState({
      wif: value
    })
  }

  handleVerify = () => {
    const { onWifChange, history } = this.props
    const { wif } = this.state

    onWifChange(history, wif)
  }

  render () {
    const { showKey } = this.state

    return (
      <div id='loginPage'>
        <div className='login'>
          <div className='loginForm'>
            <Logo />
            <input type={showKey ? 'text' : 'password'} placeholder='Enter your private key here (WIF)' onChange={this.handleInputChange} />

            {showKey
              ? <FaEyeSlash className='viewKey' onClick={this.toggleKeyVisibility} />
              : <FaEye className='viewKey' onClick={this.toggleKeyVisibility} />
            }
          </div>
          <div className='loginButtons'>
            <button onClick={this.handleVerify}>Login</button>
            <Link to='/'><button className='altButton'>Home</button></Link>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
