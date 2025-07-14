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
        'title' => 'required',
        'slug' => 'required|unique:services,slug',
        'short_desc' => 'required',
        'content' => 'required',
        'stats' => 'required|numeric',
        'img' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()
        ]);
    }

    $filename = null;

    if ($request->hasFile('img')) {
        $filename = $request->file('img')->store('services', 'public');
    }

    $model = new Service();
    $model->title = $request->title;
    $model->slug = Str::slug($request->slug);
    $model->short_desc = $request->short_desc;
    $model->content = $request->content;
    $model->stats = $request->stats;
    $model->img = $filename;
    $model->save();

    return response()->json([
        'status' => true,
        'message' => 'Service added successfully.'
    ]);

       
       
        /* $validator = Validator::make ($request -> all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug',
            'short_desc' => 'required',
            'content' => 'required',
            'stats' => 'required|numeric',
            'img' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($validator -> fails()) {
            return response() -> json([
                'status' => false,
                'errors' => $validator -> errors()
            ]);
        }

         $filename = null;

    if ($request->hasFile('img')) {
        $filename = $request->file('img')->store('services', 'public'); // <- simpan di storage/app/public/services

        $model = new Service(); // Buat objek layanan baru
        $model->title = $request->title; // Ambil judul dari request
        $model->slug = Str::slug($request->slug); // Buat slug yang bersih dari judul
        $model->short_desc = $request->short_desc; // Ambil deskripsi singkat
        $model->content = $request->content; // Ambil konten lengkap
        $model->stats = $request->stats; // Ambil status
        $model->img = $filename; // <- simpan nama file
        $model->save(); // Simpan ke database

    // 4. Beri Tahu Frontend Bahwa Berhasil
    return response()->json([
        'status' => true, // Beri tahu frontend bahwa sukses
        'message' => 'Service added successfully.' // Pesan sukses
    ]);
    */
    }
    
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

    if (!$service) {
        return response()->json(['status' => false, 'message' => 'Service not found'], 404);
    }

    if ($service->img && \Storage::exists('public/' . $service->img)) {
        \Storage::delete('public/' . $service->img);
    }

    $service->delete();

    return response()->json(['status' => true, 'message' => 'Service deleted']);
}
}