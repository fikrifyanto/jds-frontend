<template>
  <form class="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-[35vw]">
    <div class="flex flex-col gap-2">
      <label for="name">Nama</label>
      <input v-model="name" id="name" :class="{ 'border-red-500': v$.name.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="nik">NIK</label>
      <input v-model="nik" id="nik" :class="{ 'border-red-500': v$.nik.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.nik.$error">
        {{ v$.nik.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="kk">Nomor Kartu Keluarga</label>
      <input v-model="kk" id="kk" :class="{ 'border-red-500': v$.kk.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.kk.$error">
        {{ v$.kk.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="ktp_picture">Foto KTP</label>
      <div @change="(event) => (this.ktp_picture = event.target.files)" :class="{ 'border-red-500': v$.ktp_picture.$error }" class="bg-white flex items-center focus-within:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none appearance-none">
        <input id="ktp_picture" type="file" class="focus:outline-none" />
      </div>
      <span class="text-red-500" v-if="v$.ktp_picture.$error">
        {{ v$.ktp_picture.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="kk_picture">Foto Kartu Keluarga</label>
      <div @change="(event) => (this.kk_picture = event.target.files)" :class="{ 'border-red-500': v$.kk_picture.$error }" class="bg-white flex items-center focus-within:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none appearance-none">
        <input id="kk_picture" type="file" class="focus:outline-none" />
      </div>
      <span class="text-red-500" v-if="v$.kk_picture.$error">
        {{ v$.kk_picture.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="age">Umur</label>
      <input v-model="age" id="age" :class="{ 'border-red-500': v$.age.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="number" />
      <span class="text-red-500" v-if="v$.age.$error">
        {{ v$.age.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="gender">Jenis Kelamin</label>
      <select v-model="gender" :class="{ 'border-red-500': v$.gender.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option value="male">Laki-Laki</option>
        <option value="female">Perempuan</option>
      </select>
      <span class="text-red-500" v-if="v$.gender.$error">
        {{ v$.gender.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="province">Provinsi</label>
      <select @change="getRegencies(province)" v-model="province" :class="{ 'border-red-500': v$.province.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option v-for="item in provinces" v-bind:key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <span class="text-red-500" v-if="v$.province.$error">
        {{ v$.province.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="regency">Kab/Kota</label>
      <select @change="getDistrics(regency)" v-model="regency" :class="{ 'border-red-500': v$.regency.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option v-for="item in regencies" v-bind:key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <span class="text-red-500" v-if="v$.regency.$error">
        {{ v$.regency.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="district">Kecamatan</label>
      <select @change="getVillages(district)" v-model="district" :class="{ 'border-red-500': v$.district.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option v-for="item in districts" v-bind:key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <span class="text-red-500" v-if="v$.district.$error">
        {{ v$.district.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="district">Kelurahan/Desa</label>
      <select v-model="village" :class="{ 'border-red-500': v$.village.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option v-for="item in villages" v-bind:key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <span class="text-red-500" v-if="v$.village.$error">
        {{ v$.village.$errors[0].$message }}
      </span>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-2 gap-2">
      <div class="col-span-2 md:col-span-1 flex flex-col gap-2">
        <label for="address">Alamat</label>
        <textarea v-model="address" id="address" :class="{ 'border-red-500': v$.address.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded p-3 h-28 focus:outline-none" />
        <span class="text-red-500" v-if="v$.address.$error">
          {{ v$.address.$errors[0].$message }}
        </span>
      </div>
      <div>
        <div class="flex flex-col gap-2">
          <label for="rt">RT</label>
          <input v-model="rt" id="rt" :class="{ 'border-red-500': v$.rt.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="number" />
          <span class="text-red-500" v-if="v$.rt.$error">
            {{ v$.rt.$errors[0].$message }}
          </span>
        </div>
        <div class="flex flex-col gap-2">
          <label for="rw">RW</label>
          <input v-model="rw" id="rw" :class="{ 'border-red-500': v$.rw.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="number" />
          <span class="text-red-500" v-if="v$.rw.$error">
            {{ v$.rw.$errors[0].$message }}
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <label for="incomeBefore">Penghasilan sebelum pandemi</label>
      <input v-model="incomeBefore" id="incomeBefore" :class="{ 'border-red-500': v$.incomeBefore.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.incomeBefore.$error">
        {{ v$.incomeBefore.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="incomeAfter">Penghasilan setelah pandemi</label>
      <input v-model="incomeAfter" id="incomeAfter" :class="{ 'border-red-500': v$.incomeAfter.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.incomeAfter.$error">
        {{ v$.incomeAfter.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="reason">Alasan membutuhkan bantuan</label>
      <textarea v-model="reason" id="reason" :class="{ 'border-red-500': v$.reason.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded p-3 h-28 focus:outline-none" />
      <span class="text-red-500" v-if="v$.reason.$error">
        {{ v$.reason.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col my-3">
      <div class="flex item-center">
        <input name="terms" v-model="terms" type="checkbox" id="terms" class="w-7 h-7 text-blue-600 bg-gray-100 rounded border-gray-300" />
        <label for="terms" class="ml-3 text-xs text-gray-600">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
      </div>
      <span class="text-red-500 mt-2" v-if="v$.terms.$error">
        {{ v$.terms.$errors[0].$message }}
      </span>
    </div>

    <button @click="submit" type="button" class="flex justify-center bg-green-500 hover:bg-green-600 px-5 py-3 leading-5 rounded-full font-semibold text-white">
      <svg v-if="load" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p v-if="!load">Simpan</p>
    </button>
  </form>

  <!-- Modal -->
  <Modal v-if="modal.show" :message="modal.message" :responseText="modal.responseText" :statusCode="modal.statusCode" @close="closeModal" />
  <!-- Modal -->
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      modal: {
        show: false,
        message: "",
        responseText: "",
        statusCode: 200,
      },

      load: false,

      name: null,
      nik: null,
      kk: null,
      ktp_picture: null,
      kk_picture: null,
      age: null,
      gender: null,
      province: null,
      provinces: null,
      regency: null,
      regencies: null,
      district: null,
      districts: null,
      village: null,
      villages: null,
      address: null,
      rt: null,
      rw: null,
      incomeBefore: null,
      incomeAfter: null,
      reason: null,
      terms: false,
    };
  },
  validations() {
    return {
      name: { required: helpers.withMessage("Nama tidak boleh kosong", required) },
      nik: { require: helpers.withMessage("NIK tidak boleh kosong", required) },
      kk: { required: helpers.withMessage("Nomor Kartu Keluarga tidak boleh kosong", required) },
      ktp_picture: {
        required: helpers.withMessage("Foto KTP tidak boleh kosong", required),
        checkFileSize: helpers.withMessage("Ukuran file tidak boleh lebih dari 2MB", function (file) {
          if (file) {
            let fileSize = file[0].size / 1024 / 1024;
            if (fileSize > 2) {
              return false;
            }
          }
          return true;
        }),
      },
      kk_picture: {
        required: helpers.withMessage("Foto Kartu Keluarga tidak boleh kosong", required),
        checkFileSize: helpers.withMessage("Ukuran file tidak boleh lebih dari 2MB", function (file) {
          if (file) {
            let fileSize = file[0].size / 1024 / 1024;
            if (fileSize > 2) {
              return false;
            }
          }
          return true;
        }),
      },
      age: { required: helpers.withMessage("Umur tidak boleh kosong!", required) },
      gender: { required: helpers.withMessage("Jenis Kelamin tidak boleh kosong!", required) },
      province: { required: helpers.withMessage("Provinsi tidak boleh kosong!", required) },
      regency: { required: helpers.withMessage("Kab/Kota tidak boleh kosong!", required) },
      district: { required: helpers.withMessage("Kecamatan tidak boleh kosong!", required) },
      village: { required: helpers.withMessage("Desa tidak boleh kosong!", required) },
      address: { required: helpers.withMessage("Alamat tidak boleh kosong!", required) },
      rt: { required: helpers.withMessage("RT tidak boleh kosong!", required) },
      rw: { required: helpers.withMessage("RT tidak boleh kosong!", required) },
      incomeBefore: { required: helpers.withMessage("Pendapatan sebelum pandemi tidak boleh kosong!", required) },
      incomeAfter: { required: helpers.withMessage("Pendpatan setelah pandemi tidak boleh kosong!", required) },
      reason: { required: helpers.withMessage("Alasan tidak boleh kosong!", required) },
      terms: {
        required: helpers.withMessage("Mohon centang terlebih dahulu!", function (event) {
          if (event == false) {
            return false;
          }
          return true;
        }),
      },
    };
  },
  created() {
    this.getProvince();
  },
  methods: {
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
    closeModal: function () {
      this.modal.show = false;
      this.load = false;
    },
    submit: function () {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.load = true;
        let modal = this.modal;

        setTimeout(function () {
          let randomInt = Math.floor(Math.random() * 10);
          if (randomInt > 5) {
            modal.show = true;
            modal.message = "Data telah dikirim!";
            modal.responseText = "Berhasil!";
            modal.statusCode = 200;
          } else {
            modal.show = true;
            modal.message = "Terjadi kesalahan! \n Silahkan coba beberapa saat lagi!";
            modal.responseText = "Internal Server Error 500";
            modal.statusCode = 404;
          }
        }, 1500);
      }
    },
  },
};
</script>
