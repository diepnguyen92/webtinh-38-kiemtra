const data = [
  {
    id : 1,
    name : "Vì Tinh Tú",
    price: "750,000",
    image:"https://img.mayflower.vn/2024/02/750k-shimmer-kemdau-thuy-chau-1-247x296.jpg",
    title: "Hoa tuoi"
  },
  {
    id : 2,
    name : "Mặt trời mộng mơ",
    price: "850,000",
    image:"https://img.mayflower.vn/2024/02/900k-cmd-maoluong-phang-mustang-2-5-1-247x296.jpg",
    title: "Hoa tuoi",
    category : "hot"
  },
  {
    id : 3,
    name : "Má em ửng hồng",
    price: "1,050,000",
    image:"https://img.mayflower.vn/2023/07/z4502838348593_eaea5990495885316972623f11ce3363-247x296.jpg",
    title: "Hoa tuoi",
    category : "hot"
  },
  {
    id : 4,
    name : "Tia nắng lung linh",
    price: "1,150,000",
    image:"https://img.mayflower.vn/2023/12/1100k-capu-maoluong-247x296.jpg",
    title: "Hoa tuoi",
    category : "hot"
  },  {
    id : 5,
    name : "Mặt trời chói trang",
    price: "650,000",
    image:"https://img.mayflower.vn/2023/11/2000k-cucmaudontulip-2-247x296.jpg",
    title: "Hoa tuoi",
    category : "hot"
  }, 
   {
    id : 6,
    name : "Hương Gió Bay",
    price: "1,350,000",
    image:"https://img.mayflower.vn/2024/02/1000k-tulip-phiyen-phang-tuongxoan-4-247x296.jpg",
    title: "Hoa tuoi",
    category : "new"
  },
  {
    id : 7,
    name : "Kết Nối Yêu Thương",
    price: "550,000",
    image:"https://img.mayflower.vn/2023/11/2100k-cam-CM-lan-ho-diep-tulip-ngoc-trai-2-247x296.jpg",
    title: "Hoa tuoi",
    category : "new"
  },
  {
    id : 7,
    name : "Đừng quên tên anh",
    price: "1,650,000",
    image:"https://img.mayflower.vn/2018/10/dung-quen-ten-anh-1-2-247x296.jpg",
    title: "Hoa tuoi",
    category : "new",
  },
  {
    id : 8,
    name : "Ngôi Sao cô đơn",
    price: "1,250,000",
    image:"https://img.mayflower.vn/2022/08/ngoi-sao-co-don-247x296.jpg",
    title: "Hoa tuoi",
    category : "new",
  },
  {
    id : 9,
    name : "Cột dây tơ duyên",
    price: "1,350,000",
    image:"https://img.mayflower.vn/2022/09/cot-day-to-duyen-247x296.jpg",
    title: "Hoa tuoi",
  },
  {
    id : 10,
    name : "Yêu xa",
    price: 550000,
    image:"https://img.mayflower.vn/2018/08/yeu-xa-2-247x296.jpg",
    title: "Hoa tuoi"
  },
  {
    id : 11,
    name : "Bó 200 bông hồng phấn",
    price: 1500000,
    image:"https://product.hstatic.net/200000427529/product/6cad585f-723c-409c-a532-e3865e826be4_e6a3c7dea42f4867ab8d0d5c594a1c47_grande.jpg",
    title: "Hoa Sap"
  },
  {
    id : 12,
    name : "Bó 100 bông hồng đỏ",
    price: 1200000,
    image:"https://product.hstatic.net/200000427529/product/9fae23e2-9477-45fc-ac3b-bb1fa588b55a_7a80492b886f45aa807c1a8b342df5fb_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 13,
    name : "Bó hồng xanh",
    price: 700000,
    image:"https://product.hstatic.net/200000427529/product/55d19128-6cc8-4725-a4e1-de234d7d88f7_592b56687964479a948130cd9bd4e7bf_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 14,
    name : "Bó Hoa Hồng Sáp",
    price: 4000000,
    image:"https://product.hstatic.net/200000427529/product/0f52e6b5-5f6d-4b24-84d3-33ee7886710f_9c73e8df97b24ae6be2627a89ef9975e_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 16,
    name : "Bó 99 Bông Vàng Gold ",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/90c1ae11-721d-489b-9a35-21b9c8230ff8_f3cdf3df4f5447fab4771a948b66cc94_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 17,
    name : "Bó Hoa Sáp Dạ Quang",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/dc238348-89bb-409a-ad21-c7b02cceaf54_521b19588d87469c871ed81f174360ca_master.jpg",
    title: "Hoa Sap"
  },

  {
    id : 18,
    name : "Bó Hoa Hồng Sáp Baby",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/aaa856db-caba-441a-9d21-0298b72d9b92_96868dc692944472a5445f48517e64e0_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 19,
    name : "Pink Girl - HST19",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/7872e78c-4864-424b-bfec-6f3c135b1b55_f21e94648b2e46428a542f164e301162_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 20,
    name : "Vòng Tròn Tình Yêu",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/4e17951c-4c0d-45ee-95c9-542fba3a78bc_b9b3db143c074b57b80ffd4a316766b2_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 20,
    name : "Vòng Tròn Tình Yêu",
    price: 1700000,
    image:"https://product.hstatic.net/200000427529/product/4e17951c-4c0d-45ee-95c9-542fba3a78bc_b9b3db143c074b57b80ffd4a316766b2_master.jpg",
    title: "Hoa Sap"
  },
  {
    id : 21,
    name : "Hương Mùa Thu",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/2500k_1-1-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 22,
    name : "Một Lòng Nhớ Thương",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/2600k-ohara-hong-mon-mix-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 23,
    name : "Giai Điệu Trái Tim",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/1600k-cam-xit-ohara-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 23,
    name : "Dây Tơ Hồng",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/1400k-cuc-mau-don-ohara-mix-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 24,
    name : "Tô Hồng",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/1500k-ohara-sen-nhi-3-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 25,
    name : "Yêu Thương Đong Đầy",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/11/1250k-shimmer-tim-xoay-2-247x296.jpg",
    title: "Hoa Gio"
  },
  {
    id : 26,
    name : "Âm Hưởng Nhẹ Nhàng",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/850k-lac-than-mix-ton-hong-trang-510x510.jpg",
    title: "Lang hoa"
  },
  {
    id : 27,
    name : "Tinh Tế",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/850k-lac-than-mix-ton-hong-trang-510x510.jpg",
    title: "Lang hoa"
  },
  {
    id : 28,
    name : "Truyền Lửa",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/850k-hongvang-cam-spirit-247x296.jpg",
    title: "Lang hoa"
  },
  {
    id : 29,
    name : "Lòng Nhiệt Huyết",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/1tr-cam-spirit-vang-247x296.jpg",
    title: "Lang hoa"
  },
  {
    id : 30,
    name : "Lẵng Juliet Cam",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/750k-julietcam-247x296.jpg",
    title: "Lang hoa"
  },
  {
    id : 31,
    name : "Điều Hạnh Phúc",
    price: 1700000,
    image:"https://img.mayflower.vn/2024/01/750k-julietcanhxoan-phangmustang-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 32,
    name : "Gìn Giữ Yêu Thương",
    price: 1700000,
    image:"https://img.mayflower.vn/2024/01/650k-cmd-tulip-2-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 33,
    name : "Một Nhành Hoa Xinh",
    price: 1700000,
    image:"https://img.mayflower.vn/2024/01/700k-phangchum-tieudelphin-thanhlieu-lalieuthanhhuong-2-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 34,
    name : "Mây Họa Ánh Trăng",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/1600k-anh-trang-thanh-lieu-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 35,
    name : "Ánh Trăng Chờ Đợi",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/1300k-camnhaphalan-mikoto-3-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 36,
    name : "Ánh Mắt Kẻ Mộng Mơ",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/12/1200k-tulip-tuong-phang-tim-1-247x296.jpg",
    title: "Hoa bo"
  },
  {
    id : 37,
    name : "Kệ Hoa Rực Rỡ",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/07/1600K-2-247x296.jpg",
    title: "ke hoa"
  },
  {
    id : 38,
    name : "Rực Rỡ Thành Công",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/07/2600k-1-247x296.jpg",
    title: "ke hoa"
  },
  {
    id : 39,
    name : "Hữu Nghị Hợp Tác",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/07/1400k-2-247x296.jpg",
    title: "ke hoa"
  },
  {
    id : 40,
    name : "Kệ Hoa Hồng Phát",
    price: 1700000,
    image:"https://img.mayflower.vn/2023/07/2300k-247x296.jpg",
    title: "ke hoa"
  }];
  
