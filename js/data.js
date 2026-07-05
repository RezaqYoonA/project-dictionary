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
Pehiuk|Periuk

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



AWAK KECIK DUDUK DILUAN NYELINAP KEMENYAN BAPANG ADE|Masih kecil duduk di tempat orang tua, membakar menyan ayahnya hadir. Maknanya: orang yang ingin menonjol, tidak melalui aturan sehingga mengambil hak orang lain, orang yang tidak mengerti adat.
AYIK DEK KEGHUH, IKAN DAPAT|Air tidak keruh ikan didapat. Maknanya: situasi tetap tenang, tujuan yang di maksud dapat tercapai. Biasanya orang yang penuh kebijaksanaan.
ANGAT - ANGAT TAI AYAM|Angat - angat seperti tai ayam. Maknanya: orang yang bersemangat hanya sebentar, biasanya perkumpulan organisasi.
AWAK GALAK MARE DIAJAK|Orang yang mau, di ajak lagi. Sudah kepengen di tawari lagi. Maknanya: Seseorang yang sudah merindukan sesuatu atau seseorang pemidi yang sudah cinta, atau seorang pemuda yang memanah hati tau- tau ada tawaran dari yang bersangkutan. Indonesianya pucuk dicinta ulam pun tiba.
ANJING BUAS, BABI MELAWAN, BETEMU DI TANAH MUNGGU|Anjing yang bertemu babi yang garang. bertemu di atas tanah yang meninggi ( gunung kecil ). Maknanya: Pertarungan yang sama - sama bernafsu dan sama - sama berkeinginan menundukkan lawan.
AUS UMBAN DI JAMBAT|Haus jatuh di jambatan. Maknanya: orang yang sudah menginginkan sesuatu, tiba- tiba bertemu dengan yang di inginkan itu.
AWAK PANDAK NAK NGENTAM PAGU, PERCUN NDAK NIMBAK BULAN|Tubuh( fisik ) yang pendek mau menerjang loteng. Petasan hendak menembak bulan. Maknanya: orang yang bercita - cita yang tidak seimbang dengan modal ( kekuatan ).
BIAWAK DIGIRING KEAYIK|Biawak digiring ke kali. GAJAH DI GIRING KE BE GHEMBAN: Gajah di giring ke kubangannya. Maknanya: orang yang sudah mau disuruh pula.
BETUAH NJADI BUAH|Betuah menjadi buah. DIDE BETUAH BUNGE NDIE: Tidak betuah memang buah. Maknanya: bila rencana atau cita - cita tercapai, memang itu yang di inginkan, tidak tercapai apa boleh buat.
BELUM MASUK LA NGELUAGH|Belum dimasuki sudah mau keluar. Maknanya: selalu takut atau ragu - ragu dengan bayangan, belum menyerang sudah menyerah.
BELUM BEPALU GEMELUDAK|Belum berunding sudah ruwet. SATE BEPALU GEMELINTE: setelah berunding lebih ruwet. Maknanya: belum di mulai sudah ramai, setelah di mulai lebih rame lagi ( menjadi berita aktual ).
BESISIK LAJU BEGHIUH|Bersisik - sisik lalu di canangkan. Maknanya: mau diam - diam karena masih perlu di rahasiakan atau karena sebab lain belum perlu dibicarakan. Akan tetapi, permasalahnya lalu terpaksa di canangkan atau di sebar luaskan.
CALAK IKUK KERBAU|Cerdik, seperti ekor kerbau. Maknanya: orang yang suka berbuat atau berbicara, yang menurut dia pandai, cerdik, lihai, dsb. namun pada hakekatnya perbuatan atau perkataannya itu adalah merugikan dirinya sendiri.
DULUAN PACAK TIGHA TAU|Lebih dulu merasa pandai dari pada kenyataannya. Maknanya: seseorang yang apriori atau orang yang mencanangkan informasi mentah.
DIBUNUH KAH MATI, DI GANTUNG KAH TINGGI|Di bunuh akan mati di gantung akan tinggi. Maknanya: penyerahan seseorang yang hutang dan belum ada jalan untuk membayarnya, terserah kepada yang menagih.
DULULAH BEKETIK TIGHAH BETELUGH|Lebih dulu suaranya dari pada bertelur ( ayam ). Maknanya: seseorang atau sesuatu golongan yang gambar gembor terhadap sesuatu yang masih perlu di rahasiakan.
DEGE DUGE KATOU|Coba- coba seperti burung takou membikin sarang. Maknanya: seseorang yang meraba - raba kekuatan lawan, kalu lembut di makannya dan kalau keras dia mundur.
DIDE DI MAKAN SIKU|Tidak memakai ukuran. Maknanya: pembicaraan atau tindakan seseorang atau sesuatu golongan yang tidak pada tempatnya ( dalam asal bunyi ).
DIMANE PEGHIUK PECAH|Dimana pehiuk pecah. DISITU TEMBIKAE TINGGAL: di situ tembikarnya tinggal. Maknanya: dimana cita - cita atau perjuangan yang tidak dapat lagi di teruskan, waktu itulah baru berhenti.
DUE KERME BINTI MANDI|Dua hasil burung binti mandi. Maknanya: sama dengan pribahasa Indonesia, sambil berenang minum air.
DUDUK BATU BEDIGHI|Duduk seperti batu. kayu: berdiri seperti kayu. Maknanya: seseorang yang harus tetap sebagi penanggung jawab dalam suatu keluarga ( adat ).
DULU GALAK NGAPAH NYAMOU|Apa bila berjalan duluan siap basah. KEDIAN GALAK BEBENTALAN: apa bila berjalan dibelakang siap memikul beban.

`;
