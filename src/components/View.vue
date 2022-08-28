<template>
  <router-link v-if="$route.path == '/'" class="bg-green-500 hover:bg-green-600 px-5 py-3 leading-5 rounded-full font-semibold text-white mt-24 mb-2" to="/form">Tambah Data</router-link>
  <div class="w-[95vw] sm:w-[80vw] overflow-x-scroll border shadow-sm mt-4">
    <table class="min-w-full">
      <thead class="bg-white border-b">
        <tr>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">#</th>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nama</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">NIK</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nomor Kartu Keluarga</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Foto KTP</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Foto Kartu Keluarga</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Umur</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Jenis Kelamin</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Provinsi</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Kab/Kota</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Kecamatan</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Kelurahan/Desa</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Alamat</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">RT</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">RW</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Penghasilan sebelum pandemi</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Penghasilan setelah pandemi</td>
          <td scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">Alasan membutuhkan bantuan</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" v-bind:key="index" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ index + 1 }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.nik }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.kk }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <a class="text-green-500 hover:text-green-400" :download="item.ktp_picture_file.name" :href="item.ktp_picture_file.blob">{{ item.ktp_picture_file.name }}</a>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <a class="text-green-500 hover:text-green-400" :download="item.ktp_picture_file.name" :href="item.kk_picture_file.blob">{{ item.kk_picture_file.name }}</a>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.age }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.gender }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.province }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.regency }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.district }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.village }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.address }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.rt }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.rw }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.incomeBefore }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.incomeAfter }}</td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ item.reason == "others" ? item.other_reason : item.reason }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem("data")),
    };
  },
};
</script>

<style></style>
