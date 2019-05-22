import React from 'react'
import PropTypes from 'prop-types'
import './GitUserTable.css'

export default class GitUserTable extends React.Component {
  static propTypes = {
    tableHeaders: PropTypes.array,
    userInfo: PropTypes.array,
    convertDate: PropTypes.func,
  }

  render() {
    const { userInfo, convertDate, } = this.props
    const tableHeaders = ['Username', 'Name', 'Public Repos', 'Public Gists', 'Followers', 'Following', 'Date Created']

    return (
      <table className='git-users'>
        <tr>
          {
            tableHeaders.map(header => <td>{header}</td>)
          }
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
    )
  }
}