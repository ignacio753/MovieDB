import React from 'react';
import { shallow, mount } from 'enzyme';
import EditMovieForm from '../../components/EditMovieForm';

describe('EditMovieForm', () => {
    it('renders without crashing', () => {
        let movie = { id: 1, title: 'Test', description: 'Test description' }
        shallow(<EditMovieForm movie={movie} />);
    });

    /*describe('Editing a movie', () => {
        it('should render the title', () => {
            let movieName = 'Test Movie'
            let movie = { id: 1, title: movieName, description: 'Test description' }
            const form = shallow(<EditMovieForm key={1} movie={movie} />);
            const input = form.find('input').get(0);

            expect(form.find('input').value()).toContain(movieName);
        });
    });*/

});