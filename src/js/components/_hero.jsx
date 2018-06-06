import React from 'react';

class Hero extends React.Component {
    render() {
        return <section className={'page-hero'}>
            <h1 className={'hero__title'}>Raspberry kingdom</h1>
            <button className={'hero__btn'}
                onClick={this.props.openPopup}
            >Enter the gates</button>
        </section>
    }
}

export {Hero};