import React from 'react'
import PropTypes from "prop-types"
import { Input, Table, Divider, Tag } from 'antd'
import { addList, getListItems } from '../../components/lists'
import './Home.css'

export default class Home extends React.Component {
    static propTypes = {
        addList: PropTypes.func,
        getListItems: PropTypes.func,
        listData: PropTypes.array
    }

    constructor() {
        super()
        this.state = {
            currentValue: null,
        }
    }

    componentWillMount() {
        this.props.getListItems()
        console.log('list data: ', this.props.listData)
    }

    updateList = () => {
        this.props.addList(this.state.currentValue)
        this.setState({currentValue: ''})
    }

    render() {
        const { listData } = this.props

        const data = [{
            key: '1',
            name: 'Mike',
            address: '10 Downing Street',
            age: 32          
        }, {
            key: '2',
            name: 'John',
            address: '10 Downing Street',
            age: 42
          }];
          
          const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }];
        return (
            <React.Fragment>
                <Input.Search
                    onChange={(e) => this.setState({currentValue: e.target.value})}
                    onKeyPress={(e) => e.key === 'Enter' && this.updateList(this.state.currentValue)}
                    enterButton='+'
                    // onSearch={() => this.updateList(this.state.currentValue)}
                    placeholder='Enter list item'
                    value={this.state.currentValue}
                    size='large'
                />
                <table>
                    <tr>
                        <th>Your List</th>
                    </tr>
                        {
                            listData && listData.map(list =>
                                    <tr>
                                        <td>{list.listname}</td>
                                        <td>{list.id}</td>
                                    </tr>
                            )
                        }
                </table>
                {/* <Table columns={columns} dataSource={data} /> */}
            </React.Fragment>
        )
    }
}