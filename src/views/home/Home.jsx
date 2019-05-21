import React from 'react'
import PropTypes from "prop-types"
import { Input, Button, Table } from 'antd'
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

  render() {
    const { success, addUser, convertDate, userInfo, latestUser } = this.props
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        render: () => <a href="javascript:;">Delete</a>,
      },
    ]

    const columnsFrFb = [
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

    const data = [
      {
        key: 0,
        date: '2018-02-11',
        amount: 120,
        type: 'income',
        note: 'transfer',
      },
      {
        key: 1,
        date: '2018-03-11',
        amount: 243,
        type: 'income',
        note: 'transfer',
      },
      {
        key: 2,
        date: '2018-04-11',
        amount: 98,
        type: 'income',
        note: 'transfer',
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
          <tr>
            <td>cruzies dad</td>
            <td>cruz dad</td>
            <td>10</td>
            <td>20</td>
            <td>30</td>
            <td>40</td>
            <td>04/02/2019</td>
          </tr>
          <tr>
            <td>cruzies dad</td>
            <td>cruz dad</td>
            <td>10</td>
            <td>20</td>
            <td>30</td>
            <td>40</td>
            <td>04/02/2019</td>
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
        <Table bordered columns={columns} dataSource={data} />;
        <Table bordered columns={columnsFrFb} dataSource={userInfo} />;
      </React.Fragment >
    )
  }
}