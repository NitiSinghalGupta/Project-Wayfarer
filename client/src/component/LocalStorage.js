import React from 'react';

export default class LocalStorage extends React.Component {

    render() {
        if (localStorage.getItem("email") === '') {
            this.props.userHasLoggedIn = false;
            return alert("You are not Authorized to see this page");
        }

        return true;
    }

}
