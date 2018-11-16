import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { boardlistpage, boarddetailpage, mylistpage, uploadpage,notfoundpage } from 'pages';





const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={boardlistpage}/>
        <Route path="/detail" component={boarddetailpage}/>
        <Route path="/mylist" component={mylistpage}/>
        <Route path="/upload" component={uploadpage}/>    
        <Route component={notfoundpage}/>
      </Switch>

    </div>
  );
};

export default App;
