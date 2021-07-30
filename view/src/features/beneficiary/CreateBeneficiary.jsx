import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AddBeneficiary } from "../../api/beneficiarySlice";

export function CreateBeneficiary() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
        quantidade: 0,
        idade: 0,
        nomes: [],
        plano: "",
        preco: []
    }
    const dispatch = useDispatch();
    const history = useHistory()
    const [quantidade, setQuantidade] = useState(0);
    const [idade, setIdade] = useState(0);
    const [nomes, setNomes] = useState("");
    const [plano, setPlano] = useState("");
    const [error, setError] = useState(null);

    const handleQuantidade = (e) => setQuantidade(e.target.value);
    const handleIdade = (e) => setIdade(e.target.value);
    const handleNomes = (e) => setNomes(e.entities.values);
    const handlePlanos = (e) => setNomes(e.entities.values);

    const beneficiaryAmount = useSelector((state) => state.beneficiaries.entities.length);


    const handleClick = () => {

        if (quantidade && idade && nomes) {
            dispatch(
                AddBeneficiary({
                    id: beneficiaryAmount + 1,
                    quantidade, idade, nomes, plano
                })
            );

            setError(null);
            history.push("/beneficiary");
        } else {
            setError("Fill in all fields");
        }

        setQuantidade(0);
        setIdade(0);
        setNomes("");
        setPlano("")

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
                    <label htmlFor="nameInput">Plano</label>
                    <section
                        className="u-full-width"
                        type="plano"
                        placeholder="Nome de cada beneficiário"
                        id="PlansInput"
                        onChange={handlePlanos}
                        value={plano}
                    />
                    {error && error}
                    <button onClick={handleClick} className="button-primary">
                        Add Beneficiary
                    </button>
                </div>
            </div>
        </div>
    );
}