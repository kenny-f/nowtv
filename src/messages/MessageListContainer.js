import { connect } from 'react-redux';
import MessageList from './MessageList';
import { selectMessageList } from './selectors';

const mapStateToProps = state => {
  return {
    list: selectMessageList(state),
  }
}

export default connect(mapStateToProps)(MessageList)