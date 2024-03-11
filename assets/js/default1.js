const data = [
    {
      id : 1,
      name : "Vì Tinh Tú",
      price: 750000,
      image:"https://img.mayflower.vn/2024/02/750k-shimmer-kemdau-thuy-chau-1-247x296.jpg",
      title: "Hoa tuoi",
      coment: "Vì Tinh Tú - Giỏ hoa xinh mix hài hòa giữa hồng shimmer và hồng kem dâu tạo nên 1 giỏ hoa màu sắc bắt mắt lẫn chất lượng tuyệt hảo.",
      content:`Giỏ hoa Vì Tinh Tú bao gồm:

      Hồng Shimmer
      Hồng kem dâu
      Lan tường hồng
      Thúy châu
      Hoa lá và phụ kiện khác`
    },
    {
      id : 2,
      name : "Mặt trời mộng mơ",
      price: 900000,
      image:"https://img.mayflower.vn/2024/02/900k-cmd-maoluong-phang-mustang-2-5-1-247x296.jpg",
      title: "Hoa tuoi",
      category : "hot"
    },
    {
      id : 3,
      name : "Má em ửng hồng",
      price: 1200000,
      image:"https://img.mayflower.vn/2023/07/z4502838348593_eaea5990495885316972623f11ce3363-247x296.jpg",
      title: "Hoa tuoi",
      category : "hot"
    },
    {
      id : 4,
      name : "Tia nắng lung linh",
      price: 1000000,
      image:"https://img.mayflower.vn/2023/12/1100k-capu-maoluong-247x296.jpg",
      title: "Hoa tuoi",
      category : "hot"
    },  {
      id : 5,
      name : "Mặt trời chói trang",
      price: 800000,
      image:"https://img.mayflower.vn/2023/11/2000k-cucmaudontulip-2-247x296.jpg",
      title: "Hoa tuoi",
      category : "hot"
    }, 
     {
      id : 6,
      name : "Hương Gió Bay",
      price: 1000000,
      image:"https://img.mayflower.vn/2024/02/1000k-tulip-phiyen-phang-tuongxoan-4-247x296.jpg",
      title: "Hoa tuoi",
      category : "new"
    },
    {
      id : 7,
      name : "Kết Nối Yêu Thương",
      price: 1500000,
      image:"https://img.mayflower.vn/2023/11/2100k-cam-CM-lan-ho-diep-tulip-ngoc-trai-2-247x296.jpg",
      title: "Hoa tuoi",
      category : "new"
    },
    {
      id : 7,
      name : "Đừng quên tên anh",
      price: 850000,
      image:"https://img.mayflower.vn/2018/10/dung-quen-ten-anh-1-2-247x296.jpg",
      title: "Hoa tuoi",
      category : "new",
    },
    {
      id : 8,
      name : "Ngôi Sao cô đơn",
      price: 850000,
      image:"https://img.mayflower.vn/2022/08/ngoi-sao-co-don-247x296.jpg",
      title: "Hoa tuoi",
      category : "new",
    },
    {
      id : 9,
      name : "Cột dây tơ duyên",
      price: 650000,
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
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    // console.log(id);
    // fillter id  product
    let productDefault = (listData,idProduct) =>{
// console.log(idProduct);
// console.log(listData);
return listData.filter((value)=>{
    // console.log(value);
    return value.id ==idProduct
})};
    let detail = productDefault(data,id)
    console.log(detail)
    // truy cập phần tử
let rowJS= document.querySelector(".row-js")

// hiển thị dữ liệu
let HTML = `
<div class="product">
    <div class="product-image">
        <img src="${detail[0].image}" alt="ảnh">
    </div>
    <div class="product-content">
        <div class="product-name">
            ${detail[0].name}
        </div>
        <div class="product-price">
            ${detail[0].price} VND
        </div>
        <div class="content-title">
           ${detail[0].coment}
        </div>
        <div class="product-add">
            <input class="product-quantity" type="number" value="1">
            <button>Thêm vào giỏ hàng</button>
        <div class="tittle-shop">
          <ul class="custom-list">
            <li>  Cần đặt hoa nhanh xin gọi: 0962.879.268</li>
            <li>  Hỗ trợ giao hoa nhanh trong vòng 30p kể từ khi hoàn tất thanh toán, hỗ trợ xuất hóa đơn VAT (+8%)</li>
            <li>  Sản phẩm của chúng tôi luôn mang những ý nghĩa tốt đẹp nhất gửi tới người nhận.</li>
          </ul>
        </div>
        </div>
 </div>
</div>
<div class="coment-rate">
    <div class="tittle-coment">
        <i class="fa-solid fa-chevron-down"></i>   Mô tả
    </div>
    <div class="tittle-coment coment">
        ${detail[0].content}
      
    </div>
    <div class="tittle-coment rate"><i class="fa-solid fa-chevron-down"></i> Đánh giá</div>
    <div class="tittle-coment">
        <i class="fa-solid fa-chevron-down"></i> Chính sách bán hàng.
    </div>
       
       <div class="tittle-coment note ">
        Giao hàng tại Hà Nội
- Giao hoa tận nơi các khu vực trong thành phố Hà Nội

- Có xuất hóa đơn đỏ nếu bạn yêu cầu.

- Miễn phí thiết kế và in băng rôn hoặc thiệp chúc mừng (nội dung theo ý bạn yêu cầu)

- Với đội ngũ nhân viên trẻ trung đầy nhiệt huyết và dày dặn kinh nghiệm, chúng tôi luôn nỗ lực hết sức mình để làm hài lòng quý khách hàng.

- May Flower cam kết sản phẩm hoa chúc mừng được thực hiện dựa trên mẫu đã chọn.

- Thời gian giao hàng nhanh nhất có thể từ 30 phút kể từ khi khách hàng đặt hàng (đối với các đơn hàng gấp, tuỳ thuộc vào yêu cầu và địa chỉ được giao).

- Giá trên chưa bao gồm thuế giá trị gia tăng (VAT).

- Dễ dàng thanh toán online với thẻ nội địa, quốc tế, Visa, Master, Paypal...
       </div>
</div>`;
rowJS.innerHTML = HTML;

