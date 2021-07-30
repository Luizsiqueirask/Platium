<?php


namespace App\Http\Controllers\Persistence;

use App\Http\Features\FileRegister;
use Illuminate\Support\Facades\File;

class BeneficiaryPersistence
{
    private $quantidade;
    private $idade;
    private $nomes;
    private $plano;
    private $proposal;
    private $fileregister;
    private $beneficiaryArray;
    private $arraylistBeneficiary;
    private $ListAllPlans;
    private $list_proposal;

    function __construct()
    {
        $beneficiaryFile = File::get("../database/jsons/beneficiary.json");
        $this->beneficiaryArray = array(json_decode($beneficiaryFile));
        $this->arraylistBeneficiary = array();

        $this->ListAllPlans = new PlansPersistence();

        $this->nomes            = array();
        $this->proposal         = array();
        $this->fileregister     = new FileRegister();
    }

    /**
     * @return void
     */
    public function List(): string
    {
        return json_encode($this->beneficiaryArray);
    }

    /**
     * Display a listing of the resource.
     *
     * @param int $idade
     * @param int $quantidade
     * @return void
     */
    public function price_generator(int $idade, int $quantidade): array
    {
        $porcentagem = 0.5;
        $tabelaCusto = array();

        foreach (range(9, 15, 2) as $tributo) {
            $faixa = ($tributo + (($idade * ($quantidade * $porcentagem) * $quantidade) + ($idade * ($tributo * ($porcentagem * 0.2))) / 2));
            array_push($tabelaCusto, $faixa);
        }

        return array(
            'faixa1' => $tabelaCusto[0],
            'faixa2' => $tabelaCusto[1],
            'faixa3' => $tabelaCusto[2],
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param int $idade
     * @param int $quantidade
     * @return array
     */
    public function make_prices(int $idade, int $quantidade): array
    {
        $prices = array();

        if ($idade > 40){
            return $this->price_generator($idade, $quantidade);
        }elseif ($idade > 17){
            return $this->price_generator($idade, $quantidade);
        }elseif ($idade > 0){
            return $this->price_generator($idade, $quantidade);
        }else{
            echo response("Idade não identificada: ", "400")
                ->header('Content-Type', $idade);
        }
        return $prices;
    }

    /**
     * Display a listing of the resource.
     *
     * @param string $plano
     * @return array
     */
    public function check_plans(string $plano): array
    {
        $plans = json_decode($this->ListAllPlans->List());
        foreach ($plans as $plan){
            if( $plan->registro == $plano){
                return array(
                    "registro"  => $plan->registro,
                    "nome"      => $plan->nome,
                    "codigo"    => $plan->codigo,
                );
            }
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @param $requestList
     * @return array
     */
    public function Create($requestList): array
    {
        $json_list = json_decode($requestList);

        $this->quantidade   = $json_list->quantidade;
        $this->idade        = $json_list->idade;
        $this->nomes        = $json_list->nomes;
        $this->plano        = $json_list->plano;
        $this->proposal     = $this->check_plans($this->plano);
        $this->prices       = $this->make_prices($this->idade, $this->quantidade);

        $list_beneficiary = array(
            'quantidade'    => $this->quantidade,
            'idade'         => $this->idade,
            'nomes'         => $this->nomes,
            'plano'         => $this->plano,
            'prices'        => $this->prices
        );

        $listBeneficiary = [];
        array_push($listBeneficiary, $list_beneficiary);
        $this->fileregister->appending_file_plus("beneficiary", json_encode($listBeneficiary));

        $list_proposal = array(
            'quantidade'    => $this->quantidade,
            'idade'         => $this->idade,
            'nomes'         => $this->nomes,
            'plano'         => $this->plano,
            'prices'        => $this->prices,
            'proposal'      => $this->proposal
        );

        $listProposal = [];
        array_push($listProposal, $list_proposal);
        $this->fileregister->appending_file_plus("proposal", json_encode($listProposal));

        dd(json_encode($list_beneficiary));
        //return $list_beneficiary;
    }
}
