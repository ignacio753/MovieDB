import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as constants from '../../utils/constants';
import LogoutForm from '../../components/LogoutForm';

describe('LogoutForm', () => {
    it('renders without crashing', () => {
        shallow(<LogoutForm currentUser={constants.NO_USER} />);
    });

    describe('User logged in', () => {
        it('should render the user email', () => {
            const email = 'test@test.com';
            let user = { id: 1, email: email }
            const form = shallow(<LogoutForm currentUser={user} />);

            expect(form.contains(email)).toEqual(true);
        });
    });

});