import { Route, Routes } from "react-router-dom";
import Inspiracao  from "./components/pages/Inspiracao";
import Contato from "./components/pages/Contato";
import Produto from "./components/pages/Produto";
import Index from "./components/pages/";


 function Rotas(){
    return(
        <Routes>
           <Route path='/' element={<Index />} />
           <Route path="/Inspiracao" element={<Inspiracao/>} />
           <Route path="/Produto" element={<Produto/>} />
           <Route path="/Contato" element={<Contato/>} />
        </Routes>
    )

}

export default Rotas