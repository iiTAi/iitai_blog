import './App.css';
import { Grid2 } from '@mui/material';
import Header from './Header';
import Content from './Content';



function App() {
  return (
    <Grid2 container direction="column">
      <Header />
      <div style={{ padding: 0 }}>
        <Content />
      </div>
    </Grid2>
  );
}

export default App;
