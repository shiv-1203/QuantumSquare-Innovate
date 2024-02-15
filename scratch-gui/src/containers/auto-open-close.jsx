import {connect} from 'react-redux';
import React from 'react';
import {
    closeModal
} from '../reducers/auto-open-close.js'

import AutoOpenCloseComponent from '../components/auto-open-close/auto-open-close.jsx';

const mapStateToProps = state =>({
    visible: state.scratchGui.autoOpenClose.visible, 
});

const mapDispatchToProps = dispatch => ({
    onCloseModal: () => dispatch(closeModal()) 
});

class AutoOpenCloseModal extends React.Component {
    render() {
        return(
            <AutoOpenCloseComponent/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoOpenCloseModal);