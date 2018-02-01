import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
    width: '100%',
  },
  load: {
    boxShadow: '0',
    marginLeft:'50%',
  }

};

const Loading = () => (
  <div style={style.container}>
    <div>
      <RefreshIndicator
        className='loading'
        size={70}
        left={-35}
        top={0}
        loadingColor="#00897b"
        status="loading"
        style={style.load}

      />
    </div>
  </div>
);

export default Loading;