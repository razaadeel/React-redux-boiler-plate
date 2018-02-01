import React, { Component } from 'react';
import { fb } from '../config/firebase';
import { history } from './Routes'
import Loading from './loading'
import { connect } from 'react-redux';
// import { renderTodo } from '../store/action/action'



class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loader: true,
    //         user: {}
    //     }
    // }
    componentDidMount() {

        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.renderTodo(user);
            
                let userId = user.uid
                let userRef = fb.database().ref('/users/' + userId);
                this.userRef = userRef
            }
            else {
                history.push('./signin')
            }
        })
    }

    render() {
        return (
            <div>
                {
                    (!this.props.name) ?
                        <Loading />
                        :
                        <div>
                            
                        </div>
                }

            </div>
        )
    }
}

// export default Home;

function mapStateToProp(state) {

    return ({
            })
}
function mapDispatchToProp(dispatch) {
    // return ({
    //     renderTodo: (user) => { dispatch(renderTodo(user)) }
    // })
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);