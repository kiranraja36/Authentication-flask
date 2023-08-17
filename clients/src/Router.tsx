import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Landingpage from './pages/landingpage'
import Loginpage from './pages/Loginpage'
import Notfound from './pages/Notfound'
import Registerpage from './pages/Registerpage'
const Router = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Landingpage/>}/>
            <Route element={<Notfound/>}/>
            <Route path="/login"  element={<Loginpage/>}/>
            <Route path='/register' element={<Registerpage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router