// truy cập phần tử
let rowJsHt = document.querySelector(".row-js-ht")
let rowJsHs = document.querySelector(".row-js-hs")
let rowjsHsn = document.querySelector(".row-js-hsn")
let rowJsHkt = document.querySelector(".row-js-hb")
let rowJsHl = document.querySelector(".row-js-hl")
// try cập phần tử tab listing
let rowHot = document.querySelector(".row-js-hot")
let rowNew = document.querySelector(".row-js-new")
// lọc tittle
const getData = (list,value)=>{
  return list.filter((item)=>{
return item.title ===value
  })};

  // lọc categoty
const getDataHn = (list,value)=>{
  return list.filter((item)=>{
return item.category ===value
  })};
// console.log(getDataHn(data,"hot"));
  const listDataHt = getData(data, "Hoa tuoi");
  // console.log(listDataHt);
  const listDataHs = getData(data, "Hoa Sap");
  const listDataHsn = getData(data, "Hoa Gio")
  const listDataHkt = getData(data, "Hoa bo")
  const listDataHl = getData(data, "Lang hoa")
  // sp hot, new
  const listDataHot = getDataHn(data, "hot")
  const listDataNew = getDataHn(data, "new")
  // render data => HTML
  const renderData = (listData)=>{
    let HTML = ``
    listData.forEach((item) => {
      HTML +=` <div class="col-12 col-sm-6 col-md-3">
      <a href="/defaut1.html?id=${item.id}" target="_blank">
      <div class="content">
      <img class="image" src="${item.image}" alt="${item.name}">
      <div class="content2">
      <div class="name-price">
       <div class="name">${item.name}</div>
       <div class="price">${item.price} VND</div>
      </div>
      <button class="cart"><i class="fa-solid fa-cart-plus"></i> Mua ngay</button>
      </div></div></a></div>`
    });
    return HTML;
  
  };

  rowJsHt.innerHTML = renderData(listDataHt);
  rowJsHs.innerHTML = renderData(listDataHs);
  rowjsHsn.innerHTML = renderData(listDataHsn);
  rowJsHkt.innerHTML = renderData(listDataHkt);
  rowJsHl.innerHTML = renderData(listDataHl);

  
