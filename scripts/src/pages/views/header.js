import React from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import Gravatar from 'react-gravatar';
import Authentication from '../../utils/authentication';

export default (self) => {
  return (
    <header className="header">
        <div className="container border-bottom">
            <div className="left third text-left">
                <Link to="/"><span className="logo"><img src="img/logo.png" /></span></Link>
            </div>

            <div className="left third text-center">
                <strong className="uppercase"><Moment format="HH:mm:ss">{self.state.now}</Moment></strong><br />
                <small className="light">
                    <strong><Moment format="MMMM Do YYYY">{self.state.now}</Moment></strong>
                </small>
            </div>

            <div className="right third text-right">
                {Authentication.user &&
                    <ul className="account-dropdown">
                        <li onClick={self.toggleAccountDropdown.bind(self)}>
                            <div className="profile-circle">
                                <Gravatar email={Authentication.user.email} />
                            </div>
                            Account

                            <ul className={self.state.accountDropdownOpen ? 'is-open' : 'is-hidden'}>
                                <li><Link to="/preferences"><i className="fa fa-cogs" aria-hidden="true"></i> Preferences</Link></li>
                                <li><Link to="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Log out</Link></li>
                            </ul>
                        </li>
                    </ul>
                }
            </div>
        </div>
    </header>
  );
};
