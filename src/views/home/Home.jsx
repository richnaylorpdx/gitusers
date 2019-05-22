import React from 'react'
import PropTypes from "prop-types"
import { Input, Button } from 'antd'
import users from '../../components/users';
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
    const { success, addUser, convertDate, userInfo, latestUser } = this.props
    return (
      <React.Fragment>
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
        <table className='git-users'>
          <tr className='git-user-table-header'>
            <th>Username</th>
            <th>Name</th>
            <th>Public Repos</th>
            <th>Public Gists</th>
            <th>Followers</th>
            <th>Following</th>
            <th>Date Created</th>
          </tr>
          {
            userInfo && userInfo.map(user =>
              <tr>
                <td><a href={user.url}>{user.login}</a></td>
                <td>{user.name}</td>
                <td>{user.public_repos}</td>
                <td>{user.public_gists}</td>
                <td>{user.followers}</td>
                <td>{user.following}</td>
                <td>{convertDate(user.created_at)}</td>
              </tr>
            )
          }
        </table>
      </React.Fragment>
    )
  }
}