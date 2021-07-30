import {Link} from "react-router-dom";

export function NAVHouse() {
    return (
        <div className="container">
            <div className="justify-content-center">
                <h1 className="h1 justify-content-center">API LINK - Redux CRUD APP</h1>
            </div>
            <div className="container">
                <div className="row">
                    <Link to={'/prices'}>
                        <button className="columns button-primary ">Preço</button>
                    </Link>
                    <Link to={'/beneficiary'}>
                        <button className="columns button">Beneficiario</button>
                    </Link>
                    <Link to={'/proposal'}>
                        <button className="columns button-primary">Proposta</button>
                    </Link>
                    <Link to={'/plans'} >
                        <button className="columns button" >Planos</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}