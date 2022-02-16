/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `CinemaConnectMovies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cinemaId` int DEFAULT NULL,
  `movieId` int DEFAULT NULL,
  `selfGranted` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cinemaId` (`cinemaId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `CinemaConnectMovies_ibfk_33` FOREIGN KEY (`cinemaId`) REFERENCES `cinemas` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `CinemaConnectMovies_ibfk_34` FOREIGN KEY (`movieId`) REFERENCES `films` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

CREATE TABLE `cinemas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cineplex_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cineplex_id` (`cineplex_id`),
  CONSTRAINT `cinemas_ibfk_1` FOREIGN KEY (`cineplex_id`) REFERENCES `cineplexes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

CREATE TABLE `cineplexes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

CREATE TABLE `films` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `trailer` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` text COLLATE utf8_bin,
  `isHot` tinyint(1) DEFAULT '0',
  `isNowShowing` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

CREATE TABLE `ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `showtimes` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `seats` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `movie_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `room` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `filmsId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `filmsId` (`filmsId`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`filmsId`) REFERENCES `films` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `role` varchar(255) COLLATE utf8_bin DEFAULT 'User',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `avatar` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  UNIQUE KEY `id` (`id`) USING BTREE,
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`),
  UNIQUE KEY `email_49` (`email`),
  UNIQUE KEY `email_50` (`email`),
  UNIQUE KEY `email_51` (`email`),
  UNIQUE KEY `email_52` (`email`),
  UNIQUE KEY `email_53` (`email`),
  UNIQUE KEY `email_54` (`email`),
  UNIQUE KEY `email_55` (`email`),
  UNIQUE KEY `email_56` (`email`),
  UNIQUE KEY `email_57` (`email`),
  UNIQUE KEY `email_58` (`email`),
  UNIQUE KEY `email_59` (`email`),
  UNIQUE KEY `email_60` (`email`),
  UNIQUE KEY `email_61` (`email`),
  UNIQUE KEY `email_62` (`email`),
  UNIQUE KEY `email_63` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;



INSERT INTO `cinemas` (`id`, `name`, `address`, `img`, `cineplex_id`, `created_at`, `updated_at`) VALUES
(1, 'CGV Sư Vạn Hạnh', 'Sư Vạn Hạnh', NULL, 1, NULL, NULL);
INSERT INTO `cinemas` (`id`, `name`, `address`, `img`, `cineplex_id`, `created_at`, `updated_at`) VALUES
(2, 'BHD Phạm Hùng', 'Phạm Hùng', NULL, 2, NULL, '2022-02-15 12:08:46');


INSERT INTO `cineplexes` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'CGV', 'https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg', NULL, NULL);
INSERT INTO `cineplexes` (`id`, `name`, `logo`, `created_at`, `updated_at`) VALUES
(2, 'Galaxy Cinema', 'https://img.jamja.vn/jamja-prod/gcs_full_5bb2cfe976ec572096f79378-2018-10-02-015450.jpeg?cache=1', NULL, '2022-02-15 13:05:47');


INSERT INTO `films` (`id`, `name`, `trailer`, `description`, `isHot`, `isNowShowing`, `createdAt`, `updatedAt`) VALUES
(1, 'Biệt đội báo thù', 'https://www.youtube.com/watch?v=eOrNdBpGMv8', NULL, 0, 0, '2022-02-16 15:16:44', '2022-02-16 15:16:44');


INSERT INTO `ticket` (`id`, `showtimes`, `seats`, `movie_name`, `room`, `filmsId`, `createdAt`, `updatedAt`) VALUES
(4, '17/2/2022', 'A01', 'Biệt đội báo thù', '01', 1, '2022-02-16 15:18:25', '2022-02-16 15:18:25');


INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`, `avatar`) VALUES
(11, 'Quan', 'Quoc', 'quocquan1105@gmail.com', '$2b$10$OBBpP14jvLFphQ9lAXBtdertl7smiwsuZGd7LG8F/ZxEIaM0ds6aa', 'User', '2021-12-26 19:08:26', '2022-01-02 17:04:11', NULL);
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`, `avatar`) VALUES
(13, NULL, NULL, 'admin@gmail.com', '$2b$10$SkbH8vL.SQvSAdjHNMJyT.KByPjeFPz6Q.4Y9r35hXf3KxbQnHxqO', 'Admin', '2021-12-26 22:11:58', '2021-12-26 22:11:58', NULL);
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`, `avatar`) VALUES
(14, NULL, NULL, 'testing@gmail.com', '$2b$10$.gnEslLnceiCeIkc2Eo9V.5oPVXKFIpEg2IAqeMqZG.ZW73p5ydpq', 'Admin', '2022-02-15 10:23:43', '2022-02-15 10:23:43', NULL);
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`, `avatar`) VALUES
(15, NULL, NULL, 'user@gmail.com', '$2b$10$wqoMzVsVrwf9dKG3VvnQEO9kzeaOJBX2zn1W/O6cUq1lCu9auNG52', 'User', '2022-02-16 14:47:44', '2022-02-16 14:47:44', NULL);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;