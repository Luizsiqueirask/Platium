import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from "../../api/pricesSlice";

export function PriceList() {
    const dispatch = useDispatch();

    const { entities } = useSelector((state) => state.prices);
    const loading = useSelector((state) => state.loading);

    return (
        <div className="container">
            <div className="row">
                <h1 className={"container"}>Redux List Preço</h1>
            </div>

            <div className="row">
                {loading ? (
                    "Loading..."
                ) : (
                    <table className="u-full-width">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Codigo</th>
                            <th>Minimo vidas</th>
                            <th>Preço 1</th>
                            <th>Preço 2</th>
                            <th>Preço 3</th>

                        </tr>
                        </thead>
                        <tbody>
                        {entities.length &&
                        entities.map(({ id, codigo, minimo_vidas, faixa1, faixa2, faixa3 }, i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{codigo}</td>
                                <td>{minimo_vidas}</td>
                                <td>{faixa1}</td>
                                <td>{faixa2}</td>
                                <td>{faixa3}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="row">
                <div className="two columns">
                    <button
                        onClick={() => dispatch(fetchPrices())}
                        className="button-primary"
                    >
                        Carregar Preços
                    </button>
                </div>
            </div>
        </div>
    );
}
