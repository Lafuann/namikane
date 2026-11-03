# AGENTS.md

File ini berisi panduan dan aturan yang wajib diikuti oleh coding agent selama proses pengembangan di repository ini.

## Struktur dan Arsitektur

1. **Penempatan Halaman Utama**
   - Setiap file halaman yang terhubung langsung dengan route harus didefinisikan di dalam direktori `/app/(shell)/**`.
   - Seluruh implementasi halaman harus ditulis langsung pada file route terkait. Jangan membuat file halaman di direktori lain, kemudian mengimpor atau memanggilnya dari file `page`.

2. **Penempatan Komponen Utama**
   - Direktori `/features/**` hanya boleh digunakan untuk mendefinisikan subkomponen yang mendukung komponen utama pada halaman.
   - Komponen utama yang merepresentasikan sebuah halaman harus didefinisikan langsung di dalam direktori `/app/**`, bukan di luar direktori tersebut.

3. **Layout Utama**
   - Layout utama aplikasi wajib didefinisikan pada level direktori `/app/(shell)`.
   - Seluruh halaman yang berada di bawah direktori tersebut harus menggunakan layout yang sama agar konsistensi struktur dan tampilan tetap terjaga.
   - Hindari menduplikasi implementasi layout pada masing-masing halaman.

## Reusability dan Konsistensi Kode

4. **Hindari Duplikasi Kode**
   - Jangan menulis ulang implementasi atau logika yang sama di beberapa tempat.
   - Jika terdapat kode, logika, atau komponen yang berpotensi digunakan kembali, definisikan sebagai implementasi reusable pada direktori yang sesuai:
     - `/lib/**` untuk utility dan fungsi bantuan.
     - `/hooks/**` untuk custom React hooks.
     - `/components/**` untuk komponen UI yang reusable.
   - Gunakan kembali implementasi tersebut pada setiap bagian yang membutuhkannya.

## Formatting dan Code Style

5. **Konsistensi Formatting**
   - Setiap file yang dibuat atau diubah wajib diformat menggunakan Prettier dengan plugin `prettier-plugin-tailwindcss`.
   - Pastikan proses formatting mengikuti konfigurasi yang telah ditetapkan dalam file `.prettierrc.cjs`.
   - Jangan mengubah konfigurasi formatting hanya untuk mengakomodasi preferensi formatting pribadi.