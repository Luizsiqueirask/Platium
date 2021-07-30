import { useDispatch, useSelector } from "react-redux";
import { fetchPlans } from "../../api/plansSlice";

export function PlansList() {
    const dispatch = useDispatch();

    const { entities } = useSelector((state) => state.plans);
    const loading = useSelector((state) => state.loading);

    return (
        <div className="container">
            <div className="nav-justified text-center justify-content-center pb-5">
                <h1 className={"container"}>Lista de Planos</h1>
            </div>

            <div className="row">
                {loading ? (
                    "Loading..."
                ) : (
                    <table className="u-full-width">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Registro</th>
                            <th>Nome</th>
                            <th>Codigo</th>
                        </tr>
                        </thead>
                        <tbody>
                        {entities.length &&
                        entities.map(({ id, registro, nome, codigo }, i) => (
                            <tr key={i}>
                                <td>{codigo}</td>
                                <td>{registro}</td>
                                <td>{nome}</td>
                                <td>{codigo}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="row">
                <div className="two columns">
                    <button
                        onClick={() => dispatch(fetchPlans())}
                        className="button-primary"
                    >
                        Carregar Planos
                    </button>
                </div>
            </div>
        </div>
    );
}
