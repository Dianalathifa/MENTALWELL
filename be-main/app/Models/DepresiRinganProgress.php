<?php

namespace App\Models;

use CodeIgniter\Model;

class DepresiRinganProgress extends Model
{
    protected $table = 'depresi_ringan_progress';
    protected $primaryKey = 'id';
    protected $allowedFields = ['id_partisipan', 'hari','tanggal', 'status'];

    public function getChecklistByUser($partisipanId)
    {
        return $this->where('id_partisipan', $partisipanId)->findAll();
    }

    public function getChecklistByDay($partisipanId, $day)
    {
        return $this->where(['id_partisipan' => $partisipanId, 'hari' => $day])->first();
    }
}
?>
