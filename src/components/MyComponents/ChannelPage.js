import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChannelItem from './ChannelItem';

class ChannelPage extends Component {

    componentDidMount() {
        this.getChannels();
    };

    getChannels = () => {
        this.props.dispatch({
            type: 'FETCH_CHANNELS'
        });
    };

    render() {
        console.log('This is your channel data!', this.props);
        return (

            <>
                <ul id='ChannelPage'>
                    {this.props.channels !== undefined && this.props.channels.map((channel) => {
                        return (
                            <ChannelItem channel={channel} />
                        )
                    })}
                </ul>
            </>

        );
    };
};

const mapStoreToProps = (reduxState) => ({
    channels: reduxState.channels.channelList
});

export default connect(mapStoreToProps)(ChannelPage);