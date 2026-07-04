// =======================================================
// DATA KAMUS BAHASA LAHAT
// Format satu baris per kata: kata_lahat|arti_indonesia
// Tinggal tambah baris baru di bawah, tanpa tanda kutip/kurung.
// =======================================================
const kamusMentah = `
Alap|Bagus
Bagai aur dengan tebing|Hubungan yang saling membantu dan menguntungkan
Air tenang menghanyutkan|Orang pendiam belum tentu tidak berbahaya/berilmu
Gancang|Cepat
Nian|Sangat
Ilok|Baik
Karut|Buruk
Tahok|Sayur
Belagak|Rupawan
Humah|Rumah
Mutor|Sepeda motor
Mobil|Mobil
Majoh (Kasar), Makan (Sopan)|Makan
Gile|Gila
Seleme|Pilek
Iyak|Batuk
Tidok|Tidur
Memulek|Berbaring
Rande|Janda
Dude|Duda
Ngudut|Merokok
Kanji|Sange
Bange|Bodoh|Jangan bange nian kau ni!|Jangan bodoh sekali kau ini!

Kemane|Kemana
Dimane|Dimana
Tuape|Apa
Tape|Apa
Ape|Apa
Lok mane|Bagaimana
Kebile|Kapan
Ngape|Kenapa
Sape|Siapa
Berape|Berapa

Sedut|Malas
Penyedut|Pemalas
Buhuk|Jelek
Karok|Jelek
Laju|Jadi
Urung|Tidak jadi
Dindak|Tidak mau
Dide bedie|Tidak ada
Dide keruan|Tidak tahu
Nghindu|Rindu
Nian|Beneran
Galak|Mau
Dimak|Tidak enak
Lemak|Enak
Kudai|Sebentar
Pacak|Bisa

Cia|Ayo
Pala|Ayo
Begawe|Bekerja
Balek|Pulang
Kah balek|Akan pulang
Lah balek|Telah pulang
Pegi|Pergi
Kah pegi|Akan pergi
Lah pegi|Telah pergi
Batak|Bawa
Mbatak|Membawa
Dibatak|Dibawa
Ambek|Ambil
Diambek|Diambil
Ngambek|Mengambil
Betanye|Bertanya

Kaba *Panggilan untuk sebaya*|Kamu
Die|Dia
Bapang|Bapak
Umak|Ibu
Nining lanang|Kakek
Nining betine|Nenek
Bini|Istri
Laki|Suami
Kance|Teman


Cangkir|Gelas untuk minum
Mate|Mata
Daii|Muka
Gumbak|Rambut
Palak|Kepala
Keting|Kaki
Cendila|Sandal
Gulai|Sayur
Selop|Sandal Jepit


Harge|Harga
Badah|Tempat, rumah
Ame|Kalau
Titu|Itu
Embauw|Bau
Luse|Lusa
Seadenye|Apa adanya


Beganti|Setia kawan
Bebanci|Bersih-bersih
Bejighat|Kusut
Besiang|Membersihkan rumput
Beragam suduk|Bercanda kelewatan
Berupok|Berpikir
Berende|Teras
Bajekka|Disimpan
Bekatew|Ngences, ngiler
Bekayu|Singkong
Besile|Ubi jalar, ketela
Besenai|Pelan
Belage|Berkelahi
Beligat|Berputar
Berasan|Kompromi, diskusi
Beragam|Bercanda
Belange|Wajan
Balau|Pedang
Berteh|Maling
Bebunting|Menikah
Betunakan|Menikah
Belaki|Menikah (perempuan)
Bebini|Menikah (laki-laki)
Basoh|Cuci
Buluh|Bambu
Bangai|Basi
Benyai|Tak berasa
Berugsik|Main
Beliau banyak|Panggilan mantu kepada mertua
Baktue|Kakak laki-laki dari bapak
Becelane|Memakai celana
Bebaju|Memakai baju
Bekagokan|Hajatan
Begarehan|Ngobrol antara cewek dan cowok
Belindap|Berteduh
Batas|Sudut
Ba|Bapak
Babet|Lempar, tarik
Balur|Ikan asin
Bantut|Habis
Baseng|Terserah
Baseng-baseng|Sembarangan
Beghas|Beras
Badouki|Pukuli
Penataran|Pelataran 


Celudu|Kelewat, keterlaluan
Cancungi|Memarahi
Cakgum|Melompat dari atas ke bawah
Cung kedire|Tomat
Cecangka|Mengada-ada saja
Memelakah|Mengada-ada saja
Cakgoum|Loncat ke air
Cenila|Sandal
Cecingal|Melirik kiri kanan
Calak|Pintar, cerdik
Cacak pacak|Sok pintar
Cengkerang|Alat sabit, potong rumput
Cecengeh|Senyum tanpa sebab jelas
Cubuk|Canting, alat ukur berat beras
Culuk|Obor
Kemuhu|Galah
Tengkiang|Tempat menyimpan padi
Kasam|Permentasi ikan 
Bufet, Gerubuk|Lemari
Tikae|Tikar
Sidu|Sendok
Pinggan|Piring
Cung kedire|Tomat
Cabi|Cabai
Sepan|Celana jeans
Hebong|Rebung bambu
Niow|Buah kelapa
Calok|Terasi
Semelile|Buah sawo
Cekow|Kencur
Burung cekok|Pungguk
Buah nangkebelande|Sirsak
Pancow|Air pancur
Atae'an|Wilayah
Hibot|Angin 
Bungin|Pasir
Kiling|Batu bara
Nedak|Melihat pemandangan
Senai|Santai
Dugan|Kelapa muda
Ngetam|Panen padi darat
Mehabas|Panen padi sawah
Nerak|Membajak sawah
Kerite|Sepeda



Diket|Sedikit
Dikinak|Dilihat
Dek ngajong|Tidak disuruh
Dedilat|Mengejek
Dangau|Rumah kecil di sawah atau kebun
Punduk|Rumah kecil di sawah atau kebun
Duaghe|Pintu
Denie|Dunia
Dengah|Dia (perempuan)


Emben|Tempat tidur nenek
Enjagal|Mengejar
Entue|Mertua
Eghap|Iris tipis


Guringangaʼ|Berguling-guling
Gegauk|Menjerit
Gelmat|Pelapon
Gereng|Sakit
Ghenyai|Gerimis
Gancang|Cepat
Gudu|Botol
Ghangke|Ramah
Ghelok|Toples
Ghungaw|Mengantuk karena kurang tidur
Gale|Semua


Ibatan|Nasi bungkus, bungkusan makanan
Ingunan|Peliharaan
Ipagh|Ipar perempuan
Ibung|Bibi
Injik|Suka
Isandi|Dari


Judoh|Jodoh
Jegelkah mate|Membuka mata
Jabalan|Maling
Jerang|Sebentar sekali
Jejelenge|Bodoh
Buyan|Bodoh
Jejelenge tapai|Kolokan, kekanak-kanakan
Jerambah|Jembatan
Jegheng|Jengkol


Keruan|Tahu
Kandek|Untuk
Kecek|Kecil
Kelawai|Saudara perempuan
Kedengkik|Babi hutan
Kaput|Babi
Keduro|Babi
Keduk|Babi
Kancut|Pakaian bekas, CD
Kekibang|Orang-orangan sawah
Karuk/Karut|Jelek
Kebat|Ikat
Kawe|Buah kopi
Kulat|Kotor
Kulot|Kuno
Kunam|Kencang
Kelam|Hilang
Kunap|Sangat jauh


Linjang|Suka pada perempuan/Laki-laki
Liwat|Lewat
Lenget|Hilang
Luyak|Lembut
Lautan|Ipar laki-laki
Likus|Ikat
Kebual|Pipi
Lambing|Tembem
Lelenyes|Cengengesan
Lunde|Lebai
Lentadak|Sejenis belalang
Langguk|Sombong
Libagh|Luas
Lebuska|Ungkapkah


Mato|Boro-boro
Memanyok|Setengah matang
Mikat|Menangkap
Mutigh|Memetik, panen
Mutigh kawe|Panen kopi
Meriwil|Membersihkan tunas
Mulik|Tiduran
Mbabas|Membersihkan rumput yang sudah besar
Mantau|Memanggil
Mbue|Abu sisa pembakaran
Makan liot|Makan di rumah orang yang punya hajatan
Mamak|Paman
Matah|Mentah


Njale|Menangkap ikan dengan jaring
Nuleh|Melihat kiri kanan
Ncakagh|Mencari
Nanak|Masak
Ndangok|Melamun
Ndong|Ibu
Ndung bisan|Ibu mertua dari kakak atau adik
Nyurum|Pakai
Nyurumka|Memakaikan
Nyegut|Mengambek
Ngarit|Memotong padi
Ngeda|Makan gulai tanpa nasi
Ngerimot|Mengkerut
Nutus|Memukul
Ngamben|Menggendong dari belakang
Ncelingkek|Mencolok, nangkring di tempat tinggi
Nceroʼol|Tiba-tiba muncul
Umak|Ibu


Ading|Adik
Agas|Nyamuk
Ajong|Suruh
Anak dahe|Adik ipar perempuan
Angat|Panas
Au|Ya
Ayek|Air
Ayek angat|Air panas
Ayek dingin|Air dingin
Ayuk|Mbak, Kakak perempuan
Angget|Sisa
Angket|Angkat
Akap|Pagi, gelap
Aghi|Hari
Anjam|Senang, suka
Anyut|Hanyut
Awangan|Jendela
Jendele|Jendela
Anti-antik|Tempat nyantai
Agang|Berkendaraan sangat cepat, ngebut
`;
