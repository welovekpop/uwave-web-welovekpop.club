import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import Motd from '../../containers/Motd';

var _ref = _jsx('div', {}, void 0, _jsx('p', {}, void 0, 'Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P'), _jsx(Motd, {}));

var Main = function Main() {
  return _ref;
};

Main.propTypes = process.env.NODE_ENV !== "production" ? {} : {};

export default Main;
//# sourceMappingURL=index.js.map
