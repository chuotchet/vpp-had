var models = require("./models");
var Sequelize = require("./models").sequelize;
const Op = Sequelize.Op;

models.sequelize.sync();

var itemData = [
  { img: 'vpp/giay/doublea.jpg',
    name: 'Giấy Double A 80 A4',
    subCatId: 1
  },
  { img: 'vpp/giay/doublea3.jpg',
    name: 'Giấy Double A 80 A3',
    subCatId: 1
  },
  { img: 'vpp/giay/doublea.jpg',
    name: 'Giấy Double A 70 A4',
    subCatId: 1
  },
  { img: 'vpp/giay/ikplus.jpg',
    name: 'Giấy IK Plus 80 A4',
    subCatId: 1
  },
  { img: 'vpp/giay/ikplus803.jpg',
    name: 'Giấy IK Plus 80 A3',
    subCatId: 1
  },
  { img: 'vpp/giay/ikplus.jpg',
    name: 'Giấy IK Plus 70 A4',
    subCatId: 1
  },
  { img: 'vpp/giay/giaya1.jpg',
    name: 'Giấy A1',
    subCatId: 1
  },
  { img: 'vpp/giay/giaya0.jpg',
    name: 'Giấy A0',
    subCatId: 1
  },
  { img: 'vpp/giay/excel.jpg',
    name: 'Giấy Excel A4',
    subCatId: 1
  },
  { img: 'vpp/giay/paper1.jpg',
    name: 'Giấy Paper One 80 A4',
    subCatId: 1
  },
  { img: 'vpp/giay/ford.jpg',
    name: 'Giấy Ford A3 - A4',
    subCatId: 1
  },
  { img: 'vpp/giay/giaylientuc.jpg',
    name: 'Giấy in liên tục 2-3-4',
    subCatId: 1
  },

  { img: 'vpp/keo/KEONAU01.jpg',
    name: 'Kéo nâu',
    subCatId: 2
  },
  { img: 'vpp/keo/KEONAU.jpg',
    name: 'Kéo đồi mồi lớn',
    subCatId: 2
  },
  { img: 'vpp/keo/Delitrung.jpg',
    name: 'Kéo deli trung',
    subCatId: 2
  },
  { img: 'vpp/keo/kepplusnho.jpg',
    name: 'Kéo Plus nhỏ',
    subCatId: 2
  },
  { img: 'vpp/keo/bNCtgiay.jpg',
    name: 'Bàn cắt giấy A3',
    subCatId: 2
  },
  { img: 'vpp/keo/bancatgiaya4.jpg',
    name: 'Bàn cắt giấy A4',
    subCatId: 2
  },
  { img: 'vpp/keo/LUOINHODELI.jpg',
    name: 'Dao rọc giấy nhỏ Deli/SDI',
    subCatId: 2
  },
  { img: 'vpp/keo/daolon.jpg',
    name: 'Dao rọc giấy lớn Deli/SDI',
    subCatId: 2
  },
  { img: 'vpp/keo/luoidaosdi.jpg',
    name: 'Lưỡi dao rọc giấy nhỏ',
    subCatId: 2
  },
  { img: 'vpp/keo/luoidaounicom.jpg',
    name: 'Lưỡi dao rọc giấy lớn',
    subCatId: 2
  },

  { img: 'vpp/so/NOTE.jpg',
    name: 'Sổ lò xo',
    subCatId: 3
  },
  { img: 'vpp/so/BAOTHUTRANG.jpg',
    name: 'Bao thư trắng',
    subCatId: 3
  },
  { img: 'vpp/so/BAOTHUSOC.jpg',
    name: 'Bao thư sọc',
    subCatId: 3
  },
  { img: 'vpp/so/SODAA4DACBIET.jpg',
    name: 'Sổ da A4',
    subCatId: 3
  },
  { img: 'vpp/so/sodack9.jpg',
    name: 'Sổ da',
    subCatId: 3
  },
  { img: 'vpp/so/socarro.jpg',
    name: 'Sổ caro 21x33 dày',
    subCatId: 3
  },
  { img: 'vpp/so/socarro02.jpg',
    name: 'Sổ caro 25x33 dày',
    subCatId: 3
  },
  { img: 'vpp/so/soloxoa4hh.jpg',
    name: 'Sổ lò xo A4 HH',
    subCatId: 3
  },
  { img: 'vpp/so/200trang.jpg',
    name: 'Tập 200 trang',
    subCatId: 3
  },
  { img: 'vpp/so/ebook.jpg',
    name: 'Tập 100 trang',
    subCatId: 3
  },

  { img: 'vpp/but/BUTDDAQUANG.jpg',
    name: 'Bút dạ quang',
    subCatId: 4
  },
  { img: 'vpp/but/butzebra.jpg',
    name: 'Bút zebra',
    subCatId: 4
  },
  { img: 'vpp/but/pilot.jpg',
    name: 'Bút pilot',
    subCatId: 4
  },
  { img: 'vpp/but/gel.jpg',
    name: 'Bút gel',
    subCatId: 4
  },
  { img: 'vpp/but/pentel.jpg',
    name: 'Bút pentel',
    subCatId: 4
  },
  { img: 'vpp/but/uni.jpg',
    name: 'Bút uni',
    subCatId: 4
  },
  { img: 'vpp/but/027.jpg',
    name: 'Bút Thiên Long TL-027',
    subCatId: 4
  },
  { img: 'vpp/but/08.jpg',
    name: 'Bút Thiên Long TL-08',
    subCatId: 4
  },
  { img: 'vpp/but/butchimaro.jpg',
    name: 'Bút chì',
    subCatId: 4
  },
  { img: 'vpp/but/butlong01.jpg',
    name: 'Bút lông dầu flexoffice',
    subCatId: 4
  },
  { img: 'vpp/but/butlong03.jpg',
    name: 'Bút lông dầu Thiên Long',
    subCatId: 4
  },
  { img: 'vpp/but/bangtrang.jpg',
    name: 'Bút bảng trắng Thiên Long',
    subCatId: 4
  },
  { img: 'vpp/but/chikim.jpg',
    name: 'Bút chì kim',
    subCatId: 4
  },
  { img: 'vpp/but/ruotchiyoto.jpg',
    name: 'Ruột chì kim',
    subCatId: 4
  },
  { img: 'vpp/but/CHUTCHI.jpg',
    name: 'Chuốt chì',
    subCatId: 4
  },

  { img: 'vpp/calc/CASIO20LA.jpg',
    name: 'Máy tính Casio 20LA',
    subCatId: 5
  },
  { img: 'vpp/calc/CASIOJS.jpg',
    name: 'Máy tính Casio JS 120',
    subCatId: 5
  },
  { img: 'vpp/calc/CASIOFX.jpg',
    name: 'Máy tính Casio FX 500MS',
    subCatId: 5
  },
  { img: 'vpp/calc/CASIOJFX.jpg',
    name: 'Máy tính Casio FX 570ES',
    subCatId: 5
  },
  { img: 'vpp/calc/fx570VNPLUS.jpg',
    name: 'Casio fx 570VN PLUS',
    subCatId: 5
  },
  { img: 'vpp/calc/991.jpg',
    name: 'Casio fx 991 ES PLUS',
    subCatId: 5
  },
  { img: 'vpp/calc/DX-120ST.jpg',
    name: 'Casio DX-120ST',
    subCatId: 5
  },
  { img: 'vpp/calc/CasioSX-300.jpg',
    name: 'Casio SX-320P',
    subCatId: 5
  },
  { img: 'vpp/calc/pinaaa.jpg',
    name: 'Pin AAA',
    subCatId: 5
  },
  { img: 'vpp/calc/pindaido05.jpg',
    name: 'Pin Energizer',
    subCatId: 5
  },
  { img: 'vpp/calc/pindaido01.jpg',
    name: 'Pin con ó',
    subCatId: 5
  },
  { img: 'vpp/calc/cucao.jpg',
    name: 'Pin cúc áo',
    subCatId: 5
  },

  { img: 'vpp/hs/100trangbiacung.jpg',
    name: 'Vở 96 trang',
    subCatId: 6
  },
  { img: 'vpp/hs/vibook.jpg',
    name: 'Vở 200 trang',
    subCatId: 6
  },
  { img: 'vpp/hs/butthienlong.jpg',
    name: 'Bút Thiên Long',
    subCatId: 6
  },
  { img: 'vpp/hs/tay.jpg',
    name: 'Gôm tẩy',
    subCatId: 6
  },

  { img: 'vpp/bang/BANGGHIMCOCHAN.jpg',
    name: 'Bảng ghim có chân di động',
    subCatId: 7
  },
  { img: 'vpp/bang/bangxoay.jpg',
    name: 'Bảng xoay',
    subCatId: 7
  },
  { img: 'vpp/bang/bangtrangvietlong.jpg',
    name: 'Bảng trắng viết lông',
    subCatId: 7
  },
  { img: 'vpp/bang/BANGGHIMCOCHAN04.jpg',
    name: 'Bảng từ trắng',
    subCatId: 7
  },
  { img: 'vpp/bang/BANGGHIMCOCHAN02.jpg',
    name: 'Bảng phấn',
    subCatId: 7
  },
  { img: 'vpp/bang/BANGGHIMCOCHAN08.jpg',
    name: 'Nam châm',
    subCatId: 7
  },
  { img: 'vpp/bang/BANGGHIMCOCHAN05.jpg',
    name: 'Đồ bôi bảng có nam châm',
    subCatId: 7
  },
  { img: 'vpp/bang/BANGGHIMCOCHAN06.jpg',
    name: 'Đồ bôi bảng không nam châm',
    subCatId: 7
  },

  { img: 'vpp/dau/DAUNGAYTHANG01.jpg',
    name: 'Dấu ngày tháng tự động',
    subCatId: 8
  },
  { img: 'vpp/dau/DAUNGAYTHANG02.jpg',
    name: 'Máy đóng 8 số Shiny N38 (5mm)',
    subCatId: 8
  },
  { img: 'vpp/dau/R532.jpg',
    name: 'Dấu tự động R 532',
    subCatId: 8
  },
  { img: 'vpp/dau/s842.jpg',
    name: 'Dấu tự động S842',
    subCatId: 8
  },
  { img: 'vpp/dau/s84201.jpg',
    name: 'Mực Lion Indelible Ink MC-55',
    subCatId: 8
  },
  { img: 'vpp/dau/s84202.jpg',
    name: 'Shiny Printer R-524D',
    subCatId: 8
  },
  { img: 'vpp/dau/s84203.jpg',
    name: 'Shiny S-1000 Die Plate Dater Stamp',
    subCatId: 8
  },
  { img: 'vpp/dau/s84204.jpg',
    name: 'Dấu 6 Số Siêu Bền Max N-607',
    subCatId: 8
  },
  { img: 'vpp/dau/s84207.jpg',
    name: 'Dấu Ngày Tháng 4mm',
    subCatId: 8
  },
  { img: 'vpp/dau/s84208.jpg',
    name: 'Dấu Mã Số Thuế 18mm',
    subCatId: 8
  },

  { img: 'vpp/bkeo/vpp/bkeo/',
    name: 'Băng keo màu',
    subCatId: 9
  },
  { img: 'vpp/bkeo/bangkeosilili.jpg',
    name: 'Băng keo Simili',
    subCatId: 9
  },
  { img: 'vpp/bkeo/bangkeonano.jpg',
    name: 'Băng keo điện nano',
    subCatId: 9
  },
  { img: 'vpp/bkeo/BANGKEOVAI.jpg',
    name: 'Băng keo vải',
    subCatId: 9
  },
  { img: 'vpp/bkeo/BANGKEOgiay.jpg',
    name: 'Băng keo giấy',
    subCatId: 9
  },
  { img: 'vpp/bkeo/BANGKEotrong.jpg',
    name: 'Băng keo trong',
    subCatId: 9
  },
  { img: 'vpp/bkeo/BANGKEODUC.jpg',
    name: 'Băng keo đục',
    subCatId: 9
  },

  { img: 'vpp/bamlo/BAMLO.jpg',
    name: 'Bấm lỗ',
    subCatId: 10
  },
  { img: 'vpp/bamlo/BAMLO03.jpg',
    name: 'Bấm kim số 10',
    subCatId: 10
  },
  { img: 'vpp/bamlo/BAMLO05.jpg',
    name: 'Bấm lỗ 20 tờ Deli',
    subCatId: 10
  },
  { img: 'vpp/bamlo/BAMLO04.jpg',
    name: 'Bấm kim cỡ đại',
    subCatId: 10
  },
  { img: 'vpp/bamlo/BAMLO06.jpg',
    name: 'Máy bấm 4 lỗ',
    subCatId: 10
  },
  { img: 'vpp/bamlo/BAMLO01.jpg',
    name: 'Bấm sô 3',
    subCatId: 10
  },

  { img: 'vpp/sosach/GIAYGIOITHIEU.jpg',
    name: 'Giấy giới thiệu',
    subCatId: 11
  },
  { img: 'vpp/sosach/HOADONBANLE.jpg',
    name: 'Hóa đơn bán lẻ 1 liên',
    subCatId: 11
  },
  { img: 'vpp/sosach/HOADONBANLE2LIEN.jpg',
    name: 'Hóa đơn bán lẻ 2 liên',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI.jpg',
    name: 'Sổ công văn',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI01.jpg',
    name: 'Biên Nhận 1 Liên Trắng',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI02.jpg',
    name: 'Giấy Tạm Ứng',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI04.jpg',
    name: 'Giấy Giới Thiệu 1 Liên Trắng Dày',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI05.jpg',
    name: 'Phiếu Nhập Kho 3 Liên',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI06.jpg',
    name: 'Phiếu Xuất Kho 3 Liên',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI07.jpg',
    name: 'Hóa Đơn 3 Liên',
    subCatId: 11
  },
  { img: 'vpp/sosach/SOCONGVANDI08.jpg',
    name: 'Phiếu Xuất Kho 2 Liên Khổ A5',
    subCatId: 11
  },

  { img: 'vpp/thuoc/thuoc01.jpg',
    name: 'Thước Kim Nguyên',
    subCatId: 12
  },
  { img: 'vpp/thuoc/thuoc02.jpg',
    name: 'Thước Parabol 1 Winq',
    subCatId: 12
  },
  { img: 'vpp/thuoc/thuoc05.jpg',
    name: 'Thước bộ WinQ T140',
    subCatId: 12
  },
  { img: 'vpp/thuoc/thuoc07.jpg',
    name: 'Thước Dẻo Winq 15 cm',
    subCatId: 12
  },
  { img: 'vpp/thuoc/thuoc08.jpg',
    name: 'Thước Dẻo Winq 20 cm',
    subCatId: 12
  },
  { img: 'vpp/thuoc/thuoc09.jpg',
    name: 'Bộ Thước Êke',
    subCatId: 12
  },

  { img: 'vpp/dai/DAYDAI01.jpg',
    name: 'Dây đai - 01',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI02.jpg',
    name: 'Dây đai - 02',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI03.jpg',
    name: 'Dây đai - 03',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI04.jpg',
    name: 'Dây đai - 04',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI05.jpg',
    name: 'Dây đai - 05',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI06.jpg',
    name: 'Dây đai - 06',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI07.jpg',
    name: 'Dây đai - 07',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI08.jpg',
    name: 'Dây đai - 08',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI09.jpg',
    name: 'Dây đai - 09',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI010.jpg',
    name: 'Dây đai - 10',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI011.jpg',
    name: 'Dây đai - 11',
    subCatId: 13
  },
  { img: 'vpp/dai/DAYDAI012.jpg',
    name: 'Dây đai - 12',
    subCatId: 13
  },

  { img: 'vpp/pe/CUONPE01.jpg',
    name: 'PE cuộn 20kg',
    subCatId: 14
  },
  { img: 'vpp/pe/CUONPE03.jpg',
    name: 'PE cuộn 50kg',
    subCatId: 14
  },
  { img: 'vpp/pe/CUONPE02.jpg',
    name: 'PE cuộn 10kg',
    subCatId: 14
  },

  { img: 'vpp/fim/FimFaxBrother202.jpg',
    name: 'Film Fax Brother',
    subCatId: 15
  },
  { img: 'vpp/fim/FIMFAXPANASONIC52.jpg',
    name: 'Film fax Panasonic',
    subCatId: 15
  },
  { img: 'vpp/fim/RUBANFULLMAK03.jpg',
    name: 'Film fax Sharp',
    subCatId: 15
  },

  { img: 'thietbi/mayin/MAYINCANON2900.jpg',
    name: 'Máy in Canon 2900',
    subCatId: 16
  },
  { img: 'thietbi/mayin/okiml.jpg',
    name: 'Máy in kim OKI ',
    subCatId: 16
  },
  { img: 'thietbi/mayin/EpsonPrinterLQ300.jpg',
    name: 'Máy in Epson Printer LQ 300+II (300 cps)',
    subCatId: 16
  },
  { img: 'thietbi/mayin/HL-1111LaserBrother.jpg',
    name: 'HL-1111 Máy in Laser Brother',
    subCatId: 16
  },
  { img: 'thietbi/mayin/LaserJetProP1102W.jpg',
    name: 'Máy in HP LaserJet Pro P1102W',
    subCatId: 16
  },
  { img: 'thietbi/mayin/HPLaserJetProP2035.jpg',
    name: 'Máy in HP LaserJet Pro P2035',
    subCatId: 16
  },

  { img: 'thietbi/fax/PANASONICKX-FP701.jpg',
    name: 'Máy Fax PANASONIC KX-FP 701',
    subCatId: 17
  },
  { img: 'thietbi/fax/SharpUX-7301.jpg',
    name: 'Máy Fax Panasonic KX-FT987CX',
    subCatId: 17
  },
  { img: 'thietbi/fax/CanonB-820.jpg',
    name: 'Máy Fax nhiệt Canon B-820',
    subCatId: 17
  },
  { img: 'thietbi/fax/SharpUX-7306.jpg',
    name: 'Máy Fax Panasonic KX-MB772',
    subCatId: 17
  },

  { img: 'thietbi/scan/MAYSCAN07.jpg',
    name: 'Canon Scanner 5600F',
    subCatId: 20
  },
  { img: 'thietbi/scan/MAYSCAN05.jpg',
    name: 'L2734A Máy quét HP Scanjet 200 Flatbed Photo Scanner',
    subCatId: 20
  },
  { img: 'thietbi/scan/MAYSCAN010.jpg',
    name: 'HP Scanner Scanjet 3000 S2',
    subCatId: 20
  },
  { img: 'thietbi/scan/MAYSCAN09.jpg',
    name: 'Epson Scanner V330',
    subCatId: 20
  },

  { img: 'thietbi/cham/GIAY2200A.jpg',
    name: 'Máy châm công thẻ giấy 2200A',
    subCatId: 21
  },
  { img: 'thietbi/cham/MAYCHAMCONG01.jpg',
    name: 'Máy Chấm Công Vân Tay thẻ cảm ứng Ronald jack X628-C',
    subCatId: 21
  },
  { img: 'thietbi/cham/inkim7600.jpg',
    name: 'Máy chấm công in kim 7600',
    subCatId: 21
  },
  { img: 'thietbi/cham/160.jpg',
    name: 'Máy chấm công vân tay 160',
    subCatId: 21
  },

  { img: 'thietbi/muc/laserHPCE278A.jpg',
    name: 'Mực in laser HP CE278A | HP 78A | Mực máy in HP P1606 | P1566 | M1536DNF',
    subCatId: 22
  },
  { img: 'thietbi/muc/HPCF283A.jpg',
    name: 'Mực HP CF283A',
    subCatId: 22
  },
  { img: 'thietbi/muc/CanonCartridge418Y.jpg',
    name: 'Mực in laser màu Canon Cartridge 418Y Vàng',
    subCatId: 22
  },
  { img: 'thietbi/muc/CanonCartridge323Y.jpg',
    name: 'Mực in laser màu Canon Cartridge 323Y Vàng',
    subCatId: 22
  },

  { img: 'tap/giayvs/KHANGIAYANAN01.jpg',
    name: 'Khăn Giấy Đa Năng AnAn',
    subCatId: 23
  },
  { img: 'tap/giayvs/KHANGIAYANAN03.jpg',
    name: 'Giấy vệ sinh AnAn',
    subCatId: 23
  },
  { img: 'tap/giayvs/GIAYSAIGON01.jpg',
    name: 'Khăn Ăn Saigon Eco 30',
    subCatId: 23
  },
  { img: 'tap/giayvs/GIAYSAIGON02.jpg',
    name: 'Giấy hộp',
    subCatId: 23
  },
  { img: 'tap/giayvs/GIAYPUPY05.jpg',
    name: 'Khăn Giấy Lụa Pulppy',
    subCatId: 23
  },
  { img: 'tap/giayvs/GIAYPUPY07.jpg',
    name: 'Giấy Lụa Hộp Pulppy',
    subCatId: 23
  },
  { img: 'tap/giayvs/GIAYPUPY010.jpg',
    name: 'Giấy Vệ Sinh Pulppy',
    subCatId: 23
  },

  { img: 'tap/vim/VIM01.jpg',
    name: 'VIM đậm đặc 900ml',
    subCatId: 24
  },
  { img: 'tap/vim/VIM02.jpg',
    name: 'VIM đậm đặc 500ml',
    subCatId: 24
  },
  { img: 'tap/vim/VIM03.jpg',
    name: 'VIM hương thông xanh 500ml',
    subCatId: 24
  },
  { img: 'tap/vim/DUCK02.jpg',
    name: 'Nước Tẩy Rửa Toilet Duck Nhựa Thông 500ml',
    subCatId: 24
  },
  { img: 'tap/vim/DUCK03.jpg',
    name: 'Tẩy Nhà Tắm Duck Tím 500ml',
    subCatId: 24
  },
  { img: 'tap/vim/DUCK01.jpg',
    name: 'Nước tẩy Duck',
    subCatId: 24
  },

  { img: 'tap/san/SUNLY02.jpg',
    name: 'Nước lau sàn Sunlight bạc hà 1L',
    subCatId: 25
  },
  { img: 'tap/san/SUNLY03.jpg',
    name: 'Nước lau sàn sunlight hoa hạ 1L',
    subCatId: 25
  },
  { img: 'tap/san/SUNLY06.jpg',
    name: 'Nước lau sàn sunlight hoa hạ 4kg',
    subCatId: 25
  },

  { img: 'tap/san/gift.jpg',
    name: 'Nước xịt kính Gift',
    subCatId: 26
  },
  { img: 'tap/san/cif.jpg',
    name: 'Nước xịt kính Cif',
    subCatId: 26
  },

  { img: 'tap/choi/14595866065308.jpg',
    name: 'Chổi cỏ',
    subCatId: 27
  },
  { img: 'tap/choi/choi-co-can-nhua-vmax-min.jpg',
    name: 'Chổi cán nhựa',
    subCatId: 27
  },
  { img: 'tap/choi/unnamed.jpg',
    name: 'Chổi chà',
    subCatId: 27
  },
  { img: 'tap/choi/CAYLAUNHA01.jpg',
    name: 'Bộ lau sàn 360',
    subCatId: 27
  },
  { img: 'tap/choi/CAYLAUNHA07.jpg',
    name: 'Cây lau nhà',
    subCatId: 27
  },

  { img: 'tap/san/sld-nrc-chanh-400g-24-chai-4-1.jpg',
    name: 'Nước rửa chén Sunlight',
    subCatId: 28
  },
  { img: 'tap/san/rua-chen-gift-chanh-800g-1-700x467-1.jpg',
    name: 'Nước rửa chén Gift',
    subCatId: 28
  },

  { img: 'bhld/BAOHOLAODONG06.jpg',
    name: 'Bộ đồ BHLĐ',
    subCatId: 29
  },

  { img: 'bhld/KHAUTRANGHOATINH07.jpg',
    name: 'Khẩu trang hoạt tính',
    subCatId: 30
  },
  { img: 'bhld/KHAUTRANGHOATINH05.jpg',
    name: 'Tấm than hoạt tính',
    subCatId: 30
  },
  { img: 'bhld/KHAUTRANGHOATINH06.jpg',
    name: 'Khẩu trang y tế',
    subCatId: 30
  },
  { img: 'bhld/KHAUTRANGHOATINH09.jpg',
    name: 'Khẩu trang vải',
    subCatId: 30
  },

  { img: 'bhld/gangtaychongcat06.jpg',
    name: 'Găng tay bảo hộ',
    subCatId: 31
  },
  { img: 'bhld/GANGTAYLEN05.jpg',
    name: 'Găng tay len',
    subCatId: 31
  },

  { img: 'bhld/chung-nhan-hop-chuan-kinh-bao-ho-lao-dong.jpg',
    name: 'Kính chống bụi',
    subCatId: 32
  },
  { img: 'bhld/han.jpg',
    name: 'Mặt nạ hàn',
    subCatId: 32
  }

];

var addItem = function(i) {
  models.Item.createData(itemData[i],function(){
    if (i+1<itemData.length) addItem(i+1);
  });
}

addItem(0);
models.Item.findAll({limit:5, order:[Sequelize.fn( 'RANDOM' )],
where: {
  [Op.or]: {subCatId: 1, subCatId: 2,subCatId: 3,subCatId: 4}
}
}).then(cat => {
  console.log(cat);
});
// models.Item.drop();
