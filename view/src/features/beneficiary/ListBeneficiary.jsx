import { fetchBeneficiary, DeleteBeneficiary } from "../../api/beneficiarySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function ListBeneficiary() {
    const dispatch = useDispatch();
    const { entities } = useSelector((state) => state.beneficiaries);
    const loading = useSelector((state) => state.loading);

    const handleDelete = (id) => {
        dispatch(DeleteBeneficiary({ id }));
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Redux CRUD Beneficiary app</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <button
                        onClick={() => dispatch(fetchBeneficiary())}
                        className="button-primary"
                    >
                        Load Beneficiary
                    </button>
                </div>
                <div className="two columns">
                    <Link to="beneficiary/add-beneficiary">
                        <button className="button-primary">Add Beneficiary</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {loading ? (
                    "Loading..."
                ) : (
                    <table className="u-full-width">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Quantidade</th>
                            <th>Idade</th>
                            <th>Nomes</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {entities.length &&
                        entities.map(({ id, quantidade, idade, nomes }, i) => (
                            <tr key={i}>
                                <td key={i}>{id}</td>
                                <td>{quantidade}</td>
                                <td>{idade}</td>
                                <td>{nomes}</td>
                                <td>
                                    <button onClick={() => handleDelete(id)}>Delete</button>
                                    <Link to={`beneficiary/edit-beneficiary/${id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}