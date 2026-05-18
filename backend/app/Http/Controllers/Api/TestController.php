<?php 

namespace App\Http\Controllers\Api;

class TestController
{
    public function pingo()
    {
        return response()->json([
            'success' => true,
            'message' => 'Api Çalışıyor!',
        ]);
    }

    public function Hello()
    {
        $name = request('name');
        return response() ->json([
            'message' => 'Hello ' . $name,
        ]);
    }

    public function contact()
    {
        request()->validate([
            'name' => 'required|string',
            'message' => 'required|string',
        ]);
        $name = request('name');
        $message = request('message');
        return response() ->json([
            'success' => true,
            'data' => [
                'name'=>$name,
                'message' =>$message,
            ],
        ]);
    }
}

?>