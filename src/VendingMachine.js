import { BrowserRouter, Route, Link, NavLink, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Cola from "./Cola";
import Candy from "./Candy";
import Chips from "./Chips";

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
            <h1>Pick a snack!</h1>
             <img 
                src="https://media3.giphy.com/media/l2Jeh5xaLwEJ3QWd2/200.webp?cid=ecf05e47z8om25aptkkpasdb3pvznxftq24ik1ws102d2n77&ep=v1_gifs_search&rid=200.webp&ct=g"
            />
            <Navbar />
                <Routes>
                    <Route path='/drink' element={ <Cola />} />
                    <Route path='/candy' element={<Candy />} />
                    <Route path='/chips' element={<Chips/>} />
                 </Routes>
            </BrowserRouter>
     
           
            
            
        </div>
    )
}

export default VendingMachine;