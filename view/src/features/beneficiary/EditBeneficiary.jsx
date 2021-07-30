import { useDispatch, useSelector } from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import { useState } from "react";
import { UpdateBeneficiary } from "../../api/beneficiarySlice";

export function EditBeneficiary() {
    const { pathname } = useLocation();
    const beneficiaryId = parseInt(pathname.replace("/edit-beneficiary/", ""));
    const beneficiary = useSelector((state) =>
        state.beneficiaries.entities.find((beneficiary) => beneficiary.id === beneficiaryId)
    );

    const dispatch = useDispatch();
    const history = useHistory()
    const [quantidade, setQuantidade] = useState(beneficiary.quantidade);
    const [idade, setIdade] = useState(beneficiary.idade);
    const [nomes, setNomes] = useState(beneficiary.nomes);
    const [error, setError] = useState(null);

    const handleQuantidade = (e) => setQuantidade(e.target.value);
    const handleIdade = (e) => setIdade(e.target.value);
    const handleNomes = (e) => setNomes(e.target.value);

    const handleClick = () => {
        if (quantidade && idade && nomes) {
            dispatch(
                UpdateBeneficiary({
                    id: beneficiaryId,
                    quantidade,
                    idade,
                    nomes
                })
            );

            setError(null);
            history.push("/beneficiary");
        } else {
            setError("Fill in all fields");
        }

        setQuantidade("");
        setIdade("");
        setNomes("")
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Add Beneficiary</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="amountInput">Quantidade</label>
                    <input
                        className="u-full-width"
                        type="text"
                        placeholder="Quantidade de beneficiários"
                        id="amountInput"
                        onChange={handleQuantidade}
                        value={quantidade}
                    />
                    <label htmlFor="ageInput">Idade</label>
                    <input
                        className="u-full-width"
                        type="email"
                        placeholder="Idade de cada beneficiário"
                        id="ageInput"
                        onChange={handleIdade}
                        value={idade}
                    />
                    <label htmlFor="nameInput">Nome</label>
                    <input
                        className="u-full-width"
                        type="email"
                        placeholder="Nome de cada beneficiário"
                        id="nameInput"
                        onChange={handleNomes}
                        value={nomes}
                    />
                    {error && error}
                    <button onClick={handleClick} className="button-primary">
                        Save Beneficiary
                    </button>
                </div>
            </div>
        </div>
    );
}