import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickSquare, jumpToPast } from './actions';
import { Game } from './components';

const mapStateToProps = (state, ownProps) => {
    return state.game;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    ...bindActionCreators(
        {
            clickSquare,
            jumpToPast
        },
        dispatch
    ),
});

export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
