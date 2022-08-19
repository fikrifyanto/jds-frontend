<template>
  <form class="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-[35vw]">
    <div class="flex flex-col gap-2">
      <label for="name">Nama</label>
      <input name="name" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="nik">NIK</label>
      <input name="nik" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="age">Umur</label>
      <input name="age" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="gender">Jenis Kelamin</label>
      <input name="gender" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="province">Provinsi</label>
      <input name="province" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="city">Kab/Kota</label>
      <input name="city" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="district">Kecamatan</label>
      <input name="district" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="village">Kelurahan/Desa</label>
      <input name="village" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="address">Alamat</label>
      <input name="address" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="rt">RT</label>
      <input name="rt" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="rw">RW</label>
      <input name="rw" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="incomeBefore">Penghasilan sebelum pandemi</label>
      <input name="incomeBefore" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="incomeAfter">Penghasilan setelah pandemi</label>
      <input name="incomeAfter" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="reason">Alasan membutuhkan bantuan</label>
      <input name="reason" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" placeholder="" />
    </div>
    <button class="bg-green-500 hover:bg-green-600 px-5 py-3 leading-5 rounded-full font-semibold text-white">Simpan</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style></style>
