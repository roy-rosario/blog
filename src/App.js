import './App.css'
import {AppBar, Toolbar, Typography } from '@material-ui/core';



function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
              Blog
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
