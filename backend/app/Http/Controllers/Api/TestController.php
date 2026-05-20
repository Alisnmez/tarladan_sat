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
            'name' => 'required',
            'message' => 'required',
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

     public function contacts(){
        return response()->json([
            [
            'id' => 1,
            'name' => 'Ali',
            'message' => 'Merhaba',
        ],
        [
            'id' => 2,
            'name' => 'Ayse',
            'message' => 'Selam',
        ],
        ]);
     }
}

?>