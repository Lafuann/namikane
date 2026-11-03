# Struktur project

Struktur ini memakai pendekatan **feature-based** untuk skala low–medium: route Next.js tetap di `app/`, sedangkan kode domain dikelompokkan di `features/`.

```text
app/                         # Routing, layout, dan metadata Next.js
components/
  layout/                    # Shell aplikasi: navbar, sidebar, page header
  ui/                        # Komponen generik lintas fitur: button, dialog, input
features/
  categories/                # Kategori pemasukan/pengeluaran
    components/
    services/
  dashboard/                 # Ringkasan saldo dan aktivitas
    components/
  reports/                   # Rekap dan laporan keuangan
    components/
    services/
  transactions/              # Pencatatan pemasukan/pengeluaran
    components/
    hooks/
    services/
hooks/                       # Hook yang dipakai lintas fitur
lib/
  formatters/                # Format rupiah, tanggal, angka
  utils/                     # Fungsi murni reusable lintas fitur
  validators/                # Validasi input reusable
types/                       # Tipe yang benar-benar dipakai lintas fitur
```

## Batas penempatan kode

- `app/` berisi file konvensi Next.js dan komposisi halaman; UI atau logika domain yang besar dipindahkan ke `features/`.
- Komponen khusus satu domain tetap di `features/<nama>/components`. Pindahkan ke `components/ui` hanya setelah benar-benar dipakai lintas fitur.
- Hook khusus domain tinggal di fitur terkait; `hooks/` root hanya untuk hook lintas fitur.
- `services/` menampung operasi data dan aturan domain. Taruh implementasi server/database di sana bila backend tersebut ditambahkan.
- Tipe domain sebaiknya dekat dengan fiturnya (misalnya `features/transactions/types.ts`); `types/` root hanya untuk tipe bersama.
- Tidak ada folder `helpers/` terpisah: fungsi murni masuk `lib/utils`, format angka/tanggal ke `lib/formatters`, validasi ke `lib/validators`, dan aturan domain ke `services/`.
- Tambahkan `app/api/`, state manager, atau lapisan repository hanya saat kebutuhan nyata muncul.