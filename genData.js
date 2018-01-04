var models = require("./models");

models.sequelize.sync();
var catData = [{
  name: 'Văn Phòng Phẩm'
},{
  name: 'Thiết Bị Văn Phòng'
},{
  name: 'Tạp Phẩm'
},{
  name: 'Đồ Bảo Hộ Lao Động'
}]


var subCatData = [
  {
    name: 'Giấy A5 - A0',
    catId: 1
  },
  {
    name: 'Dao, kéo, bàn cắt',
    catId: 1
  },
  {
    name: 'Sổ, tập, bao thư',
    catId: 1
  },
  {
    name: 'Bút Viết',
    catId: 1
  },
  {
    name: 'Máy tính, Pin các loại',
    catId: 1
  },
  {
    name: 'Dụng cụ học sinh',
    catId: 1
  },
  {
    name: 'Bảng, Lau bảng',
    catId: 1
  },
  {
    name: 'Con dấu, mực dấu',
    catId: 1
  },
  {
    name: 'Băng keo các loại',
    catId: 1
  },
  {
    name: 'Bấm kim, Bấm lỗ',
    catId: 1
  },
  {
    name: 'Sổ sách, chứng từ kế toán',
    catId: 1
  },
  {
    name: 'Thước các loại',
    catId: 1
  },
  {
    name: 'Dây đai',
    catId: 1
  },
  {
    name: 'PE',
    catId: 1
  },
  {
    name: 'Ruban film fax',
    catId: 1
  },

  {
    name: 'Máy in',
    catId: 2
  },
  {
    name: 'Máy fax',
    catId: 2
  },
  {
    name: 'Máy hủy tài liệu',
    catId: 2
  },
  {
    name: 'Máy ép plastic',
    catId: 2
  },
  {
    name: 'Máy scan',
    catId: 2
  },
  {
    name: 'Máy chấm công',
    catId: 2
  },
  {
    name: 'Mực in',
    catId: 2
  },

  {
    name: 'Giấy vệ sinh',
    catId: 3
  },
  {
    name: 'Nước tẩy',
    catId: 3
  },
  {
    name: 'Nước lau nhà',
    catId: 3
  },
  {
    name: 'Nước xịt kính',
    catId: 3
  },
  {
    name: 'Chổi, cây lau nhà',
    catId: 3
  },
  {
    name: 'Nước rửa chén',
    catId: 3
  },

  {
    name: 'Quần áo bảo hộ',
    catId: 4
  },
  {
    name: 'Khẩu trang',
    catId: 4
  },
  {
    name: 'Găng tay',
    catId: 4
  },
  {
    name: 'Kính bảo hộ',
    catId: 4
  },
  {
    name: 'Thiết bị bảo hộ khác',
    catId: 4
  }
];

var addCat = function(i) {
  models.Cat.createData(catData[i],function(){
    if (i+1<catData.length) addCat(i+1);
  });
}
// addCat(0);

var addSub = function(i) {
  models.SubCat.createData(subCatData[i],function(){
    if (i+1<subCatData.length) addSub(i+1);
  });
}
// addSub(0);

// models.Cat.findAll().then(cat => {
//   console.log(cat);
// });

// models.SubCat.findAll().then(cat => {
//   console.log(cat);
// });
