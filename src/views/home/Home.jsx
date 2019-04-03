import React from 'react'
import PropTypes from "prop-types"
import { Input } from 'antd'
import users from '../../modules/users';
import './Home.css'

export default class Home extends React.Component {
    static propTypes = {
        addUser: PropTypes.func,
        userData: PropTypes.array,
        convertDate: PropTypes.func,
    }

    constructor() {
        super()
        this.state = {
            currentValue: null,
        }
    }

     render() {
        const { addUser, userData, convertDate } = this.props
        return (
            <React.Fragment>
                <Input 
                    onChange={(e) => this.setState({currentValue: e.target.value})}
                    onKeyPress={(e) => e.key === 'Enter' && addUser(this.state.currentValue)}
                    className='search-box'
                />
                    
                <table className='git-users'>
                    <tr class='git-user-table-header'> 
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
                        userData && userData.map(user => 
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