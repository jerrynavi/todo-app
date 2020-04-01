import React, { Component } from 'react';
import styles from './Home.module.scss';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router';
import { AnyAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

interface HomeProps extends RouteComponentProps {
    dispatch(args: AnyAction): void;
}

class Home extends Component<HomeProps> {

    componentDidMount = (): void => {
        // to do, lol
    }

    render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <title>Manage your To-Dos effectively - ToDo App</title>
                </Helmet>
                <div className={styles.home}>
                    {/* to do */}
                </div>
            </>
        );
    }
}

export default connect()(Home);