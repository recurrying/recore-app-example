/**
 * The logic code for recore application pages, its just a combination
 * of pure functions to handle remote request and state change
 */
export default {
  defaults(props) {
    return {
      thumbsUp: 0,
      varFromProps: props.data, // for demo
    };
  },

  async queryUserInfo({ setState }, uid) {
    const userData = await revo.queryUserInfo({ uid });

    setState({
      userData,
    });
  },

  onClick({ getState, setState }) {
    const state = getState();

    setState({
      thumbsUp: state.thumbsUp + 1,
    });
  },
};
