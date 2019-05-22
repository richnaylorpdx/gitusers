import React from 'react'
import PropTypes from "prop-types"
import { Input, Button, Table, Pagination } from 'antd'
import users from '../../components/users'
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

  render() {
    const { success, addUser, convertDate, userInfo, latestUser } = this.props

    const columns = [
      {
        title: 'Username',
        dataIndex: 'login',
        width: 100,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 100,
      },
      {
        title: 'Public Repos',
        dataIndex: 'public_repos',
        width: 100,
      },
      {
        title: 'Public Gists',
        dataIndex: 'public_gists',
        width: 100,
      },
      {
        title: 'Followers',
        dataIndex: 'followers',
        width: 100,
      },
      {
        title: 'Following',
        dataIndex: 'following',
        width: 100,
      },
      {
        title: 'Date Created',
        dataIndex: 'created_at',
        width: 100,
      },
    ]

    return (
      <React.Fragment>
        <Input
          onChange={(e) => this.setState({ currentValue: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && addUser(this.state.currentValue)}
          className='search-box'
        />
        {
          (success && latestUser !== null) && <h6>Success: user "{latestUser}" added to the db</h6>
        }
        {
          (!success && latestUser !== null) && <h6>Error adding "{latestUser}" to the db.</h6>
        }
        <Table 
          bordered
          columns={columns}
          dataSource={userInfo} 
          pagination='both'
        />
      </React.Fragment >
    )
  }
}