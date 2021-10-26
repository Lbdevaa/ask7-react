import React from 'react';
import CurrentTime from '../CurrentTime';
import './message.css';

// class Message extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let className = 'message';
//     if (this.props.isGuest) {
//       className += ' guest';
//     }
//     return (
//       <div className={className}>
//         {this.props.children}
//         <CurrentTime />
//       </div>
//     );
//   }
// }

// Message.propTypes = {
//   children: PropTypes.node,
//   isGuest: PropTypes.boolean,
// };

// Message.defaultProps = {
//   isGuest: false,
// };

// export default Message;

const Message = props => (
  <div className="message">
    {props.children}
    <CurrentTime />
  </div>
);

export default Message;
