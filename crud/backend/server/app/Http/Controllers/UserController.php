<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{


    public function index()
    {
        $users = User::all();
        return response()->json($users);
    } 








    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'age' => 'required'
        ]);

        // Use fails() method on the validator instance, not validator()
        if ($validator->fails()) {
            return response()->json([
                'status' => '422',
                'error' => $validator->errors(),
                
            ]);
        } else {
            $user = new User();
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->age = $request->input('age');
            $user->save();

            return response()->json([
                'status' => '200',
                'message' => 'User Added Successfully'
            ]);
        }
    }





    public function delete($id)
    {
        $result = User::where('id',$id)->delete();

        if($result){
            return ['result' => 'product deleted'];
        } else {
            return ['result' => 'prodect no deleted'];
        }

    }




    public function update(Request $request, $id)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required',
        'age' => 'required'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => '422',
            'error' => $validator->errors(),
        ]);
    } else {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => '404',
                'message' => 'User not found'
            ]);
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->age = $request->input('age');
        $user->save();

        return response()->json([
            'status' => '200',
            'message' => 'User Updated Successfully'
        ]);
    }
}


}
