import React, { Component } from 'react';
import Loading from './components/loading/loading.jsx';
import UserList from './components/user-list/user-list.jsx';


class App extends Component {

    state = {
        isFetching: false,
        data: null,
        error: null,
    }

    componentWillMount() {
        this.setState(() => ({ isFetching: true }));
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(data => {
                this.setState(() => ({
                    isFetching: false,
                    data,
                }));
            })
            .catch(error => {
                this.setState(() => ({
                    isFetching: false,
                    error,
                }))
            })
    };

    render() {
        const { data, error, isFetching } = this.state;
        return (
            <div className="app">
                <h1>User list:</h1>
                {isFetching
                    ? <Loading />
                    : (
                        <UserList
                            data={data}
                            error={error}
                        />
                    )}
            </div>
        );
    }
}


export default App;
