import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginForm from '../../components/LoginForm';
import * as constants from '../../utils/constants';
import LogoutForm from '../../components/LogoutForm';

describe('LoginForm', () => {
    it('renders without crashing', () => {
        shallow(<LoginForm currentUser={constants.NO_USER} />);
    });

    describe('login', () => {
        it('should render the login button when not logged in', () => {
            const form = shallow(<LoginForm currentUser={constants.NO_USER} />);
            const login = 'Login';

            expect(form.contains(login)).toEqual(true);
        });
    });

});