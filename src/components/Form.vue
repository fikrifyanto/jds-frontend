<template>
  <form class="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-[35vw]">
    <Input name="nama" label="Nama" />
    <Input name="nik" label="NIK" />
    <Input name="kk" label="Nomor Kartu Keluarga" />
    <Input name="age" label="Umur" />
    <Input name="gender" label="Jenis Kelamin" />
    <Select @changeOption="updateProvince" @callback="getRegencies" name="province" label="Provinsi" :items="provinces" />
    <Select @changeOption="updateRegency" @callback="getDistrics" name="regency" label="Kab/Kota" :items="regencies" />
    <Select @changeOption="updateDistrict" @callback="getVillages" name="district" label="Kecamatan" :items="districts" />
    <Select @changeOption="updateVillage" name="village" label="Kelurahan/Desa" :items="villages" />
    <Input name="address" label="Alamat" />
    <Input name="rt" label="RT" />
    <Input name="rw" label="RW" />
    <Input name="incomeBefore" label="Penghasilan sebelum pandemi" />
    <Input name="incomeAfter" label="Penghasilan setelah pandemi" />

    <div class="flex items-center my-3">
      <input name="terms" v-model="terms" type="checkbox" class="w-7 h-7 text-blue-600 bg-gray-100 rounded border-gray-300" />
      <label for="terms" class="ml-3 text-xs text-gray-600">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
    </div>

    <button class="bg-green-500 hover:bg-green-600 px-5 py-3 leading-5 rounded-full font-semibold text-white">Simpan</button>
  </form>
</template>

<script>
import Input from "./Input.vue";
import Select from "./Select.vue";

export default {
  data() {
    return {
      name: "",
      nik: "",
      kk: "",
      age: "",
      gender: "",
      province: "",
      provinces: "",
      regency: "",
      regencies: "",
      district: "",
      districts: "",
      village: "",
      villages: "",
      address: "",
      rt: "",
      rw: "",
      incomeBefore: "",
      incomeAfter: "",
      reason: "",
      terms: false,
    };
  },
  created() {
    this.getProvince();
  },
  methods: {
    updateProvince: function (province) {
      this.province = province;
    },
    updateRegency: function (regency) {
      this.regency = regency;
    },
    updateDistrict: function (district) {
      this.district = district;
    },
    updateVillage: function (village) {
      this.village = village;
    },
    getProvince: function () {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
        .then((response) => response.json())
        .then((provinces) => (this.provinces = provinces));
    },
    getRegencies: function (province) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province}.json`)
        .then((response) => response.json())
        .then((regencies) => (this.regencies = regencies));
    },
    getDistrics: function (regency) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${regency}.json`)
        .then((response) => response.json())
        .then((districts) => (this.districts = districts));
    },
    getVillages: function (district) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${district}.json`)
        .then((response) => response.json())
        .then((villages) => (this.villages = villages));
    },
  },
  components: { Input, Select },
};
</script>
