<?php 

namespace App\Http\Controllers\Api;
use App\Models\Contact;
use Illuminate\Http\Request;

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

   public function contact(Request $request)
{
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'message' => ['required', 'string'],
    ]);

    $contact = Contact::create([
        'name' => $validated['name'],
        'message' => $validated['message'],
    ]);

    return response()->json([
        'success' => true,
        'data' => $contact,
    ]);
}

     public function contacts(){
        return Contact::latest()->get();
     }
}

?>