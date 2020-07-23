import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions';
import { todosWithMilk, todosWithMilkAndBread } from '../reducers';

function Todos({
  withMilk,
  withMilkAndBread,
  error,
  loading,
}) {
  return (
    <div>
      {/* ... */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    withMilk: todosWithMilk(state),
    withMilkAndBread: todosWithMilkAndBread(state),
    error: state.todo.error,
    loading: state.todo.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
