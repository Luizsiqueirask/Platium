<?php


namespace App\Http\Controllers\Persistence;

use App\Models\Plans;
use Illuminate\Support\Facades\File;
use PHPUnit\TextUI\XmlConfiguration\MigrationException;

class PlansPersistence
{
    private $plansJson;
    private $planArray;
    private $PlansData;
    private $arraylistPlan;

    /**
     */
    function __construct() {
        $plansFile = File::get("../database/jsons/plans.json");
        $this->planArray = array(json_decode($plansFile));
        $this->arraylistPlan = array();
    }

    /**
     * @return string
     */
    public function List(): string
    {
        foreach ($this->planArray as $plans){
            foreach ($plans as $plan){
                $this->plansJson = array(
                    'registro'      =>  $plan->registro,
                    'nome'          =>  $plan->nome,
                    'codigo'        =>  $plan->codigo
                );
                array_push($this->arraylistPlan, $this->plansJson);
            }
        }
        return json_encode($this->arraylistPlan);
    }

    /**
     * @return void
     */
    public function Migrate()
    {

        $plans = json_decode($this->List());

        try {
            foreach ($plans as $plan){
                Plans::create(
                    array(
                        'registro'      =>  $plan->registro,
                        'nome'          =>  $plan->nome,
                        'codigo'        =>  $plan->codigo
                    )
                );
            }
        }catch (MigrationException $exception){}
    }
}
