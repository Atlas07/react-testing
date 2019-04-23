import React from 'react';
import { string } from 'prop-types';

const Message = ({ type, data }) => (
  <p>{data}</p>
);

Message.propTypes = {
  type: string.isRequired,
  data: string.isRequired,
};

export default Message;
