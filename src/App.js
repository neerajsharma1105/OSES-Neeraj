import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withThemeCreator } from '@material-ui/styles';
import NavBar from './components/NavBar'
import Side from './components/Side';
function App() {
  return (
    <div className="App" >
      
          
          <div class="row">
              <div class="col-4">
                <Side/>
              </div>
              <div class="col-6 demo">
                <UserForm/>           
              </div>
          </div>

      
    </div>
  );
}


export default App;
