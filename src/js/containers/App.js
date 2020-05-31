import App from '../App.jsx';
import { dataFetch, downloadFile } from '../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(dataFetch()),
    downloadFile: () => dispatch(downloadFile())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);