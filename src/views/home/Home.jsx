import React from 'react'
import PropTypes from "prop-types"
import { Input } from 'antd'
import './Home.css'

export default class Home extends React.Component {
    static propTypes = {
        getUser: PropTypes.func,
        getUserInput: PropTypes.func,
        addUser: PropTypes.func,
        addUser2: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            currentValue: null,
        }
    }

     render() {
        const { getUser, getUserInput, addUser, addUser2 } = this.props
        return (
            <React.Fragment>
                <Input 
                    onChange={(e) => this.setState({currentValue: e.target.value})}
                    // onKeyPress={(e) => e.key === 'Enter' && addUser(this.state.currentValue)}
                    onKeyPress={(e) => e.key === 'Enter' && addUser2(this.state.currentValue)}

                    className='search-box'
                />
            </React.Fragment>
        )
    }
}