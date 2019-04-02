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
                <div>
                    {
                        userData && userData.map(user => 
                            <ul key={user.id}>
                                <li><a href={user.url}>{user.login} | </a></li>
                                <li>{user.name} | </li>
                                <li>{user.public_repos} | </li>
                                <li>{user.public_gists} | </li>
                                <li>{user.followers} | </li>
                                <li>{convertDate(user.created_at)}</li>
                            </ul>

                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}