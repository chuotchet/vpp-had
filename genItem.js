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

  { img: 'none',
    name: 'Vở 96 trang',
    subCatId: 6
  },
  { img: 'none',
    name: 'Vở 200 trang',
    subCatId: 6
  },
  { img: 'none',
    name: 'Bút Thiên Long',
    subCatId: 6
  },
  { img: 'none',
    name: 'Gôm tẩy',
    subCatId: 6
  },

  { img: 'none',
    name: 'Bảng ghim có chân di động',
    subCatId: 7
  },
  { img: 'none',
    name: 'Bảng xoay',
    subCatId: 7
  },
  { img: 'none',
    name: 'Bảng trang viết lông',
    subCatId: 7
  },
  { img: 'none',
    name: 'Bảng từ trắng',
    subCatId: 7
  },
  { img: 'none',
    name: 'Bảng phấn',
    subCatId: 7
  },
  { img: 'none',
    name: 'Nam châm',
    subCatId: 7
  },
  { img: 'none',
    name: 'Đồ bôi bảng có nam châm',
    subCatId: 7
  },
  { img: 'none',
    name: 'Đồ bôi bảng không nam châm',
    subCatId: 7
  },

  { img: 'none',
    name: 'Dấu ngày tháng tự động',
    subCatId: 8
  },
  { img: 'none',
    name: 'Máy đóng 8 số Shiny N38 (5mm)',
    subCatId: 8
  },
  { img: 'none',
    name: 'Dấu tự động R 532',
    subCatId: 8
  },
  { img: 'none',
    name: 'Dấu tự động S842',
    subCatId: 8
  },
  { img: 'none',
    name: 'Mực Lion Indelible Ink MC-55',
    subCatId: 8
  },
  { img: 'none',
    name: 'Shiny Printer R-524D',
    subCatId: 8
  },
  { img: 'none',
    name: 'Shiny S-1000 Die Plate Dater Stamp',
    subCatId: 8
  },
  { img: 'none',
    name: 'Dấu 6 Số Siêu Bền Max N-607',
    subCatId: 8
  },
  { img: 'none',
    name: 'Dấu Ngày Tháng 4mm',
    subCatId: 8
  },
  { img: 'none',
    name: 'Dấu Mã Số Thuế 18mm',
    subCatId: 8
  },

  { img: 'none',
    name: 'Băng keo màu',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo Simili',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo điện nano',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo vải',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo giấy',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo trong',
    subCatId: 9
  },
  { img: 'none',
    name: 'Băng keo đục',
    subCatId: 9
  },

  { img: 'none',
    name: 'Bấm lỗ',
    subCatId: 10
  },
  { img: 'none',
    name: 'Bấm kim số 10',
    subCatId: 10
  },
  { img: 'none',
    name: 'Bấm lỗ 20 tờ Deli',
    subCatId: 10
  },
  { img: 'none',
    name: 'Bấm kim cỡ đại',
    subCatId: 10
  },
  { img: 'none',
    name: 'Máy bấm 4 lỗ',
    subCatId: 10
  },
  { img: 'none',
    name: 'Bấm sô 3',
    subCatId: 10
  },

  { img: 'none',
    name: 'Giấy giới thiệu',
    subCatId: 11
  },
  { img: 'none',
    name: 'Hóa đơn bán lẻ 1 liên',
    subCatId: 11
  },
  { img: 'none',
    name: 'Hóa đơn bán lẻ 2 liên',
    subCatId: 11
  },
  { img: 'none',
    name: 'Sổ công văn',
    subCatId: 11
  },
  { img: 'none',
    name: 'Biên Nhận 1 Liên Trắng',
    subCatId: 11
  },
  { img: 'none',
    name: 'Giấy Tạm Ứng',
    subCatId: 11
  },
  { img: 'none',
    name: 'Giấy Giới Thiệu 1 Liên Trắng Dày',
    subCatId: 11
  },
  { img: 'none',
    name: 'Phiếu Nhập Kho 3 Liên',
    subCatId: 11
  },
  { img: 'none',
    name: 'Phiếu Xuất Kho 3 Liên',
    subCatId: 11
  },
  { img: 'none',
    name: 'Hóa Đơn 3 Liên',
    subCatId: 11
  },
  { img: 'none',
    name: 'Phiếu Xuất Kho 2 Liên Khổ A5',
    subCatId: 11
  },

  { img: 'none',
    name: 'Thước Kim Nguyên',
    subCatId: 12
  },
  { img: 'none',
    name: 'Thước Parabol 1 Winq',
    subCatId: 12
  },
  { img: 'none',
    name: 'Thước bộ WinQ T140',
    subCatId: 12
  },
  { img: 'none',
    name: 'Thước Dẻo Winq 15 cm',
    subCatId: 12
  },
  { img: 'none',
    name: 'Thước Dẻo Winq 20 cm',
    subCatId: 12
  },
  { img: 'none',
    name: 'Bộ Thước Êke',
    subCatId: 12
  },

  { img: 'none',
    name: 'Dây đai - 01',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 02',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 03',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 04',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 05',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 06',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 07',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 08',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 09',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 10',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 11',
    subCatId: 13
  },
  { img: 'none',
    name: 'Dây đai - 12',
    subCatId: 13
  },

  { img: 'none',
    name: 'PE cuộn 20kg',
    subCatId: 14
  },
  { img: 'none',
    name: 'PE cuộn 50kg',
    subCatId: 14
  },
  { img: 'none',
    name: 'PE cuộn 10kg',
    subCatId: 14
  },

  { img: 'none',
    name: 'Film Fax Brother',
    subCatId: 15
  },
  { img: 'none',
    name: 'Film fax Panasonic',
    subCatId: 15
  },
  { img: 'none',
    name: 'Film fax Sharp',
    subCatId: 15
  },

  { img: 'none',
    name: 'Máy in Canon 2900',
    subCatId: 16
  },
  { img: 'none',
    name: 'Máy in kim OKI ',
    subCatId: 16
  },
  { img: 'none',
    name: 'Máy in Epson Printer LQ 300+II (300 cps)',
    subCatId: 16
  },
  { img: 'none',
    name: 'HL-1111 Máy in Laser Brother',
    subCatId: 16
  },
  { img: 'none',
    name: 'Máy in HP LaserJet Pro P1102W',
    subCatId: 16
  },
  { img: 'none',
    name: 'Máy in HP LaserJet Pro P2035',
    subCatId: 16
  },

  { img: 'none',
    name: 'Máy Fax PANASONIC KX-FP 701',
    subCatId: 17
  },
  { img: 'none',
    name: 'Máy Fax Panasonic KX-FT987CX',
    subCatId: 17
  },
  { img: 'none',
    name: 'Máy Fax nhiệt Canon B-820',
    subCatId: 17
  },
  { img: 'none',
    name: 'Máy Fax Panasonic KX-MB772',
    subCatId: 17
  },

  { img: 'none',
    name: 'Máy huỷ tài liệu Silicon PS-620C',
    subCatId: 18
  },
  { img: 'none',
    name: 'Máy huỷ tài liệu Silicon PS-812C',
    subCatId: 18
  },
  { img: 'none',
    name: 'Máy huỷ công nghiệp Silicon PS-526C',
    subCatId: 18
  },

  { img: 'none',
    name: 'Máy ép plastic DSB So-good 330-LCD',
    subCatId: 19
  },
  { img: 'none',
    name: 'Máy ép plastic DSB So-good 235-TP',
    subCatId: 19
  },
  { img: 'none',
    name: 'Máy ép plastic ABC Office HeatSeal H525',
    subCatId: 19
  },

  { img: 'none',
    name: 'Canon Scanner 5600F',
    subCatId: 20
  },
  { img: 'none',
    name: 'L2734A Máy quét HP Scanjet 200 Flatbed Photo Scanner',
    subCatId: 20
  },
  { img: 'none',
    name: 'HP Scanner Scanjet 3000 S2',
    subCatId: 20
  },
  { img: 'none',
    name: 'Epson Scanner V330',
    subCatId: 20
  },

  { img: 'none',
    name: 'Máy châm công thẻ giấy 2200A',
    subCatId: 21
  },
  { img: 'none',
    name: 'Máy Chấm Công Vân Tay thẻ cảm ứng Ronald jack X628-C',
    subCatId: 21
  },
  { img: 'none',
    name: 'Máy chấm công in kim 7600',
    subCatId: 21
  },
  { img: 'none',
    name: 'Máy chấm công vân tay 160',
    subCatId: 21
  },

  { img: 'none',
    name: 'Mực in laser HP CE278A | HP 78A | Mực máy in HP P1606 | P1566 | M1536DNF',
    subCatId: 22
  },
  { img: 'none',
    name: 'Mực HP CF283A',
    subCatId: 22
  },
  { img: 'none',
    name: 'Mực in laser màu Canon Cartridge 418Y Vàng',
    subCatId: 22
  },
  { img: 'none',
    name: 'Mực in laser màu Canon Cartridge 323Y Vàng',
    subCatId: 22
  },

  { img: 'none',
    name: 'Khăn Giấy Đa Năng AnAn',
    subCatId: 23
  },
  { img: 'none',
    name: 'Giấy vệ sinh AnAn',
    subCatId: 23
  },
  { img: 'none',
    name: 'Khăn Ăn Saigon Eco 30',
    subCatId: 23
  },
  { img: 'none',
    name: 'Giấy hộp',
    subCatId: 23
  },
  { img: 'none',
    name: 'Khăn Giấy Lụa Pulppy',
    subCatId: 23
  },
  { img: 'none',
    name: 'Giấy Lụa Hộp Pulppy',
    subCatId: 23
  },
  { img: 'none',
    name: 'Giấy Vệ Sinh Pulppy',
    subCatId: 23
  },

  { img: 'none',
    name: 'VIM đậm đặc 900ml',
    subCatId: 24
  },
  { img: 'none',
    name: 'VIM đậm đặc 500ml',
    subCatId: 24
  },
  { img: 'none',
    name: 'VIM hương thông xanh 500ml',
    subCatId: 24
  },
  { img: 'none',
    name: 'Nước Tẩy Rửa Toilet Duck Nhựa Thông 500ml',
    subCatId: 24
  },
  { img: 'none',
    name: 'Tẩy Nhà Tắm Duck Tím 500ml',
    subCatId: 24
  },
  { img: 'none',
    name: 'Nước tẩy Duck',
    subCatId: 24
  },

  { img: 'none',
    name: 'Nước lau sàn Sunlight bạc hà 1L',
    subCatId: 25
  },
  { img: 'none',
    name: 'Nước lau sàn sunlight hoa hạ 1L',
    subCatId: 25
  },
  { img: 'none',
    name: 'Nước lau sàn sunlight hoa hạ 4kg',
    subCatId: 25
  },

  { img: 'none',
    name: 'Nước xịt kính Gift',
    subCatId: 26
  },
  { img: 'none',
    name: 'Nước xịt kính Cift',
    subCatId: 26
  },

  { img: 'none',
    name: 'Chổi cỏ',
    subCatId: 27
  },
  { img: 'none',
    name: 'Chổi cán nhựa',
    subCatId: 27
  },
  { img: 'none',
    name: 'Chổi chà',
    subCatId: 27
  },
  { img: 'none',
    name: 'Bộ lau sàn 360',
    subCatId: 27
  },
  { img: 'none',
    name: 'Cây lau nhà',
    subCatId: 27
  },

  { img: 'none',
    name: 'Nước rửa chén Sunlight',
    subCatId: 28
  },
  { img: 'none',
    name: 'Nước rửa chén Gift',
    subCatId: 28
  },

  { img: 'none',
    name: 'Bộ đồ BHLĐ',
    subCatId: 29
  },

  { img: 'none',
    name: 'Khẩu trang hoạt tính',
    subCatId: 30
  },
  { img: 'none',
    name: 'Tấm than hoạt tính',
    subCatId: 30
  },
  { img: 'none',
    name: 'Khẩu trang y tế',
    subCatId: 30
  },
  { img: 'none',
    name: 'Khẩu trang vải',
    subCatId: 30
  },

  { img: 'none',
    name: 'Găng tay bảo hộ',
    subCatId: 31
  },
  { img: 'none',
    name: 'Găng tay len',
    subCatId: 31
  },

  { img: 'none',
    name: 'Kính chống bụi',
    subCatId: 32
  },
  { img: 'none',
    name: 'Kính hàn',
    subCatId: 32
  }

];

var addItem = function(i) {
  models.Item.createData(itemData[i],function(){
    if (i+1<itemData.length) addItem(i+1);
  });
}

// addItem(0);
models.Item.findAll({limit:5, order:[Sequelize.fn( 'RANDOM' )],
where: {
  [Op.or]: {subCatId: 1, subCatId: 2,subCatId: 3,subCatId: 4}
}
}).then(cat => {
  console.log(cat);
});
// models.Item.drop();
