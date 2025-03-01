# Shoe Store Backend

Backend API cho ứng dụng quản lý cửa hàng giày, được xây dựng bằng NestJS và PostgreSQL.

## Công nghệ sử dụng

- NestJS: Framework Node.js phát triển ứng dụng Server-side
- TypeORM: ORM (Object-Relational Mapping) cho cơ sở dữ liệu
- PostgreSQL: Hệ quản trị cơ sở dữ liệu quan hệ
- TypeScript: Ngôn ngữ lập trình mở rộng của JavaScript

## Cài đặt

1. Clone dự án và cài đặt dependencies:

```bash
# Clone dự án
git clone <url_repository>

# Cài đặt dependencies
cd shoe-store-backend
npm install
```

- Note: Các dependences:
```bash
npm install @nestjs/typeorm typeorm pg class-validator class-transformer
```

2. Cấu hình cơ sở dữ liệu:

- Tạo database PostgreSQL:

```bash
createdb shoestoredb
```

- Cấu hình kết nối database trong file `src/app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'your_password', // Thay đổi mật khẩu của bạn
  database: 'shoestoredb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Chỉ sử dụng trong quá trình phát triển
}),
```

3. Chạy ứng dụng:

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

Ứng dụng sẽ chạy tại: http://localhost:3001

## Các API Endpoint

### Shoes API

| Method | Endpoint        | Mô tả                                    |
|--------|----------------|------------------------------------------|
| GET    | /shoes         | Lấy danh sách tất cả giày                |
| GET    | /shoes/:id     | Lấy thông tin chi tiết giày theo ID      |
| POST   | /shoes         | Tạo mới giày                             |
| PATCH  | /shoes/:id     | Cập nhật thông tin giày theo ID          |
| DELETE | /shoes/:id     | Xóa giày theo ID                         |

## Tạo dữ liệu mẫu

Sử dụng lệnh SQL sau để tạo dữ liệu mẫu:

```sql
INSERT INTO shoe (name, brand, price, stock, "imageUrl", description, "isAvailable", "createdAt")
VALUES
    ('Air Max 270', 'Nike', 129.99, 25, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoes-V4DfZQ.png', 'Giày Nike Air Max 270 với đệm khí cao cấp mang lại sự thoải mái cả ngày.', true, CURRENT_TIMESTAMP),
    
    ('Ultraboost 22', 'Adidas', 179.99, 18, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg', 'Giày chạy bộ Adidas Ultraboost 22 với công nghệ Boost hoàn trả năng lượng.', true, CURRENT_TIMESTAMP),
    
    ('Old Skool', 'Vans', 69.99, 32, 'https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$583x583$', 'Giày trượt ván Vans Old Skool cổ điển với thiết kế biểu tượng và độ bền cao.', true, CURRENT_TIMESTAMP),
    
    ('Chuck Taylor All Star', 'Converse', 59.99, 40, 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw7a3cbd1c/images/a_107/M9160_A_107X1.jpg', 'Giày Converse Chuck Taylor All Star cao cổ với thiết kế vượt thời gian.', true, CURRENT_TIMESTAMP),
    
    ('RS-X³', 'Puma', 109.99, 15, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/373308/06/sv01/fnd/PNA/fmt/png/RS-X%C2%B3-Puzzle-Men%27s-Sneakers', 'Giày thể thao Puma RS-X³ với thiết kế retro chunky và công nghệ Running System.', true, CURRENT_TIMESTAMP),
    
    ('Classic Leather', 'Reebok', 79.99, 22, 'https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e21e6ce4dc0f43c89688a8be0105954c_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg', 'Giày Reebok Classic Leather với chất liệu da cao cấp và thiết kế tối giản.', true, CURRENT_TIMESTAMP),
    
    ('574', 'New Balance', 89.99, 28, 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440', 'Giày New Balance 574 cổ điển với đệm ENCAP mang lại sự thoải mái và ổn định.', true, CURRENT_TIMESTAMP),
    
    ('Suede Classic', 'Puma', 64.99, 20, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/374915/01/sv01/fnd/IND/fmt/png/Suede-Classic-XXI-Men%27s-Sneakers', 'Giày Puma Suede Classic với chất liệu da lộn cao cấp và phong cách retro.', true, CURRENT_TIMESTAMP),
    
    ('Stan Smith', 'Adidas', 84.99, 35, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg', 'Giày tennis Adidas Stan Smith với thiết kế tối giản và chất liệu da cao cấp.', true, CURRENT_TIMESTAMP),
    
    ('Air Force 1', 'Nike', 99.99, 30, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-p7cQrS.png', 'Giày Nike Air Force 1 biểu tượng với thiết kế không bao giờ lỗi thời.', true, CURRENT_TIMESTAMP);
```