rowHot.innerHTML = renderData(listDataHot)
rowNew.innerHTML = renderData(listDataNew)
  // truy cập sp bán chạy, new
  let btnListing = document.querySelectorAll('.btn-listing');
let tabContent = document.querySelectorAll('.tab-content');
// tab listing
// Tab listing Product
const listingProduct = (btn, tab) => {
  btn.forEach((button, index) => {

    button.addEventListener('click', () => {
      // Remove active old
      btn.forEach((item) => {
        item.classList.remove('active');
      })
      tab.forEach((value) => {
        value.classList.remove('active');
      })
      // Add active new with click button
      button.classList.add('active');
      tabContent[index].classList.add('active');
    });

  })

}
listingProduct(btnListing, tabContent);
// tạo chat mesenger
// truy cập phần tử mesenger
let mesenger = document.querySelector(".mesenger")
let msMain = document.querySelector(".mesenger-main")
let closeButton = document.querySelector(".close-ms")
// console.log(closeButton);
// console.log(mesenger);
mesenger.addEventListener('click', ()=>{
 msMain.classList.toggle("active") });
 msMain.addEventListener('click', (event) => {
  event.stopPropagation();
});
// đóng mesenger khi click vào màn hình và button

document.addEventListener('click', (event) => {
  if (!mesenger.contains(event.target)) {
      msMain.classList.remove("active");
  }
});
closeButton.addEventListener('click',()=>{
  msMain.classList.remove("active")
})
//  giỏ hàng
// truy cập phần tử
let cart = document.querySelector(".bag")
// console.log(cart);
let cartModalOverlay = document.querySelector(".cart-modal-overlay");
let closeBtn = document.querySelector("#close-btn")
// thêm sự kiệN mở giỏ hàng
cart.addEventListener("click",()=>{
  // alert("123")
  cartModalOverlay.style.transform = "translateX(0)";
});
//  đóng giỏ hàng
closeBtn.addEventListener("click",()=>{
  cartModalOverlay.style.transform = "translateX(-200%)"
});
// đóng khi click ra ngoài màn hình
cartModalOverlay.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-modal-overlay") == true) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});
// thêm sản phẩm vào trong giỏ hàng
// truy cập vào nút mua
let addToCart = document.querySelectorAll(".cart")
// console.log(addToCart);
// lặp qua các nút
addToCart.forEach((item)=>{
// tạo sự kiệN click vào nút 
item.addEventListener("click",()=>{
  // alert("123")
addToCartClicked(item);
cartModalOverlay.style.transform = "translateX(0)";
})
});
let addToCartClicked = (buttonAdd) =>{
let parentButtonAdd = buttonAdd.parentElement;
let parentImageAdd = parentButtonAdd.parentElement;

let price = parentButtonAdd.querySelector(".price").innerHTML;
let image = parentImageAdd.querySelector(".image").src;
console.log(image);

//  thêm image, price lên popup giỏ hàng
addItemToCart(price,image)
};
let productRows = document.querySelector(".product-rows")
let addItemToCart = (price, image)=>{
  // console.log("Price in addItemToCart:", price);
  // console.log("Image path in addItemToCart:", image);
  let HTML = `
  <img class="cart-image" src=${image} alt="">
  <span class="cart-price">${price}</span>
  <input class="product-quantity" type="number" value="1">
  <button class="remove-btn">Xoá</button>
  `

// tạo ra row chứa thẻ HTML
let productRow = document.createElement("div");
productRow.classList.add("product-row");
// THÊM NỘI DUNG
productRow.innerHTML = HTML;
  // Truy cap phan tu lay ra tat cac hinh anh co san truoc day
  let cartImage = document.querySelectorAll(".cart-image");

  let issAdd = false;
  cartImage.forEach((img)=>{
    if(img.src == image) {
      alert("San pham da ton tai.");
      issAdd = true;
    }
  });

  if(issAdd) {
    return null;
  }
// Hien thi ra giao dien popup
productRows.append(productRow);
  // Xoa 1 item trong popup cart
  let removeBtn = document.querySelectorAll(".remove-btn");
  // console.log(removeBtn);
  removeBtn.forEach((value)=>{
    // value chinh nut button xoa
    value.addEventListener("click",()=>{
      removeCart(value);
    });
  });

};
// Xoa cac san pham da them
let removeCart = (btnRemove) => {
  let productRemove =  btnRemove.parentElement;
  productRemove.remove();
  // console.log(productRemove);
  updatePrice();
}
let updatePrice = ()=>{
  
  let countProduct = document.querySelectorAll(".product-row");
  console.log(countProduct);
}
