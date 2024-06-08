<?php

namespace App\Controllers;

use App\Models\JawabanSuicide;
use CodeIgniter\API\ResponseTrait;
use DateTime;

class Suicide extends BaseController
{
    use ResponseTrait;

    public function saveAnswer()
    {
        $jawabanModel = new JawabanSuicide();

        // Ambil data jawaban dari body request
        $requestData = $this->request->getJSON(true);

        // Pastikan atribut 'jawaban' ada dalam data request
        if (!isset($requestData['jawaban'])) {
            return $this->fail('Atribut "jawaban" tidak ditemukan dalam data permintaan.', 400);
        }

        // Hitung skor Suicide
        $totalScore = array_sum($requestData['jawaban']);

        // Klasifikasi hasil
        $classification = '';
        if ($totalScore >= 1 && $totalScore <= 2) {
            $classification = 'Resiko Bunuh Diri Rendah';
        } elseif ($totalScore >= 3 && $totalScore <= 6) {
            $classification = 'Resiko Bunuh Diri Sedang';
        } elseif ($totalScore >= 7 && $totalScore <= 10) {
            $classification = 'Resiko Bunuh Diri Tinggi';
        } else {
            $classification = 'Tidak Ada Resiko Bunuh Diri';
        }

        // Format data jawaban sesuai dengan model
        $jawabanData = [
            'id_partisipan' => $requestData['id_partisipan'],
            'question_1' => $requestData['jawaban'][0],
            'question_2' => $requestData['jawaban'][1],
            'question_3' => $requestData['jawaban'][2],
            'question_4' => $requestData['jawaban'][3],
            'question_5' => $requestData['jawaban'][4],
            'question_6' => $requestData['jawaban'][5],
            'question_7' => $requestData['jawaban'][6],
            'question_8' => $requestData['jawaban'][7],
            'question_9' => $requestData['jawaban'][8],
            'question_10' => $requestData['jawaban'][9],
            'total_score' => $totalScore,
            'classification' => $classification,
            // Masukkan total skor dan klasifikasi ke dalam database
            'points' => $totalScore,
            'klasifikasi' => $classification,
            'tanggal_tes' => (new DateTime())->format('Y-m-d')
        ];
        

        // Simpan jawaban ke dalam database
        $saved = $jawabanModel->save($jawabanData);

        if ($saved) {
            return $this->respondCreated(['message' => 'Jawaban berhasil disimpan', 'total_score' => $totalScore, 'classification' => $classification]);
        } else {
            return $this->fail('Gagal menyimpan jawaban', 500);
        }
    }

    // Function untuk mengambil jawaban
    public function getAnswers()
    {
        $jawabanModel = new JawabanSuicide();

        // Ambil semua data jawaban dari database
        $answers = $jawabanModel->findAll();

        if ($answers) {
            return $this->respond($answers);
        } else {
            return $this->fail('Data jawaban tidak ditemukan', 404);
        }
    }

    public function getAnswerByIdPartisipan($id_partisipan)
{
    $jawabanModel = new JawabanSuicide();

    // Ambil data jawaban dari database berdasarkan id_partisipan
    $answer = $jawabanModel->where('id_partisipan', $id_partisipan)->first();

    if ($answer) {
        // Format data jawaban sesuai yang diinginkan
        $formattedAnswer = [
            'id_partisipan' => $answer['id_partisipan'],
            'points' => $answer['points'],
            'klasifikasi' => $answer['klasifikasi'],
            'tanggal_tes' => $answer['tanggal_tes']
        ];

        return $this->respond($formattedAnswer);
    } else {
        return $this->fail('Data jawaban tidak ditemukan', 404);
    }
}
}

