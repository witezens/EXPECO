<?php

namespace App\Http\Controllers\Creditos;


use App\Exports\NoLiquidadosExport;
use App\Http\Controllers\Controller;
use Auth;

class ExportsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:colaborador');
    }

    public function export(NoLiquidadosExport $noLiquidadosExport)
    {
        return $noLiquidadosExport;
    }
}
