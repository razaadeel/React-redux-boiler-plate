import ActionTypes from '../constant/constant';
import { fb } from '../../config/firebase';
import { history } from '../../components/Routes'


export function SignupUser(user) {
    fb.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((currentUser) => {
            delete (user.password);
            fb.database().ref('users/' + currentUser.uid).set({
                name: user.name,
                email: user.email,

            });
            history.push('/');
        })
        .catch(function (error) {

            alert(error.code)
        });

    return dispatch => dispatch({ type: ActionTypes.SignupUser, payload: user })

}

export function SigninUser(user) {
    fb.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((currentUser) => {
            history.push('/');

        })
        .catch(function (error) {

            alert(error.code)
        });

    return dispatch => dispatch({ type: ActionTypes.SigninUser, payload: user });

}

export function SignOut() {
    fb.auth().signOut()

    return dispatch => dispatch({ type: ActionTypes.SignOut })

}
