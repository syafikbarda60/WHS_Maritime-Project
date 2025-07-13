<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;



class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('created_at', 'DESC')->get(); // Ambil semua layanan, urutkan dari yang terbaru

        return response()->json([
        'status' => true, 
        'data' => $services 
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

     public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'title' => 'required|string|max:255',
        'slug' => 'required|string|max:255|unique:services,slug',
        'short_description' => 'nullable|string',
        'content' => 'nullable|string',
        'status' => 'nullable|in:0,1'
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $model = new Service();
    $model->title = $request->title;
    $model->slug = Str::slug($request->slug ?? $request->title);
    $model->short_description = $request->short_description;
    $model->content = $request->content;
    $model->status = $request->status ?? 1;
    $model->save();

    return response()->json([
        'status' => true,
        'message' => 'Service added successfully.',
        'data' => $model
    ]);
}


    /*
    public function store(Request $request)
    {
        $validator = Validator::make ($request -> all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug',
        ]);

        if ($validator -> fails()) {
            return response() -> json([
                'status' => false,
                'errors' => $validator -> errors()
            ]);
        }

        $model = new Service(); // Buat objek layanan baru
        $model->title = $request->title; // Ambil judul dari request
        $model->slug = Str::slug($request->slug); // Buat slug yang bersih dari judul
        $model->short_description = $request->short_description; // Ambil deskripsi singkat
        $model->content = $request->content; // Ambil konten lengkap
        $model->status = $request->status; // Ambil status
        $model->save(); // Simpan ke database

    // 4. Beri Tahu Frontend Bahwa Berhasil
    return response()->json([
        'status' => true, // Beri tahu frontend bahwa sukses
        'message' => 'Service added successfully.' // Pesan sukses
    ]);
    }
    */
    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
