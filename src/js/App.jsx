import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        let sortedArr = this.props.data.sort((a, b) => a.info.sortOrder < b.info.sortOrder ? 1 : -1)

        return (
            <div className="container">
                <h1 className="title">test task</h1>
                <ol className="list">
                    {sortedArr.map((data, index) =>
                        <li key={index + data.info.style.color}
                            style={{ color: data.info.style.color }}>
                            {data.name} - {data.info.name}
                        </li>)}
                </ol>
                <button className="btn" onClick={this.props.downloadFile}>Сохранить</button>
            </div>
        )
    }
}

App.propTypes = {
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(Object).isRequired,
    downloadFile: PropTypes.func.isRequired
}

export default App;