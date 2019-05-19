import { connect } from 'react-redux'
import * as listActions from '../../components/lists'
import Home from '../../views/home/Home'

const mapStateToProps = (state) => {
    return {
        listData: state.lists.lists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (val) => {
            dispatch(listActions.addList(val))
        },
        getListItems: () => {
            dispatch(listActions.getListItems())
        }
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

export default HomeContainer