# MERN Stack Fullstack Development Course

Bu repo, Fullstack geliştirme yolculuğunuzda size rehberlik edecek bir eğitim müfredatını içermektedir. MERN Stack (MongoDB, Express, React, Node.js) kullanarak tam işlevsel bir Fullstack uygulama geliştireceğiz. Proje boyunca, kullanıcı verilerini backend'de saklayarak frontend üzerinde gösterecek ve bu veriler üzerinde CRUD işlemleri gerçekleştireceğiz.

## İçindekiler

1. [Ders Planı](#ders-planı)
2. [Kurulum](#kurulum)
3. [Projeyi Çalıştırma](#projeyi-çalıştırma)
4. [Ders İçerikleri](#ders-içerikleri)
5. [Devamı](#devamı)

## Ders Planı

| Ders  | Konular                                                                                          |
|-------|--------------------------------------------------------------------------------------------------|
| 1     | Giriş, Kurulumlar, JavaScript Temelleri (ES6+)                                                   |
| 2     | Backend Giriş: HTTP, REST API, Express ile İlk Endpoint, MongoDB Bağlantısı, JSON Veri Yapısı    |
| 3     | Veritabanı CRUD İşlemleri, MongoDB'de İlişkisel ve İç İçe Verilerle Çalışma                      |
| 4     | Frontend Giriş: HTML, CSS, Flexbox, Grid, React Komponentleri ve Router                          |
| 5     | Kimlik Doğrulama ve Güvenlik: JWT, Access/Refresh Tokens                                         |
| 6     | Frontend-Backend Bağlantısı: API İstekleri, Axios, CORS, HTTP Only Cookies & Authentication      |
| 7     | DevOps: Docker, CI/CD Süreçleri                                                                  |

## Kurulum

Projeye başlamadan önce aşağıdaki araçları kurmanız gerekmektedir:

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/)

### Reposu Klonlama

```bash
git clone <repo-url>
cd mern-fullstack-course
```

### Backend Kurulumu

Backend klasörüne gidin ve gerekli paketleri yükleyin:

```bash
cd backend
npm install
```

### Frontend Kurulumu

Frontend klasörüne gidin ve gerekli paketleri yükleyin:

```bash
cd frontend
npm install
```

## Projeyi Çalıştırma

Backend ve frontend'i çalıştırmak için iki farklı terminal açarak şu komutları çalıştırın:

1. **Backend**:

   ```bash
   cd backend
   npm run dev
   ```

2. **Frontend**:

   ```bash
   cd frontend
   npm start
   ```

Her iki servis de çalıştığında, uygulamanın frontendine tarayıcı üzerinden [http://localhost:3000](http://localhost:3000) adresinden ulaşabilirsiniz.

---

## Ders İçerikleri

### Lecture 1 - Introduction

- **Konular**: Fullstack geliştirmeye giriş, MERN Stack tanıtımı.
- **Kurulumlar**: VSCode, Node.js, MongoDB, Postman.
- **JavaScript Temelleri**: let/const, arrow functions, destructuring, async/await, Promises.
- **Uygulama**: Basit bir Node.js sunucu kurulumu ve çalıştırma testi.

---

### Lecture 2 - Introduction to Backend Development

- **Konular**: İnternet nasıl çalışır? HTTP, REST API kavramları, JSON veri yapısı.
- **Express Giriş**: İlk API endpoint’i oluşturma.
- **MongoDB Giriş**: Veritabanı bağlantısı, CRUD işlemleri.

---

### Lecture 3 - Working with MongoDB

- **Konular**: MongoDB'de veritabanı tasarımı, ilişkisel ve iç içe verilerle çalışma.
- **Uygulama**: CRUD işlemleri ile kullanıcı verilerini yönetme.

---

### Lecture 4 - Introduction to Frontend Development

- **Konular**: HTML, CSS, Flexbox, Grid, React kompenent yapısı.
- **React Router**: Sayfa yönlendirme.
- **Uygulama**: Basit bir React uygulaması kurma.

---

### Lecture 5 - Authentication and Security

- **Konular**: JWT (JSON Web Token), Access ve Refresh Token kullanımı.
- **Middleware**: Kimlik doğrulama ve yetkilendirme.

---

### Lecture 6 - Connecting Frontend and Backend

- **Konular**: API istekleri, Axios, CORS ayarları.
- **HTTP Only Cookies**: Güvenli oturum yönetimi.

---

### Lecture 7 - DevOps

- **Konular**: Docker ile uygulama ortamı oluşturma.
- **CI/CD**: Sürekli entegrasyon ve dağıtım süreçleri.

---

## Devamı

Bu kurs boyunca öğrendiklerinizi pratiğe dökmek için projeler üzerinde çalışmayı unutmayın! Her dersin sonunda uygulama örnekleri ile öğrendiklerinizi pekiştirebilirsiniz. Başarılar dilerim!


### Reposu Klonlama

```bash
git clone <repo-url>
cd mern-fullstack-course
