import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import { updateCurrentValue, updateWorkingList, getGitUser } from '../../modules/lists'
import './index.css'

class home2 extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentValue: 'this is the current value',
    };
 }
  searchForUser = (val) => {
    // console.log(val, `\n enter pressed: ${this.state.currentValue}`)
    // val === 'Enter' ? getGitUser(val) : 
    // getGitUser(val)
    // val.key === 'Enter' ? console.log('search for user: ', val.keyCode) : console.log('eff')
    // getGitUser('get it together') 
  }
    render() {
        return(
            <div>
                <Input 
                    onKeyPress={(event) => event.key === 'Enter' ? getGitUser(this.state.currentValue) : this.setState({currentValue: event.target.value})}
                    className='search-box'
                />
                <Button 
                    style={{width: 50}}
                    type='primary'
                    size='large'
                    onClick={() => updateWorkingList(this.state.currentValue)}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ counter }) => ({
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {

        updateCurrentValue,
        updateWorkingList,
      },
      dispatch
    )
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(home2)
