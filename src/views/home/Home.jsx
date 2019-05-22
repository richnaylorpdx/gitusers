import React from 'react'
import PropTypes from "prop-types"
import { Input } from 'antd'
import GitUserTable from '../../components/GitUserTable/GitUserTable'
import './Home.css'

export default class Home extends React.Component {
  static propTypes = {
    userInfo: PropTypes.array,
    addUser: PropTypes.func,
    convertDate: PropTypes.func,
    getUsers: PropTypes.func,
    success: PropTypes.bool,
    latestUser: PropTypes.string
  }

  constructor() {
    super()
    this.state = {
      currentValue: null,
    }
  }

  componentWillMount() {
    this.props.getUsers()
  }

  userUpdate = (val) => {
    this.props.addUser(val)
    this.setState({ currentValue: null })
  }

  render() {
    const { success, convertDate, userInfo, latestUser } = this.props
    const tableHeaders = ['Username', 'Name', 'Public Repos', 'Public Gists', 'Followers', 'Following', 'Date Created']

    return (
      <div className='page-wrapper'>
        <Input
          onChange={(e) => this.setState({ currentValue: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && this.userUpdate(this.state.currentValue)}
          value={this.state.currentValue}
          className='search-box'
        />
        {
          (success && latestUser !== null) && <h6>Success: user "{latestUser}" added to the db</h6>
        }
        {
          (!success && latestUser !== null) && <h6>Error adding "{latestUser}" to the db.</h6>
        }
        <GitUserTable 
          tableHeaders={tableHeaders}
          userInfo={userInfo}
          convertDate={convertDate}
        />
      </div>
    )
  }
}