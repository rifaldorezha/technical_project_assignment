-- Membuat Database 
create database reshop;

-- Memakai Database 
use reshop;

-- Membuat Table
create table pelanggan (
	id int primary key not null auto_increment,
    nama varchar(25),
    alamat varchar(30),
    no_hp varchar(20),
    jenis_kelamin varchar(10)
);

create table kategori(
	id int primary key not null auto_increment,
    nama_kategori varchar(25)
);

create table barang(
	id int primary key not null auto_increment,
    nama_barang varchar(23),
    harga_barang int,
    stok_barang int,
    id_kategori int,
    foreign key (id_kategori) references kategori(id)
);


create table transaksi(
	id int primary key not null auto_increment,
    tanggal_transaksi date,
    jumlah_pembelian int,
    id_pelanggan int,
    id_barang int,
    foreign key (id_pelanggan) references pelanggan(id),
    foreign key (id_barang) references barang(id)
);

-- Mengisi Data dalam table 
insert into pelanggan (nama, alamat, no_hp, jenis_kelamin) values
("Rifaldo", "Madiun", "085747072452", "Laki-laki"),
("Rezha", "Jiwan", "081937209453", "Laki-laki"),
("Saputra", "Bojonegoro", "087865356788", "Laki-Laki"),
("Weldan", "Sarangan", "083425094327", "Laki-Laki"),
("Tata", "Solo", "086372946529", "Perempuan"),
("Putri", "Yogya", "082845967847", "Perempuan"),
("Bagas", "Surabaya", "087031293232", "Laki-laki"),
("Kia", "Kediri", "082445694320", "Perempuan"),
("Mahendra", "Nganjuk", "085098743201", "Laki-laki"),
("Susilowati", "Sidoarjo", "081153234220", "Perempuan");

insert into kategori (nama_kategori) values
("Elektronik"),
("Makanan & Minuman"),
("Otomotif"),
("Pakaian Pria"),
("Pakain Wanita"),
("Handphone & Aksesoris"),
("Perlengkapan Rumah"),
("Kesehatan"),
("Buku & Alat Tulis"),
("Olahraga & Outdor");

insert into barang (nama_barang, harga_barang, stok_barang, id_kategori) values
("Hoddie Grey Dikies", 150000, 50, 4),
("Boxer Polos", 80000, 30, 4),
("Cardigan Hijau", 50000, 20, 5),
("Oppo Reno 7", 3000000, 20, 6),
("Mie Setan", 10000, 200, 2),
("TV TCL Android", 1500000, 10, 1),
("HardCase", 20000, 500, 8),
("Bolpoin Merah", 10000, 80, 9),
("Sepeda Lipat", 1200000, 40, 10),
("Goto Living", 100000, 50, 7),
("Tas Ransel", 30000, 250, 3),
("Rokok", 40000, 300, 5),
("Kaos Kaki", 15000, 100, 8),
("Sweater merah", 1500000, 60, 6),
("Pop Mie", 5000, 600, 2),
("Kulkas Pendingin", 500000, 40, 1),
("Paramex", 15000, 100, 7),
("Sepatu", 300000, 180, 3),
("Sandal Swallow", 260000, 90, 10),
("Kaos Polos", 25000, 280, 9);


insert into transaksi (tanggal_transaksi, jumlah_pembelian, id_pelanggan, id_barang) values
("2022-10-20", 1, 1, 1),
("2022-10-20", 1, 5, 3),
("2022-10-20", 1, 2, 4),
("2022-10-21", 1, 3, 2),
("2022-10-21", 1, 4, 2),
("2022-10-22", 1, 9, 9),
("2022-10-22", 1, 3, 6),
("2022-10-22", 1, 1, 2),
("2022-10-25", 1, 1, 19),
("2022-10-25", 1, 6, 12),
("2022-09-22", 1, 8, 12),
("2022-09-22", 1, 7, 18),
("2022-09-22", 1, 10, 10),
("2022-08-22", 1, 5, 17),
("2022-08-22", 1, 5, 13);

-- Kasus - Kasus

-- 1 pelanggan membeli 3 barang yang berbeda
select id_pelanggan, pelanggan.nama, id_barang, nama_barang, jumlah_pembelian
from transaksi inner join pelanggan
on transaksi.id_pelanggan = pelanggan.id
inner join barang
on transaksi.id_barang = barang.id
where id_pelanggan = 1;

-- Melihat 3 produk yang paling sering dibeli oleh pelanggan
select * from transaksi order by jumlah_pembelian desc limit 3 ;

-- Melihat Kategori barang yang paling banyak barangnya
select nama_barang, id_kategori, nama_kategori, max(stok_barang)
from barang inner join kategori
on barang.id_kategori = kategori.id;

-- Melihat pendapat rata-rata tiap bulan terakhir
select transaksi.tanggal_transaksi, AVG(transaksi.jumlah_pembelian*barang.harga_barang) as rata_rata_transaksi
FROM transaksi inner join barang
on transaksi.id = barang.id
GROUP BY YEAR(transaksi.tanggal_transaksi), MONTH(transaksi.tanggal_transaksi);

-- Mengubah isi tabel
update pelanggan set nama = "Lotto" where id = 9;

update barang set harga_barang = 50000 where id = 14;

update kategori set nama_kategori = "Perlengkapan Mahasiswa" where id = 7;

update transaksi set tanggal_transaksi = "2022-09-20" where id = 14;

-- Mengambil data dalam tabel 
select * from barang;
select * from kategori;
select * from pelanggan;
select * from transaksi;
select * from transaksi where tanggal_transaksi = "2022-10-21";
select * from pelanggan where id = 1;
select * from barang where id = 1;
select nama_barang, harga_barang from barang where id = 5;
select nama_kategori from kategori;

-- Hapus Data 
delete from transaksi where id = 1;
delete from barang where id = 2;
delete from pelanggan where id = 3;
delete from kategori where id = 4;

--  Hapus Tabel
drop table transaksi;
drop table barang;
drop table pelanggan;
drop table kategori;

-- Hapus Database
drop database reshop;  

 