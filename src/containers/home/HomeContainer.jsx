import { connect } from 'react-redux'
// import * as actions from 'actions/feature.js'
import * as actions from '../../modules/lists'
// import * as featureSelector from 'selectors/feature.js'
// import FeatureSchematic from 'pages/content/FeatureSchematic.jsx'
import Home from '../../views/home/Home'

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }


// const mapStateToProps = ({ counter }) => ({
//     city1_all: counter.city1,
//     city2_all: counter.city2,
//     isIncrementing: counter.isIncrementing,
//     isDecrementing: counter.isDecrementing,
// })

const mapStateToProps = () => ({})


const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (val) => {
            dispatch(actions.getGitUser(val))
        },
        getUserInput: (val) => {
            dispatch(actions.getUserData(val))
        },
        addUser: (val) => {
            console.log('add user container: ', val)
            dispatch(actions.addUser(val))
        },
        addUser2: (val) => {
            console.log('add user container: ', val)
            dispatch(actions.addUser2(val))
        }
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

export default HomeContainer