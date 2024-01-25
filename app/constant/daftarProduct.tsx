import { tProduct } from "@/type/tproduct"

export const Products: tProduct[] = [
    {
        id: 0,
        name: 'Totok Punggung',
        href: '/terapi/detail',
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/topung/topung.png',
        imageGallery: [
            "/teraphy/topung/topung.png",
            "/teraphy/topung/topung1.jpg",
            "/teraphy/topung/topung2.jpg",
            "/teraphy/topung/topung3.jpg"
        ],
        imageAlt: "Totok punggung.",
        price: 'Rp. 120.000,-',
        description: "Totok Punggung (TOPUNG) adalah suatu metode terapi dedngan menggunakan jari-jari tangan, dengan cara menekan, menggoyangkan dan menggetarkan untuk memberikan stimulan (penotokan) diarea punggung.",
        judulHightLight: "Kenapa Harus di Punggung ?",
        highLights: "Karena punggung merupakan pusatnya syaraf serta banyak dialiri pembuluh darah, oleh sebab itu punggung disebut sebagai pusat penyumbatan. Punggung juga merupakan bagian dari tubuh kita yang paling dekat dengan organ tubuh, seperti paru-paru, jantung, lambung,ginjal dan lainnya.",
        details: "Maag / Asam Lambung, Vertigo, Migrain, Syaraft terjepit, Stroke, Jantung, Diabetes, Asma, Paru-paru, Hipertensi, Ginjal."
    },
    {
        id: 1,
        name: 'Bekam (11 Titik)',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/bekam/bekam3.jpg',
        imageGallery: [
            '/teraphy/bekam/bekam.jpg',
            '/teraphy/bekam/bekam1.jpg',
            '/teraphy/bekam/bekam2.jpg',
            '/teraphy/bekam/bekam3.jpg',
        ],
        imageAlt: "Bekam",
        price: 'Rp. 90.000,-',
        description: "Bekam adalah terapi tradisional yang dilakukan dengan menggunakan cangkir khusus. Cangkir tersebut dapat menghasilkan tekanan, sehingga bisa menarik kulit dan mengeluarkan darah kotor atau racun dari dalam tubuh. Cangkir tersebut akan diletakkan pada bagian- bagian tubuh tertentu, biasanya pada bagian tubuh yang sering merasakan keluhan, misalnya lengan, bokong, punggung, perut, atau kaki.Meski sudah dipraktikkan sejak ribuan tahun silam dan dapat mengatasi banyak gangguan kesehatan, bekam masih menjadi pilihan terapi alternatif hingga sekarang.",
        judulHightLight: "kenapa harus dibekam ?",
        highLights: "bekam bermanfaat untuk Meneingkatkan tolerasni nyeri, Menjaga sifat biomekanik pada kulit, Mengobati peradangan, Menurunkan resiko penyakit asam urat.",
        details: "Kelainan darah seperti anemia dan hemofilia, Hipertensi, Migrain, Nyeri di kaki, panggul dan leher, Varises, Rematik, Kesuburan, Penyumbatan bronkus akibat asma atau alergi, Carpal tunnel syndrome, Gangguan system pencernaan"
    },
    {
        id: 2,
        name: 'Pijat Refleksi',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/pijat_refleksi/refleksi.jpg',
        imageGallery: [
            '/teraphy/pijat_refleksi/refleksi.jpg',
            '/teraphy/pijat_refleksi/refleksi1.jpg',
            '/teraphy/pijat_refleksi/refleksi2.jpg',
            '/teraphy/pijat_refleksi/refleksi3.jpg',
        ],
        imageAlt: "Pijat Refleksi",
        price: 'Rp. 75.000,-',
        description: "Pijat refleksi bisa dijadikan pilihan untuk memanjakan diri di sela-sela kesibukan Anda. Berbeda dengan jenis pijat lain atau pijat urut biasa, pijat refleksi lebih fokus pada titik saraf tertentu pada tubuh, terutama pada kaki dan tangan.",
        judulHightLight: "kenapa letaknya dikaki dan tangan ?",
        highLights: "Menurut situs Mayo Clinic, titik-titik saraf di tangan dan kaki terhubung langsung dengan saraf-saraf organ dalam tubuh.Pijatan di suatu titik saraf akan memengaruhi fungsi organ dalam yang terhubung dengan titik saraf tersebut. Maka dari itu, teknik pijat ini disebut juga dengan pijat titik saraf.",
        details: "Mengurangi cemas dan stres, Membantu pengobatan kanker, Melancarkan peredaran darah, Mengurangi nyeri haid, Meredakan sakit kepala"
    },
    {
        id: 3,
        name: 'Bekam Anak (usia mulai 8th -15th)',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/bekam_anak/banak3.jpg',
        imageGallery: [
            '/teraphy/bekam_anak/banak.jpg',
            '/teraphy/bekam_anak/banak1.jpg',
            '/teraphy/bekam_anak/banak2.jpg',
            '/teraphy/bekam_anak/banak3.jpg',
        ],
        imageAlt: "Bekam Anak",
        price: 'Rp 70.000,-',
        description: "Bekam adalah terapi tradisional yang dilakukan dengan menggunakan cangkir khusus. Cangkir tersebut dapat menghasilkan tekanan, sehingga bisa menarik kulit dan mengeluarkan darah kotor atau racun dari dalam tubuh. Cangkir tersebut akan diletakkan pada bagian- bagian tubuh tertentu, biasanya pada bagian tubuh yang sering merasakan keluhan, misalnya lengan, bokong, punggung, perut, atau kaki.Meski sudah dipraktikkan sejak ribuan tahun silam dan dapat mengatasi banyak gangguan kesehatan, bekam masih menjadi pilihan terapi alternatif hingga sekarang.",
        judulHightLight: "kenapa anak harus dibekam ?",
        highLights: "bekam bermanfaat untuk Meneingkatkan tolerasni nyeri, Menjaga sifat biomekanik pada kulit, Mengobati peradangan, Menurunkan resiko penyakit asam urat.",
        details: "Kelainan darah seperti anemia dan hemofilia, Hipertensi, Migrain, Nyeri di kaki, panggul dan leher, Varises, Rematik, Kesuburan, Penyumbatan bronkus akibat asma atau alergi, Carpal tunnel syndrome, Gangguan system pencernaan"
    },
    {
        id: 4,
        name: 'Gurah Mata',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/gurah/gurah.jpg',
        imageGallery: [
            '/teraphy/gurah/gurah.jpg',
            '/teraphy/gurah/gurah1.jpg',
            '/teraphy/gurah/gurah2.jpg',
            '/teraphy/gurah/gurah3.jpg',
        ],
        imageAlt: "Gurah Mata",
        price: 'Rp. 30.000,-',
        description: "deskripsi Gurah Mata.",
        judulHightLight: "kenapa harus diGurah Mata ?",
        highLights: "alasan diGurah Mata.",
        details: "diGurah Mata mengatasi malasah apa"
    },
    {
        id: 5,
        name: 'Bekam Estetika',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/bekam_estetika/bestetika2.jpg',
        imageGallery: [
            '/teraphy/bekam_estetika/bestetika.jpg',
            '/teraphy/bekam_estetika/bestetika1.jpg',
            '/teraphy/bekam_estetika/bestetika2.jpg',
            '/teraphy/bekam_estetika/bestetika3.jpg',
        ],
        imageAlt: "Bekam Estetika",
        price: 'Rp. 80.000,-',
        description: "deskripsi Bekam Estetika.",
        judulHightLight: "kenapa harus diBekam Estetika ?",
        highLights: "alasan diBekam Estetika.",
        details: "diBekam Estetika mengatasi malasah apa"
    },
    {
        id: 6,
        name: 'Bekam Kepala',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/bekam_kepala/bkepala.jpg',
        imageGallery: [
            '/teraphy/bekam_kepala/bkepala.jpg',
            '/teraphy/bekam_kepala/bkepala1.jpg',
            '/teraphy/bekam_kepala/bkepala2.jpg',
            '/teraphy/bekam_kepala/bkepala3.jpg',
        ],
        imageAlt: "Bekam Estetika",
        price: 'Rp. 50.000,-',
        description: "deskripsi Bekam Kepala.",
        judulHightLight: "kenapa harus diBekam Kepala ?",
        highLights: "alasan diBekam Kepala.",
        details: "diBekam Kepala mengatasi malasah apa"
    },
    {
        id: 7,
        name: 'Terapi Lintah',
        href: "/terapi/detail",
        breadcrumbs: [
            { id: 1, name: 'Terapi', href: '/terapi' },
            // { id: 2, name: 'Clothing', href: '#' },
        ],
        imageSrc: '/teraphy/theraphy_lintah/tlintah2.jpg',
        imageGallery: [
            '/teraphy/theraphy_lintah/tlintah.jpg',
            '/teraphy/theraphy_lintah/tlintah1.jpg',
            '/teraphy/theraphy_lintah/tlintah2.jpg',
            '/teraphy/theraphy_lintah/tlintah3.jpg',
        ],
        imageAlt: "Terapi Lintah",
        price: 'Rp. 30.000,- / Ekor',
        description: "deskripsi Terapi Lintah.",
        judulHightLight: "kenapa harus diTerapi Lintah ?",
        highLights: "alasan diTerapi Lintah.",
        details: "diTerapi Lintah mengatasi malasah apa"
    },
    // More products...
]

// export default Products;