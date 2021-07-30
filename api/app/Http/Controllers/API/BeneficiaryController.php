<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Persistence\BeneficiaryPersistence;
use Illuminate\Http\Request;

class BeneficiaryController extends Controller
{
    private $persite;

    function __construct() {
        $this->persite = new BeneficiaryPersistence();
    }

    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index()
    {
        return $this->persite->List();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $quantidade    = $request->get('quantidade');
        $idade         = $request->get('idade');
        $nomes         = $request->get('nomes');
        $plano         = $request->get('plano');

        $resquestInput = array(
            'quantidade'    => $quantidade,
            'idade'         => $idade,
            'nomes'         => $nomes,
            'plano'         => $plano,
        );

        $this->persite->Create(json_encode($resquestInput));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return void
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return void
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return void
     */
    public function destroy($id)
    {
        //
    }
}
