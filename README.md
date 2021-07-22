# Weather_app - Ứng dụng xem thời tiết bằng cách chọn vị trí trên bản đồ

- Ứng dụng trên được deploy trên Glitch: https://weathers-map-application.glitch.me/

- Là kiểu ứng dụng Client-Server, sử dụng server [Nodejs](https://nodejs.org/en/)

- Ứng dụng được xây dựng bằng các bước cơ bản sau:
    1. Vẽ bản đồ bằng [Leaflet.js](https://leafletjs.com/)
    2. Lấy dữ liệu tọa độ được nhấp trên bản đồ sau đó gửi yêu cầu lấy thông tin thời tiết hiện tại bằng tọa độ cho [OpenWeatherMap Api](https://openweathermap.org/api)

- Hướng dẫn chạy ựng dụng trên máy tính cá nhân:
    1. Đảm bảo đã cài đặt Nodejs và git tool
    2. Clone repository
    3. Mở project bằng 1 code-editor bất kỳ
    4. Tại thư mục root đổi tên file `.env.test` -> `.env`, điền API_KEY từ OpenWeatherMap vào chỗ tương ứng(Chắc rằng bạn đã có tài khoản OpenWeatherMap)
    5. Mở terminal và chạy lệnh lệnh
    ```bash
        npm install
        npm start
    ```
- *Bạn nào có tham về thì mình rất cảm ơn nếu bạn để lại 1 sao cho repository này*

- *Gmail: minhthevo123@gmail.com*

- Demo ứng dụng:
![](public\img\Demo.PNG)
