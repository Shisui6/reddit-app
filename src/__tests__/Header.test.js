import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from '../features/Header/Header';

afterEach(cleanup);

describe('<Header/>', () => {
    it('Renders correctly', () => {
        render(<Header/>);

        expect(screen.getByTestId('logo')).toBeInTheDocument();
        expect(screen.getByTestId('search')).toBeInTheDocument();
        expect(screen.getByTestId('profile')).toBeInTheDocument();
    })
})