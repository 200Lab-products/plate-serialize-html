export const data = [
  { "type": "h2", "children": [{ "text": "1. NodeJS là gì?" }] },
  {
    "type": "p",
    "children": [
      { "text": "Nodejs là một môi trường runtime chạy " },
      { "text": "JavaScript" },
      {
        "text": " đa nền tảng, open-source (mã nguồn mở), được sử dụng rộng rãi bởi lập trình viên cho nhiều dự án. Nodejs cung cấp nhiều thư viện khác nhau, giúp đơn giản hóa việc lập trình."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Định nghĩa có thể với các bạn khá trừu tượng, nên mình sẽ giải thích khá ngắn gọn để làm rõ hơn định nghĩa trên:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Nodejs là một môi trường JavaScript runtime", "bold": true },
      {
        "text": ": Nodejs cung cấp môi trường runtime ngoài trình duyệt, cho phép bạn chạy mã JS nhanh chóng."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Nodejs đa nền tảng", "bold": true },
      {
        "text": ": Nodejs có thể chạy trên nhiều nền tảng hệ điều hành khác nhau: Windows, Linux, Unix, Mac OS X,..."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Nodejs là open-source", "bold": true },
      {
        "text": ": source Nodejs được cung cấp công khai, cho phép bạn tạo ra module, đóng góp và duy trì."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Một trong những tính năng chính của Nodejs là, cho phép xử lý đồng thời nhiều yêu cầu, mà không chặn các yêu cầu khác."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nodejs-la-gi-1.png",
    "children": [{ "text": "" }]
  },
  { "type": "h2", "children": [{ "text": "2. Tại sao nên sử dụng Nodejs?" }] },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Lập trình bất đồng bộ:", "bold": true },
      {
        "text": " Server không cần chờ dữ liệu mà API trả về, vẫn có thể xử lý các yêu cầu khác."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Tốc độ:", "bold": true },
      {
        "text": " Được xây dựng dựa trên engine JavaScript V8, Nodejs thực thi mã nhanh."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "NPM:", "bold": true },
      {
        "text": " Với hơn 50,000 package khác nhau, developer dễ dàng tìm kiếm, lựa chọn và tích hợp tính năng cần thiết vào dự án của mình."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Không có buffering:", "bold": true },
      {
        "text": " Nodejs xử lý các tệp âm thanh và video hiệu quả bằng cách xuất dữ liệu theo từng phần (chunk) thay vì buffer dữ liệu."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Đơn luồng:", "bold": true },
      { "text": " Nodejs sử dụng mô hình đơn luồng với vòng lặp sự kiện (" },
      { "text": "Event loop" },
      {
        "text": "), giúp xử lý số lượng request nhiều hơn so với các server truyền thống như Apache HTTP Server."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Bạn có thể thấy rõ qua sơ đồ xử lý tệp giữa PHP/ASP và Nodejs sau:"
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nodejs-request-1.png",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Nodejs không đợi khi task hoàn thành mà tiếp tục xử lý request khác ngay lập tức nhờ cơ chế bất đồng bộ, non-blocking."
      }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "3. Đâu là lầm tưởng sai về Nodejs của developer?" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Mình sẽ đề cập đến một vài lầm tưởng phổ biến mà hầu như bạn dev nào cũng từng mắc phải về Nodejs:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Nodejs chạy đa luồng vì khả năng xử lý nhiều tác vụ cùng lúc:",
        "bold": true
      },
      {
        "text": " Đây là một lầm tưởng mà dường như dev nào cũng mắc phải. Thực tế thì, Nodejs chạy đơn luồng, và sự kỳ diệu nằm ở cơ chế hoạt động của "
      },
      { "text": "Event Loop" },
      { "text": "." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Nodejs là web framework", "bold": true },
      {
        "text": ": Đây là một nhận định sai lầm. Nodejs không phải là một framework, nó chỉ là nền tảng cho phép chạy Javascript."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Nodejs là một ngôn ngữ lập trình", "bold": true },
      {
        "text": ": Hoàn toàn không đúng. Nodejs không phải ngôn ngữ lập trình, mà chỉ là một môi trường runtime."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Nodejs chỉ sử dụng riêng cho phía frontend hoặc backend:",
        "bold": true
      },
      {
        "text": " Không hoàn toàn chính xác, Nodejs có thể sử dụng cho cả hai phía."
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "4. Cơ chế hoạt động của Nodejs" }] },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/co-che-hoat-dong-nodejs.png",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Nhiều client sẽ gửi request đến server, sẽ được đưa vào Event Queue."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Event Loop sẽ lấy lần lượt các request từ hàng đợi và xử lý chúng."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Nếu request cần thực hiện các tác vụ non-blocking I/O, Event Loop sẽ tự động xử lý rồi trả về response."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Đối với những tác vụ blocking I/O, Event Loop sẽ đưa tasks qua Thread Pool (thông qua thư viện Libuv)."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Khi thread đã thực hiện xong, kết quả sẽ được Nodejs đẩy callback của tasks đó về Event Queue để xử lý."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Cuối cùng, response sẽ được phản hồi lại cho các client." }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Qua sơ đồ này, bạn sẽ thấy rõ cách Nodejs sử dụng Event Loop và mô hình I/O bất đồng bộ để xử lý một số lượng lớn request đồng thời một cách hiệu quả."
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "5. Ưu điểm của Nodejs" }] },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Hiệu suất cao", "bold": true },
      {
        "text": ": Nodejs chạy đơn luồng, sử dụng V8 Engine, giúp ứng dụng đảm bảo tốc độ khi có nhiều requests."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Xử lý bất đồng bộ và I/O hướng sự kiện", "bold": true },
      {
        "text": ": Khả năng xử lý I/O bất đồng bộ, giúp Nodejs có thể xử lý nhiều tasks, mà không cần phải chờ kết quả của task trước đó."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Phát triển ứng dụng", "bold": true },
      {
        "text": ": Có thể sử dụng để phát triển ứng dụng ở cả phía client và server."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Module đa dạng", "bold": true },
      {
        "text": ": Nodejs sở hữu một cộng đồng duy trì, phát triển modules, thư viện giúp cho việc phát triển ứng dụng nhanh chóng."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Stream và xử lý file lớn", "bold": true },
      {
        "text": ": Nodejs hỗ trợ streaming, cho phép xử lý các file có kích thước lớn không tốn nhiều tài nguyên."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Phù hợp với ứng dụng real time", "bold": true },
      {
        "text": ": Do Nodejs xử lý bất đồng bộ, thích hợp với các ứng dụng real time như: chat applications, streaming services,..."
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "6. Nhược điểm của Nodejs" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Đây là một vài hạn chế của Nodejs mà khi xây dựng, phát triển ứng dụng, bạn cần phải cân nhắc trước khi bắt đầu quá trình build:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Cần có kiến thức nền tảng về JavaScript." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Khá phức tạp trong việc thao tác với cơ sử dữ liệu quan hệ." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Mỗi callback sẽ đi kèm với rất nhiều callback lồng nhau khác, dễ dẫn đến tình trạng \"callback hell\"."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Không phù hợp với các tác vụ đòi hỏi nhiều CPU core." }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "7. Hướng dẫn khởi tạo dự án Nodejs" }]
  },
  { "type": "h3", "children": [{ "text": "7.1 Download và install Nodejs" }] },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Bạn nên vào website chính thức của Nodejs để download và cài đặt package thích hợp."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nodejs.org.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Sau khi cài đặt xong, bạn có thể kiểm tra phiên bản bằng lệnh: "
      },
      { "text": "node -v ", "bold": true },
      { "text": "trong cmd" },
      { "text": ".", "bold": true }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Nếu như cài đặt đã thành công, bạn sẽ thấy version Nodejs mà bạn đã cài đặt."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/node-version.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "h3",
    "children": [{ "text": "7.2 Khởi tạo dự án đầu tiên với Nodejs" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Mình sẽ bắt đầu xây dựng một dự án đơn giản Hello 200lab nhé!"
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "B1: Bạn tạo một thư mục với tên project-200lab để chứa dự án."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/create-new-folder.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "B2: Mở thư mục vừa tạo bằng code editor của bạn. Ví dụ ở đây mình sử dụng VS Code (Visual Studio Code)."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "B3: Bên trong folder, tạo một file mới với tên app.js" }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "B4: Trong file app.js bạn thêm đoạn mã JS như hình dưới:" }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/project-hello-200lab.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "B5: Bạn có thể chạy script trong terminal với lệnh: node <filename>. Với project này filename của mình là app.js."
      }
    ]
  },
  { "type": "p", "children": [{ "text": "🚙" }, { "text": "node app.js" }] },
  {
    "type": "p",
    "children": [
      { "text": "Lúc này bạn sẽ thấy chuỗi in ra tại terminal là Hello 200lab" }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/node-run.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "h2",
    "children": [{ "text": "8. Kiểm soát các phiên bản Nodejs với nvm" }]
  },
  { "type": "h3", "children": [{ "text": "8.1 Giới thiệu nvm" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Khi các bạn phải làm nhiều project cùng một lúc, nhưng lại khác phiên bản Nodejs. Bạn sẽ phải lặp đi lặp lại quá trình gỡ, cài đặt cho đúng phiên bản của dự án. Việc này rất khó chịu, phiền phức. "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Nvm (Node Version Management) ra đời giải quyết vấn đề trên bằng một câu lệnh. Nvm là công cụ giúp bạn quản lý, chuyển đổi giữa các phiên bản Nodejs."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nvm-la-gi.png",
    "children": [{ "text": "" }]
  },
  {
    "type": "h3",
    "children": [{ "text": "8.2 Cài đặt và hướng dẫn sử dụng" }]
  },
  { "type": "h4", "children": [{ "text": "8.2.1 Cài đặt" }] },
  {
    "type": "p",
    "children": [
      { "text": "B1: Bạn có thể cài đặt nvm " },
      {
        "type": "a",
        "url": "https://github.com/coreybutler/nvm-windows",
        "target": "_blank",
        "children": [{ "text": "tại đây" }]
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "B2: Sau khi cài đặt thành công bạn có thể kiểm tra phiên bản nvm bằng lệnh: nvm -v. Khi thành công bạn sẽ xem được phiên bản của nvm."
      }
    ]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nvm-version.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "h4",
    "children": [
      { "text": "8.2.2 Hướng dẫn sử dụng một vài câu lệnh thường sử dụng" }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Để xem danh sách các phiên bản Nodejs trong máy:" }]
  },
  { "type": "p", "children": [{ "text": "✔️" }, { "text": "nvm ls" }] },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Chọn phiên bản Nodejs bạn cần cài đặt cho dự án. Ví dụ: mình muốn cài đặt Nodejs 22.4.0"
      }
    ]
  },
  {
    "type": "p",
    "children": [{ "text": "✔️" }, { "text": "nvm install 22.4.0" }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nvm-install.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Bạn muốn sử dụng phiên bản 22.4.0 mà không phải là 21.7.3 nữa"
      }
    ]
  },
  { "type": "p", "children": [{ "text": "✔️" }, { "text": "nvm use 22.4.0" }] },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nvm-use-1.jpg",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Bạn muốn xóa phiên bản Nodejs không còn cần thiết nữa:" }
    ]
  },
  {
    "type": "p",
    "children": [{ "text": "✔️" }, { "text": "nvm uninstall 22.4.0" }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2024/07/nvm-uninstall.jpg",
    "children": [{ "text": "" }]
  },
  { "type": "h2", "children": [{ "text": "9. Kết luận" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Thông qua bài viết, hy vọng bạn đã có kiến thức để tự tin bắt đầu hành trình developer với Nodejs."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Những khái niệm cơ bản, lợi ích của Nodejs. " }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Nguyên do Nodejs lại được sử dụng phổ biến." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Cơ chế hoạt động của Nodejs." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Những lầm tưởng về Nodejs." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Ưu và nhược điểm của Nodejs." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Cách khởi tạo một dự án basic." }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Sử dụng nvm để quản lý, chuyển đổi giữa các phiên bản Nodejs."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Bạn có thể tham khảo thêm các bài blog cùng chủ đề:" }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Event Loop là gì?" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "So sánh Golang và NodeJs" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [{ "text": "Giải thích các ký hiệu trong class diagram" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Ban nhận được một bản UI siêu đẹp nhưng làm sao để phân tích nó thành các widget, rồi code ra một cách chính xác nhất? "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Series này 200Lab sẽ cho bạn một góc nhìn thực tế về quá trình code UI cho app Movie Ticket. "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Hãy tìm một góc thật yên tĩnh, đeo tai nghe và cùng code theo video nhé!"
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Tài liệu của series bạn có thể nhận ở link bên dưới" }
    ]
  },
  { "type": "h2", "children": [{ "text": "Nội dung" }] },
  {
    "type": "media_embed",
    "url": "https://www.youtube.com/embed/HqvEuX0ozIQ?feature=oembed",
    "children": [{ "text": "" }]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Nội dung mà mình sẽ thực hiện trong series live coding này nhé!"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/HqvEuX0ozIQ",
        "target": "_blank",
        "children": [{ "text": "Introduction & make HomePage" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/U13RDRSYkyg",
        "target": "_blank",
        "children": [{ "text": "Create Search Bar In HomePage" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/8_d7mCJkeC4",
        "target": "_blank",
        "children": [{ "text": "Create List Category TabBar" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/G1gQSecT2mY",
        "target": "_blank",
        "children": [{ "text": "Fancy Carousel Slider List Movie" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/EBYuLUZHl2k",
        "target": "_blank",
        "children": [{ "text": "List Card Coming soon Movie" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/4vIMqrgvA6U",
        "target": "_blank",
        "children": [{ "text": "Movie Detail Page" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/2nZTO_fprSY",
        "target": "_blank",
        "children": [{ "text": "" }]
      },
      {
        "type": "a",
        "url": "https://youtu.be/qamZVzns9U0",
        "target": "_blank",
        "children": [{ "text": "Change StatusBar" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/MIajjiaFaAU",
        "target": "_blank",
        "children": [{ "text": "Make Select Cinema Page" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/nL7-neBlVF8",
        "target": "_blank",
        "children": [{ "text": "Select Seat Page" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/BzWmhJdLkE0",
        "target": "_blank",
        "children": [{ "text": "Create List Seat" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/Ca-WxmYAOgw",
        "target": "_blank",
        "children": [{ "text": "Create Large Screen In Room" }]
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "type": "a",
        "url": "https://youtu.be/E1izEAFNusI",
        "target": "_blank",
        "children": [{ "text": "Make Check Out Page" }]
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "Tài liệu" }] },
  {
    "type": "p",
    "children": [
      { "text": "Tải tài liệu của series tại link bên dưới bạn nhé!" }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "type": "a",
        "url": "https://www.figma.com/file/Viz5B7b6CsrR1JB6Mo2hJ5/Movea---Movie-Ticket-App?node-id=421%3A5934",
        "target": "_blank",
        "children": [{ "text": "UI Movie Ticket App" }]
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "type": "a",
        "url": "https://github.com/200lab/movea-app/tree/base-project?fbclid=IwAR1hUefpqr0tzUmEKc1LoRDsd8m9yfOCC349iadqZ2v4KdRXEAuSOJEdIiI",
        "target": "_blank",
        "children": [{ "text": "Link GitHub" }]
      }
    ]
  },
  { "type": "p", "children": [{ "text": "\n" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Git là một hệ thống quản lý phiên bản phổ biến được sử dụng rộng rãi trong công việc phát triển phần mềm và quản lý mã nguồn."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Git giúp các nhà phát triển làm việc cùng nhau trên cùng một dự án, theo dõi lịch sử thay đổi của mã nguồn, và giải quyết xung đột một cách hiệu quả. "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Đọc thêm: " },
      { "text": "Git là gì? Tổng quan về Git cơ bản cho lập trình viên" }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Những lệnh Git là những công cụ cơ bản giúp bạn quản lý và làm việc với mã nguồn trong dự án của bạn một cách hiệu quả. Hiểu cách sử dụng chúng có thể giúp bạn kiểm soát và theo dõi lịch sử thay đổi của mã nguồn dễ dàng hơn."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Sau đây tôi xin giới thiệu một số lệnh Git cơ bản và định nghĩa của chúng. Hi vọng chúng sẽ giúp ích cho bạn."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "type": "a",
        "url": "https://200lab.io/khoa-hoc/?utm_source=blog&utm_medium=content&utm_campaign=ao_productpush",
        "target": "_blank",
        "children": [{ "text": "Xem Khoá Học Của 200Lab" }]
      }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "1. git init là gì?", "bold": true }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/Screenshot-2023-10-08-at-02.53.36.png",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git init" }] },
  {
    "type": "p",
    "children": [
      { "text": "git init", "code": true },
      {
        "text": " dùng để khởi tạo một repository Git mới hoặc để bắt đầu quản lý phiên bản mã nguồn của một dự án từ đầu. Khi bạn chạy "
      },
      { "text": "git init", "code": true },
      { "text": ", Git sẽ tạo ra một thư mục " },
      { "text": ".git", "code": true },
      {
        "text": " ẩn trong thư mục dự án của bạn, chứa toàn bộ hệ thống quản lý phiên bản Git và lịch sử thay đổi."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Dưới đây là cách sử dụng " },
      { "text": "git init", "code": true },
      { "text": ":" }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Để tạo một repository Git mới từ đầu, bạn di chuyển đến thư mục dự án của bạn trong dòng lệnh."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Sau đó, chạy lệnh " },
      { "text": "git init <tên_project>", "code": true },
      { "text": " để tạo Git project." }
    ]
  },
  {
    "type": "code_block",
    "children": [
      { "type": "code_line", "children": [{ "text": "cd my_project" }] },
      { "type": "code_line", "children": [{ "text": "" }] },
      {
        "type": "code_line",
        "children": [{ "text": "git init <tên_project>" }]
      }
    ]
  },
  { "type": "p", "children": [{ "text": "git init" }] },
  { "type": "h2", "children": [{ "text": "2. git add là gì?", "bold": true }] },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/Screenshot-2023-10-08-at-02.55.26.jpg",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git add" }] },
  {
    "type": "p",
    "children": [
      { "text": "git add", "code": true },
      {
        "text": " là một trong những lệnh quan trọng trong Git, được sử dụng để thêm (add) các tệp hoặc thư mục đã thay đổi vào vùng chờ (staging area) để chuẩn bị cho việc tạo commit. Cụ thể:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "git add [tên-tệp]", "code": true },
      { "text": ": Sử dụng để thêm một tệp cụ thể vào vùng chờ. Ví dụ: " },
      { "text": "git add myfile.txt", "code": true },
      { "text": "." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "git add .", "code": true },
      { "text": " hoặc " },
      { "text": "git add *", "code": true },
      {
        "text": ": Sử dụng để thêm tất cả các tệp và thư mục đã thay đổi trong thư mục hiện tại vào vùng chờ."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "git add -u", "code": true },
      { "text": " hoặc " },
      { "text": "git add --update", "code": true },
      {
        "text": ": Sử dụng để thêm tất cả các tệp đã thay đổi (nhưng không bao gồm các tệp mới) vào vùng chờ."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Lệnh " },
      { "text": "git add", "code": true },
      {
        "text": " cho phép bạn chọn cẩn thận những thay đổi cụ thể mà bạn muốn đưa vào commit. Sau khi bạn đã thêm các thay đổi vào vùng chờ, bạn có thể sử dụng "
      },
      { "text": "git commit", "code": true },
      {
        "text": " để tạo một commit mới với các thay đổi này. Điều này cho phép bạn tạo ra các commit chính xác với những thay đổi bạn muốn bao gồm, giúp quản lý lịch sử phiên bản của mã nguồn một cách cẩn thận."
      }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "3. git commit là gì?", "bold": true }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/Screenshot-2023-10-08-at-02.54.14.png",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "Git commit flow" }] },
  {
    "type": "p",
    "children": [
      { "text": "git commit", "code": true },
      {
        "text": " được sử dụng để tạo một \"commit,\" tức là một phiên bản (snapshot) của mã nguồn của bạn tại một thời điểm cụ thể. "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Mỗi commit bao gồm các thay đổi mới được thực hiện trên mã nguồn từ lần commit trước đó cùng với một thông điệp mô tả về những thay đổi đó."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Cú pháp cơ bản của lệnh " },
      { "text": "git commit", "code": true },
      { "text": " là:" }
    ]
  },
  {
    "type": "code_block",
    "children": [
      {
        "type": "code_line",
        "children": [{ "text": "git commit -m \"[tag]: [mô tả commit]\"" }]
      }
    ],
    "lang": "typescript"
  },
  { "type": "p", "children": [{ "text": "Cú pháp cơ bản của git commit" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Mô tả commit cần rõ ràng, ngắn gọn, chỉ ra lý do của sự thay đổi và sử dụng tag như "
      },
      { "text": "feat", "code": true },
      { "text": ", " },
      { "text": "fix", "code": true },
      { "text": ", " },
      { "text": "refactor", "code": true },
      { "text": ", " },
      { "text": "docs", "code": true },
      { "text": ", ..." }
    ]
  },
  { "type": "p", "children": [{ "text": "Ví dụ" }] },
  {
    "type": "code_block",
    "children": [
      {
        "type": "code_line",
        "children": [{ "text": "Fixes #123: Update authentication logic" }]
      },
      { "type": "code_line", "children": [{ "text": "" }] },
      {
        "type": "code_line",
        "children": [
          { "text": "- Refactor authentication process for improved security." }
        ]
      },
      {
        "type": "code_line",
        "children": [
          { "text": "- Add additional checks for user authorization." }
        ]
      },
      {
        "type": "code_line",
        "children": [{ "text": "- Update documentation to reflect changes." }]
      }
    ]
  },
  { "type": "p", "children": [{ "text": "Ví dụ commit" }] },
  {
    "type": "h2",
    "children": [{ "text": "4. git push là gì?", "bold": true }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/git-push-normal.gif",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git push" }] },
  {
    "type": "p",
    "children": [
      { "text": "git push", "code": true },
      {
        "text": " được sử dụng để đẩy (push) các commit và thay đổi từ máy tính của bạn lên một remote repository, thường là một dịch vụ như GitHub, GitLab, hoặc một máy chủ Git từ xa. Lệnh này có nhiệm vụ cập nhật repository từ xa với các thay đổi mới nhất từ nhánh hiện tại của bạn."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Cú pháp cơ bản của " },
      { "text": "git push", "code": true },
      { "text": " là:" }
    ]
  },
  {
    "type": "code_block",
    "children": [
      {
        "type": "code_line",
        "children": [{ "text": "git push [tên-remote] [tên-nhánh]" }]
      }
    ],
    "lang": "javascript"
  },
  { "type": "p", "children": [{ "text": "git push" }] },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "tên-remote", "code": true },
      {
        "text": " thường là tên của repository từ xa, thường là \"origin\" nếu bạn đã sao chép dự án từ một repository từ xa như GitHub."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "tên-nhánh", "code": true },
      {
        "text": " là tên của nhánh bạn muốn đẩy lên repository từ xa. Thông thường, bạn sẽ đẩy lên một nhánh cụ thể, chẳng hạn như \"main\" hoặc \"develop.\""
      }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "5. git pull là gì?", "bold": true }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/Screenshot-2023-10-08-at-03.05.15.jpg",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git pull" }] },
  {
    "type": "p",
    "children": [
      { "text": "git pull", "code": true },
      {
        "text": " là một lệnh trong Git được sử dụng để cập nhật mã nguồn của bạn từ repository từ xa, thường là một repository trên mạng như GitHub hoặc GitLab. Lệnh này có nhiệm vụ gộp (merge) các thay đổi từ repository từ xa vào branch hiện tại của bạn và đồng thời tải về bất kỳ thay đổi mới nào từ repository từ xa."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Cú pháp cơ bản của " },
      { "text": "git pull", "code": true },
      { "text": " là:" }
    ]
  },
  {
    "type": "code_block",
    "children": [
      {
        "type": "code_line",
        "children": [{ "text": "git pull [tên-remote] [tên-nhánh-từ-remote]" }]
      }
    ],
    "lang": "go"
  },
  {
    "type": "p",
    "children": [
      { "text": "Khi bạn chạy " },
      { "text": "git pull", "code": true },
      {
        "text": ", Git sẽ kết nối đến repository từ xa đã được cấu hình (thông thường là "
      },
      { "text": "origin", "code": true },
      {
        "text": " nếu bạn đã sao chép dự án từ repository trên mạng), và tải về các thay đổi từ nhánh được chỉ định trên repository từ xa."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Sau khi tải về thay đổi từ repository từ xa, Git sẽ tự động thực hiện thao tác gộp (merge) để kết hợp các thay đổi này vào branch hiện tại của bạn. Trong trường hợp xảy ra xung đột (conflict), bạn sẽ cần giải quyết xung đột trước khi commit."
      }
    ]
  },
  {
    "type": "h2",
    "children": [{ "text": "6. git checkout là gì?", "bold": true }]
  },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/Screenshot-2023-10-08-at-03.03.59.jpg",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git checkout" }] },
  {
    "type": "p",
    "children": [
      { "text": "git checkout", "code": true },
      {
        "text": " được sử dụng để thực hiện nhiều chức năng khác nhau, như chuyển đổi giữa các nhánh, tạo nhánh mới, hoặc thay đổi trạng thái làm việc với file. Cụ thể:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Chuyển đổi giữa các nhánh: ", "bold": true },
      { "text": "Khi bạn chạy " },
      { "text": "git checkout", "code": true },
      { "text": " với tên branch, ví dụ: " },
      { "text": "git checkout main", "code": true },
      {
        "text": ", bạn đang chuyển đổi từ một branch sang nhánh khác. Điều này cho phép bạn làm việc trên một branch cụ thể của dự án."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Tạo nhánh mới và chuyển đổi đến nhánh đó: ", "bold": true },
      {
        "text": "Bạn có thể tạo và chuyển đến một branch mới trong một lần chạy lệnh bằng cách sử dụng "
      },
      { "text": "git checkout -b [tên-nhánh]", "code": true },
      { "text": ". Ví dụ: " },
      { "text": "git checkout -b feature-branch", "code": true },
      {
        "text": " tạo một nhánh mới có tên \"feature-branch\" và chuyển đến branch này."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Chuyển đổi đến phiên bản cụ thể", "bold": true },
      { "text": ": Bạn có thể sử dụng " },
      { "text": "git checkout", "code": true },
      {
        "text": " để chuyển đổi đến một phiên bản cụ thể của file hoặc folder trong lịch sử commit. Ví dụ: "
      },
      { "text": "git checkout [commit-hash] [tên-tệp]", "code": true },
      { "text": " sẽ khôi phục file đó từ commit cụ thể." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Chuyển đổi giữa trạng thái làm việc với file", "bold": true },
      { "text": ": Nếu bạn đã sử dụng " },
      { "text": "git add", "code": true },
      {
        "text": " để đưa tệp vào vùng chờ và muốn hoàn tác (unstage) chúng, bạn có thể sử dụng "
      },
      { "text": "git checkout -- [tên-tệp]", "code": true },
      { "text": " để loại bỏ tệp đó khỏi vùng chờ." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Chuyển đổi đến thẻ (tags)", "bold": true },
      { "text": ": Bạn cũng có thể sử dụng " },
      { "text": "git checkout", "code": true },
      {
        "text": " để chuyển đổi đến một thẻ cụ thể (tag) trong dự án, giống như bạn chuyển đổi đến một commit cụ thể."
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "7. git gui là gì?", "bold": true }] },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/4-GitHub-Desktop-1.jpg",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "GitHub desktop" }] },
  {
    "type": "p",
    "children": [
      {
        "text": "Git GUI là viết tắt của \"Git Graphical User Interface\", đây là một loại phần mềm hoặc ứng dụng đồ họa được thiết kế để cung cấp giao diện người dùng đồ họa cho việc quản lý và sử dụng Git, hệ thống quản lý phiên bản mã nguồn phổ biến."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Một Git GUI cho phép người dùng thực hiện các thao tác Git mà không cần sử dụng dòng lệnh hoặc dòng lệnh terminal. Thay vì nhập các lệnh Git như "
      },
      { "text": "git commit", "code": true },
      { "text": ", " },
      { "text": "git push", "code": true },
      { "text": ", hoặc " },
      { "text": "git pull", "code": true },
      {
        "text": " vào terminal, người dùng có thể sử dụng giao diện đồ họa để thực hiện các tác vụ này bằng cách nhấp chuột và tương tác với các biểu đồ, danh sách thay đổi, và nút bấm."
      }
    ]
  },
  {
    "type": "p",
    "children": [{ "text": "Các tính năng phổ biến của Git GUI bao gồm:" }]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Xem lịch sử commit", "bold": true },
      {
        "text": ": Hiển thị danh sách các commit và thông tin chi tiết về từng commit."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Quản lý nhánh", "bold": true },
      { "text": ": Tạo, xóa, chuyển đổi và hợp nhất các nhánh dự án." }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Thêm và loại bỏ tệp", "bold": true },
      {
        "text": ": Thêm các tệp và thư mục vào vùng chờ (staging area) và thực hiện commit."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Xử lý xung đột", "bold": true },
      {
        "text": ": Giải quyết xung đột khi hợp nhất các thay đổi từ nhiều nguồn."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Push và Pull", "bold": true },
      {
        "text": ": Thực hiện các thao tác push (đẩy) và pull (kéo) với kho lưu trữ từ xa."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      { "text": "Xem biểu đồ commit", "bold": true },
      {
        "text": ": Hiển thị biểu đồ commit để theo dõi lịch sử thay đổi của dự án."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Một số Git GUI phổ biến bao gồm SourceTree, GitKraken, GitHub Desktop và TortoiseGit (cho Windows). Git GUI là một công cụ hữu ích đặc biệt đối với những người mới sử dụng Git hoặc người dùng muốn tận dụng sức mạnh của Git mà không cần học các lệnh dòng lệnh cơ bản."
      }
    ]
  },
  { "type": "h2", "children": [{ "text": "8. git scm là gì?", "bold": true }] },
  {
    "type": "img",
    "url": "https://statics.cdn.200lab.io/2023/10/git-workflow.png",
    "children": [{ "text": "" }]
  },
  { "type": "p", "children": [{ "text": "git scm" }] },
  {
    "type": "p",
    "children": [
      { "text": "Git SCM", "code": true },
      { "text": " là viết tắt của \"" },
      { "text": "Git Source Code Management", "bold": true },
      {
        "text": "\" Đây là một thuật ngữ được sử dụng để ám chỉ quá trình quản lý và kiểm soát mã nguồn trong dự án phát triển phần mềm bằng cách sử dụng hệ thống quản lý phiên bản Git."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Hệ thống quản lý phiên bản (VCS) như Git giúp theo dõi và lưu trữ lịch sử thay đổi của mã nguồn trong một dự án. Nó cho phép các nhà phát triển làm việc cùng nhau trên cùng một dự án, theo dõi các phiên bản mã nguồn, giải quyết xung đột và quản lý mã nguồn một cách hiệu quả."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Ví dụ, khi các nhà phát triển làm việc trên một dự án phát triển phần mềm sử dụng Git SCM, họ có thể:"
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Tạo các phiên bản (commit) của mã nguồn và ghi chú mô tả cho từng phiên bản để hiểu rõ các thay đổi đã thực hiện."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Theo dõi và quản lý các nhánh làm việc khác nhau của dự án để phát triển tính năng hoặc sửa lỗi."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Hợp nhất (merge) các thay đổi từ nhiều nguồn khác nhau vào phiên bản chính của dự án."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Giải quyết xung đột xảy ra khi nhiều người cùng chỉnh sửa cùng một phần của mã nguồn."
      }
    ]
  },
  {
    "type": "p",
    "listStyleType": "",
    "indent": 0,
    "children": [
      {
        "text": "Theo dõi sự phát triển của dự án qua thời gian và tạo phiên bản ổn định để triển khai."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Git, với các lệnh mạnh mẽ và linh hoạt của mình, đã trở thành một công cụ không thể thiếu trong quy trình phát triển phần mềm hiện đại. Từ việc khởi tạo một kho lưu trữ mới, commit thay đổi, đến việc kiểm soát các phiên bản và hợp nhất nhánh, Git giúp chúng ta quản lý dự án một cách hiệu quả và minh bạch. "
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Hiểu rõ và sử dụng thành thạo các lệnh Git không chỉ giúp bạn làm việc một cách linh hoạt hơn, mà còn tạo điều kiện cho sự hợp tác và phát triển chung. Hãy tiếp tục khám phá và tận dụng sức mạnh của Git để nâng cao chất lượng sản phẩm của bạn."
      }
    ]
  },
  {
    "type": "p",
    "children": [
      { "text": "Bạn hãy thường xuyên theo dõi " },
      { "text": "các bài viết hay về Lập Trình & Dữ Liệu trên 200Lab Blog" },
      { "text": " nhé. Cũng đừng bỏ qua " },
      {
        "type": "a",
        "url": "https://200lab.io/courses/?utm_source=blog&utm_medium=cta&utm_campaign=content",
        "target": "_blank",
        "children": [
          { "text": "những khoá học Lập Trình tuyệt vời trên 200Lab" }
        ]
      },
      { "text": " nè." }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "type": "a",
        "url": "https://200lab.io/khoa-hoc/?utm_source=blog&utm_medium=content&utm_campaign=ao_productpush",
        "target": "_blank",
        "children": [{ "text": "Xem Khoá Học Của 200Lab" }]
      }
    ]
  },
  {
    "type": "p",
    "children": [
      {
        "text": "Một vài bài viết mới bạn sẽ thích:",
        "italic": true,
        "bold": true
      }
    ]
  },
  {
    "type": "blockquote",
    "children": [
      { "text": "Git là gì? Tổng quan về Git cơ bản cho lập trình viên" }
    ]
  },
  {
    "type": "blockquote",
    "children": [
      { "text": "Git là gì? Tổng quan về Git cơ bản cho lập trình viên" }
    ]
  },
  {
    "type": "blockquote",
    "children": [
      { "text": "Bitbucket là gì? GitHub là gì? So sánh Bitbucket và GitHub" }
    ]
  },
  {
    "type": "blockquote",
    "children": [
      { "text": "Cách giải quyết lỗi password authentication Github" }
    ]
  },
  {
    "type": "blockquote",
    "children": [{ "text": "Mobile & Web UI Kit For Flutter (100+ screens)" }]
  },
  { "type": "p", "children": [{ "text": "" }], "id": "syhei" }
];
