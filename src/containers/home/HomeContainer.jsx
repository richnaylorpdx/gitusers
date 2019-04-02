import { connect } from 'react-redux'
import * as actions from '../../modules/users'
import Home from '../../views/home/Home'

const mapStateToProps = (state) => {
    return {
        userData: state.users.gitUsers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (val) => {
            dispatch(actions.addUser(val))
        },
        convertDate: (val) => {
            const date = new Date(val)
            return((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
        }
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

export default HomeContainer