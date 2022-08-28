<template>
  <form class="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-[35vw] mt-20">
    <div class="flex flex-col gap-2">
      <label for="name">Nama</label>
      <input v-model="name" id="name" :class="{ 'border-red-500': v$.name.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="nik">NIK</label>
      <input v-model="nik" id="nik" :class="{ 'border-red-500': v$.nik.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="number" />
      <span class="text-red-500" v-if="v$.nik.$error">
        {{ v$.nik.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="kk">Nomor Kartu Keluarga</label>
      <input v-model="kk" id="kk" :class="{ 'border-red-500': v$.kk.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="number" />
      <span class="text-red-500" v-if="v$.kk.$error">
        {{ v$.kk.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="ktp_picture">Foto KTP</label>
      <div @change="(event) => (this.ktp_picture = event.target.files)" :class="{ 'border-red-500': v$.ktp_picture.$error }" class="bg-white flex items-center focus-within:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none appearance-none">
        <input id="ktp_picture" type="file" accept="image/jpg, image/jpeg, image/png, image/bmp" class="focus:outline-none" />
      </div>
      <span class="text-red-500" v-if="v$.ktp_picture.$error">
        {{ v$.ktp_picture.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="kk_picture">Foto Kartu Keluarga</label>
      <div @change="(event) => (this.kk_picture = event.target.files)" :class="{ 'border-red-500': v$.kk_picture.$error }" class="bg-white flex items-center focus-within:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none appearance-none">
        <input id="kk_picture" type="file" accept="image/jpg, image/jpeg, image/png, image/bmp" class="focus:outline-none" />
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
      <input v-model="incomeBefore" @focus="this.incomeBefore = unformatRupiah(this.incomeBefore)" @blur="this.incomeBefore = formatRupiah(this.incomeBefore)" id="incomeBefore" :class="{ 'border-red-500': v$.incomeBefore.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.incomeBefore.$error">
        {{ v$.incomeBefore.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="incomeAfter">Penghasilan setelah pandemi</label>
      <input v-model="incomeAfter" @focus="this.incomeAfter = unformatRupiah(this.incomeAfter)" @blur="this.incomeAfter = formatRupiah(this.incomeAfter)" id="incomeAfter" :class="{ 'border-red-500': v$.incomeAfter.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" />
      <span class="text-red-500" v-if="v$.incomeAfter.$error">
        {{ v$.incomeAfter.$errors[0].$message }}
      </span>
    </div>
    <div class="flex flex-col gap-2">
      <label for="reason">Alasan membutuhkan bantuan</label>
      <select v-model="reason" :class="{ 'border-red-500': v$.reason.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
        <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
        <option value="Kepala keluarga terdampak atau korban Covid-19">Kepala keluarga terdampak atau korban Covid-19</option>
        <option value="Tergolong fakir/miskin semenjak sebelum Covid-19">Tergolong fakir/miskin semenjak sebelum Covid-19</option>
        <option value="others">Lainnya</option>
      </select>
      <span class="text-red-500" v-if="v$.reason.$error">
        {{ v$.reason.$errors[0].$message }}
      </span>
      <textarea v-model="other_reason" v-if="this.reason == 'others'" :class="{ 'border-red-500': v$.other_reason.$error }" class="focus:border-green-500 border-2 border-w4c-black-13 rounded p-3 h-28 focus:outline-none" placeholder="Tuliskan disini" />
      <span class="text-red-500" v-if="v$.other_reason.$error && this.reason == 'others'">
        {{ v$.other_reason.$errors[0].$message }}
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
import { required, helpers, minValue } from "@vuelidate/validators";
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
      ktp_picture_file: {
        name: null,
        blob: null,
      },
      kk_picture_file: {
        name: null,
        blob: null,
      },
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
      other_reason: null,
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
      age: {
        required: helpers.withMessage("Umur tidak boleh kosong!", required),
        minValue: helpers.withMessage("Umur harus lebih atau sama dengan 25!", minValue(25)),
      },
      gender: { required: helpers.withMessage("Jenis Kelamin tidak boleh kosong!", required) },
      province: { required: helpers.withMessage("Provinsi tidak boleh kosong!", required) },
      regency: { required: helpers.withMessage("Kab/Kota tidak boleh kosong!", required) },
      district: { required: helpers.withMessage("Kecamatan tidak boleh kosong!", required) },
      village: { required: helpers.withMessage("Desa tidak boleh kosong!", required) },
      address: { required: helpers.withMessage("Alamat tidak boleh kosong!", required) },
      rt: { required: helpers.withMessage("RT tidak boleh kosong!", required) },
      rw: { required: helpers.withMessage("RT tidak boleh kosong!", required) },
      incomeBefore: {
        required: helpers.withMessage("Pendapatan sebelum pandemi tidak boleh kosong!", required),
        numeric: helpers.withMessage("Pendapatan sebelum pandemi harus berupa angka", function (event) {
          return Number.isInteger(parseInt(this.unformatRupiah(event)));
        }),
      },
      incomeAfter: {
        required: helpers.withMessage("Pendpatan setelah pandemi tidak boleh kosong!", required),
        numeric: helpers.withMessage("Pendapatan setelah pandemi harus berupa angka", function (event) {
          return Number.isInteger(parseInt(this.unformatRupiah(event)));
        }),
      },
      reason: { required: helpers.withMessage("Alasan tidak boleh kosong!", required) },
      other_reason: {
        required: helpers.withMessage("Alasan tidak boleh kosong!", function (event) {
          if (this.reason == "others") {
            if (event && event != "") {
              return true;
            }
            return false;
          }
          return true;
        }),
      },
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
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
        .then((response) => response.json())
        .then((provinces) => (this.provinces = provinces));
    },
    getRegencies: function (province) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province}.json`)
        .then((response) => response.json())
        .then((regencies) => (this.regencies = regencies));
    },
    getDistrics: function (regency) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regency}.json`)
        .then((response) => response.json())
        .then((districts) => (this.districts = districts));
    },
    getVillages: function (district) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${district}.json`)
        .then((response) => response.json())
        .then((villages) => (this.villages = villages));
    },
    formatRupiah(value) {
      if (!value) {
        return value;
      }
      value = Number(value.replace(",", "."));
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    unformatRupiah(value) {
      if (!value) {
        return value;
      }
      return value.replace(".", "").replace(",", ".").replace("Rp", "").replace(/\s/g, "");
    },
    savePicture(file, localName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem(localName, reader.result);
      };
      reader.readAsDataURL(file);
    },
    closeModal: function () {
      this.modal.show = false;
      this.load = false;
    },
    submit: function () {
      this.v$.$validate();

      let modal = this.modal;
      let router = this.$router;
      if (!this.v$.$error) {
        this.load = true;

        // save KTP File
        this.savePicture(this.ktp_picture[0], "ktp_picture_blob");
        this.ktp_picture_file.name = this.ktp_picture[0].name;
        this.ktp_picture_file.blob = localStorage.getItem("ktp_picture_blob");

        // save KK File
        this.savePicture(this.kk_picture[0], "kk_picture_blob");
        this.kk_picture_file.name = this.kk_picture[0].name;
        this.kk_picture_file.blob = localStorage.getItem("kk_picture_blob");

        let data = this.$data;

        setTimeout(function () {
          let randomInt = Math.floor(Math.random() * 10);
          if (randomInt > 5) {
            modal.show = true;
            modal.message = "Data telah dikirim!";
            modal.responseText = "Berhasil!";
            modal.statusCode = 200;

            let _data = [];
            let exists = localStorage.getItem("data");
            if (exists) {
              _data = JSON.parse(localStorage.getItem("data"));
              _data.push(data);
              localStorage.setItem("data", JSON.stringify(_data));
            } else {
              _data = JSON.stringify([data]);
              localStorage.setItem("data", _data);
            }

            setTimeout(function () {
              router.push({ name: "Data Penerima Bansos" });
            }, 1500);
          } else {
            modal.show = true;
            modal.message = "Terjadi kesalahan! \n Silahkan coba beberapa saat lagi!";
            modal.responseText = "Internal Server Error 500";
            modal.statusCode = 404;
          }
        }, 1500);
      } else {
        modal.show = true;
        modal.message = "Periksa kembali data yang anda kirim!";
        modal.responseText = "Gagal!";
        modal.statusCode = 403;
      }
    },
  },
};
</script>
