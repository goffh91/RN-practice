import React from 'react';
import Presenter from './presenter';

const Container = props => {
    const { navigation, route: { params } } = props;
    
    return (
        <Presenter
            navigation={navigation}
            params={params}
        />
    );
}

export default Container;