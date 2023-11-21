import React from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*validate username:
must start with a lower or uppercase letter
then must be followed by 3-23 characters of lower or uppercase letters, digits, hyphens or underscores
total of 4-24 charachters
*/
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
/*validate password:
at least 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character
total of 8-24 characters
*/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  return <div>Register</div>;
};

export default Register;
