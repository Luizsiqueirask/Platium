<?php


namespace App\Http\Controllers\Persistence;

use App\Models\Prices;
use Illuminate\Support\Facades\File;
use PHPUnit\TextUI\XmlConfiguration\MigrationException;

class PricesPersistence
{
    private $pricesJson;
    private $priceArray;
    private $arraylistPrice;

    function __construct() {
        $priceFile = File::get("../database/jsons/prices.json");
        $this->priceArray = array(json_decode($priceFile));
        $this->arraylistPrice = array();
    }

    /**
     * @return string
     */
    public function List(): string
    {
        foreach ($this->priceArray as $prices){
            foreach ($prices as $price){

                $this->pricesJson = array(
                    'codigo'          =>  $price->codigo,
                    'minimo_vidas'    =>  $price->minimo_vidas,
                    'faixa1'          =>  $price->faixa1,
                    'faixa2'          =>  $price->faixa2,
                    'faixa3'          =>  $price->faixa3
                );
                array_push($this->arraylistPrice, $this->pricesJson);
            }
        }
        return json_encode($this->arraylistPrice);
    }

    /**
     * @return void
     */
    public function Migrate()
    {
        $prices = json_decode($this->List());

        try {
            foreach ($prices as $price){
                Prices::create(
                    array(
                        'codigo'          =>  $price->codigo,
                        'minimo_vidas'    =>  $price->minimo_vidas,
                        'faixa1'          =>  floatval($price->faixa1),
                        'faixa2'          =>  floatval($price->faixa2),
                        'faixa3'          =>  floatval($price->faixa3)
                    )
                );
            }
        }catch (MigrationException $exception){
        }
    }
}
