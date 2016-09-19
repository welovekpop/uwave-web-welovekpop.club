import cx from 'classnames';
import * as React from 'react';
import List from 'react-list';

import ModRow from './ModRow';
import SimpleRow from './SimpleRow';

const WaitList = ({
  className,
  users,
  onMoveUser,
  onRemoveUser,
  canMoveUsers
}) => {
  const Row = canMoveUsers ? ModRow : SimpleRow;
  return (
    <div
      className={cx(
        'UserList',
        'UserList--queue',
        'WaitList',
        className
      )}
    >
      <List
        itemRenderer={(index, key) => (
          <Row
            key={key}
            className="UserList-row"
            position={index}
            user={users[index]}
            onMoveUser={position => onMoveUser(users[index], position)}
            onRemoveUser={() => onRemoveUser(users[index])}
          />
        )}
        length={users.length}
        type="uniform"
      />
    </div>
  );
};

WaitList.propTypes = {
  className: React.PropTypes.string,
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  canMoveUsers: React.PropTypes.bool.isRequired,
  onMoveUser: React.PropTypes.func.isRequired,
  onRemoveUser: React.PropTypes.func.isRequired
};

export default WaitList;
