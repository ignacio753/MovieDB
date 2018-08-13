import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewMovieForm from '../../components/NewMovieForm';

describe('NewMovieForm', () => {
    it('renders without crashing', () => {
        //const div = document.createElement('div');
        //ReactDOM.render(<NewMovieForm/>, div);
        shallow(<NewMovieForm />);
    });

    describe('render', () => {
        it('should render the new movie button', () => {
            const form = shallow(<NewMovieForm />);
            const addMovie = <button>Add Movie</button>;

            expect(form.contains(addMovie)).toEqual(true);
        });
    });

});