import { connect } from 'react-redux'
import * as actions from '../../components/users'
import Home from '../../views/home/Home'

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.fetchUsers,
    success: state.users.success,
    latestUser: state.users.latestUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (val) => {
      dispatch(actions.addUser(val))
    },
    convertDate: (val) => {
      const date = new Date(val)
      return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
    },
    getUsers: () => {
      dispatch(actions.getUsers())
    },
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

export default HomeContainer