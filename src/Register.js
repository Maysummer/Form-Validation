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
total of 4-24 characters
*/
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
/*validate password:
at least 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character
total of 8-24 characters
*/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  //to set focus on user input when component loads
  const userRef = useRef();
  //to set focus on any error gotten, so it can be announced by a screen reader for accesibility
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    //setting the focus on username input when component loads
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const isUserNameValid = USER_REGEX.test(user);
    console.log(isUserNameValid);
    console.log(user);
    setValidName(isUserNameValid);
  }, [user]);

  useEffect(() => {
    const isPasswordValid = PWD_REGEX.test(pwd);
    console.log(isPasswordValid);
    console.log(pwd);
    setValidPwd(isPasswordValid);
    const arePasswordsMatched = pwd === matchPwd;
    setValidMatch(arePasswordsMatched);
  }, [pwd, matchPwd]);

  useEffect(() => {
    //clear error message when user changes anyy info (they are trying to rectify)
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <p
        ref={userRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          Username:{' '}
          <span className={validName ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validName || !user ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          required
          aria-invalid={validName ? 'false' : 'true'}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          onChange={(e) => setUser(e.target.value)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validName ? 'instructions' : 'offscreen'
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          4 to 24 characters. <br />
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="password">
          Password:
          <span className={validPwd ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="password"
          required
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          onChange={(e) => setPwd(e.target.value)}
        />
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters. <br />
          Must include uppercase and lowercase letters, a number and a special
          character. <br />
          Allowed special characters:{' '}
          <span aria-label="exclamation mark">!</span>{' '}
          <span aria-label="at symbol">@</span>
          <span aria-label="hash tag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="confirm_pwd"
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          onChange={(e) => setMatchPwd(e.target.value)}
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field .
        </p>

        <button
          disabled={!validName || !validPwd || !validMatch ? true : false}
        >
          Sign up
        </button>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          {/*'router link goes here'*/}
          <a href="#">Sign In</a>
        </span>
      </p>
    </section>
  );
};

export default Register;
