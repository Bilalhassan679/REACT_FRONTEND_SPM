import React from 'react';
import Layout from '../layout';
import { documentTitle } from '../utils/title';

const Signup = () => {

    // page title 
    documentTitle("Create an account")

    return (
        <Layout>
            <h1>Signup</h1>
        </Layout>
    )
}

export default Signup