import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import ms from 'ms';
import Button from "@material-ui/core/es/Button";
import TableRow from "@material-ui/core/es/TableRow";
import TableCell from "@material-ui/core/es/TableCell";
import Avatar from '../../../components/Avatar';
import Username from '../../../components/Username/WithCard';
var enhance = translate();
var avatarStyle = {
  width: 48,
  paddingRight: 0
};

var BanRow = function BanRow(_ref) {
  var t = _ref.t,
      ban = _ref.ban,
      onUnbanUser = _ref.onUnbanUser;
  return _jsx(TableRow, {}, void 0, _jsx(TableCell, {
    style: avatarStyle
  }, void 0, _jsx(Avatar, {
    user: ban.user
  })), _jsx(TableCell, {}, void 0, _jsx(Username, {
    user: ban.user
  })), _jsx(TableCell, {}, void 0, ms(ban.duration, {
    long: true
  })), _jsx(TableCell, {}, void 0, ban.reason || _jsx("em", {}, void 0, t('admin.bans.noReason'))), _jsx(TableCell, {}, void 0, _jsx(Username, {
    user: ban.moderator
  })), _jsx(TableCell, {}, void 0, _jsx(Button, {
    variant: "raised",
    onClick: onUnbanUser
  }, void 0, t('admin.bans.unban'))));
};

BanRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  ban: PropTypes.shape({
    user: PropTypes.object.isRequired,
    duration: PropTypes.number.isRequired,
    reason: PropTypes.string,
    moderator: PropTypes.object.isRequired
  }).isRequired,
  onUnbanUser: PropTypes.func.isRequired
} : {};
export default enhance(BanRow);
//# sourceMappingURL=Row.js.map
