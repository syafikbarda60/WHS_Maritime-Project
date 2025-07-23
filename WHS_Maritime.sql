-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for whs_maritime
CREATE DATABASE IF NOT EXISTS `whs_maritime` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `whs_maritime`;

-- Dumping structure for table whs_maritime.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.cache: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.cache_locks
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.cache_locks: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.jobs: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.job_batches
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.job_batches: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.migrations: ~6 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0001_01_01_000000_create_users_table', 1),
	(2, '0001_01_01_000001_create_cache_table', 1),
	(3, '0001_01_01_000002_create_jobs_table', 1),
	(4, '2025_07_10_062219_create_personal_access_tokens_table', 1),
	(5, '2025_07_13_071429_create_services_table', 1),
	(6, '2025_07_14_023534_add_timestamps_to_services_table', 2);

-- Dumping structure for table whs_maritime.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.password_reset_tokens: ~0 rows (approximately)

-- Dumping structure for table whs_maritime.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.personal_access_tokens: ~9 rows (approximately)
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 1, 'token', '9fc4a1347846e377c9500cdd64f25f1f512b01e4b6e10829e738320cf12bb601', '["*"]', NULL, NULL, '2025-07-13 03:12:19', '2025-07-13 03:12:19'),
	(2, 'App\\Models\\User', 1, 'token', '2c512c93fcb96cbef56af131e41f0cf09bc78690d081edfd9b121f887caedf4f', '["*"]', '2025-07-13 20:00:09', NULL, '2025-07-13 19:11:46', '2025-07-13 20:00:09'),
	(3, 'App\\Models\\User', 1, 'token', 'fec4826ccefd8d39966a77b5b670e7da5320aa9c7511f556655ee91917415022', '["*"]', '2025-07-14 01:38:10', NULL, '2025-07-13 20:00:28', '2025-07-14 01:38:10'),
	(4, 'App\\Models\\User', 1, 'token', '1ff8f8df4aed58ea6010c87453a130701750f090335b55c9ad691fa2a8d2e131', '["*"]', '2025-07-14 20:58:40', NULL, '2025-07-14 19:53:57', '2025-07-14 20:58:40'),
	(5, 'App\\Models\\User', 1, 'token', '1064c0d5e457e2bf72fa20a2aff4843d1baba721b27ac592bfc2095b768b944e', '["*"]', NULL, NULL, '2025-07-14 23:29:18', '2025-07-14 23:29:18'),
	(6, 'App\\Models\\User', 1, 'token', '98eb59282cf7531e24ee6d556d2ecd0b1f492967916a2f865c55643f46091d55', '["*"]', NULL, NULL, '2025-07-15 02:44:01', '2025-07-15 02:44:01'),
	(7, 'App\\Models\\User', 1, 'token', '2f5a6f908eb06c3b6b17912932f2c4745a8d7ade5e2eb6a9c362135c88b8855a', '["*"]', NULL, NULL, '2025-07-15 03:37:44', '2025-07-15 03:37:44'),
	(8, 'App\\Models\\User', 1, 'token', '906a0d440ec3cf5f691539d9ca34f5df26405a1d57b8c4e3aa44c496e2a55975', '["*"]', NULL, NULL, '2025-07-15 20:56:15', '2025-07-15 20:56:15'),
	(9, 'App\\Models\\User', 1, 'token', '3c5173db9566538625a97de1821224718de3bc0323910f4010804353d7ca445b', '["*"]', NULL, NULL, '2025-07-16 23:47:00', '2025-07-16 23:47:00'),
	(10, 'App\\Models\\User', 1, 'token', '56e65a1ce65f10c2b5dfc00b4887a0d4927723515ad8ac6839a2e9aa1b6a38e9', '["*"]', '2025-07-17 20:09:09', NULL, '2025-07-17 19:44:34', '2025-07-17 20:09:09'),
	(11, 'App\\Models\\User', 1, 'token', '43d095d8354ebd5721e4138bfc95c8a6e0e7c8281a36fc4989f25dd4d0f3d0ab', '["*"]', NULL, NULL, '2025-07-17 20:43:27', '2025-07-17 20:43:27'),
	(12, 'App\\Models\\User', 1, 'token', 'e3cea7558a1b2a8b10d737c381076fb28d417e72ae9f9468c2193da209cc3d03', '["*"]', NULL, NULL, '2025-07-21 00:32:26', '2025-07-21 00:32:26'),
	(13, 'App\\Models\\User', 1, 'token', '799a60f0cdb01c733c8e74776f93fe789af40c0c678ede517b738c4951b0c3e1', '["*"]', NULL, NULL, '2025-07-21 00:45:03', '2025-07-21 00:45:03'),
	(14, 'App\\Models\\User', 1, 'token', '15f8f2f467c3db1382aa6295b5aadbbe74d318656325429a0a55ffe67f4cf42d', '["*"]', NULL, NULL, '2025-07-22 20:28:54', '2025-07-22 20:28:54');

-- Dumping structure for table whs_maritime.services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_desc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stats` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.services: ~2 rows (approximately)
INSERT INTO `services` (`id`, `title`, `slug`, `short_desc`, `content`, `img`, `stats`, `created_at`, `updated_at`) VALUES
	(7, 'Seabound Lands a Novel Carbon-Capture Partnership With a Cement Plant', 'Seabound Lands a Novel Carbon-Capture Partnership With a Cement Plant', 'Novel Carbon-Capture Partnership With a Cement Plant', 'Working with German owner Hartmann Group, shipmanager InterMaritime and construction materials giant Heidelberg, the UK-based startup Seabound has launched a unique onboard carbon capture venture that starts with Bunker C and ends up in cement. \r\n\r\nSeabound\'s carbon capture system captures up to 95% of CO? (variable, depending upon the customer\'s needs) and 98% of sulfur emissions from ship exhaust. The sulfur-removal capability means that it is compatible with HFO fuel, a cost savings over VLSFO. Its process uses slaked lime - calcium hydroxide, one of the world\'s most common chemical ingredients - to absorb CO? and convert it into limestone (calcium carbonate). The resulting product is stored on board the ship, then offloaded in port. \r\n\r\nSince limestone is the main feedstock for cement plants, Seabound\'s technology lines up well with nascent efforts to decarbonize the concrete manufacturing sector. Heidelberg Materials\' Brevik plant is one-of-a-kind in this segment: it is the first full-size facility designed to produce carbon-captured cement, the key ingredient in net-zero concrete.\r\n\r\nUnder the new partnership with Hartmann Group, InterMaritime Group and Heidelberg Materials Northern Europe, Seabound will install its system aboard the cement carrier UBC Cork, which serves the Brevik plant. The captured carbon - in limestone form - will be offloaded when the ship calls at Brevik and will be run through the cement plant. This means that the carbon in UBC Cork\'s fuel will be captured twice - once on the ship, when it is turned to limestone, and once again when that limestone is turned to cement. Along with the Brevik cement plant\'s other captured CO2, it will be injected into a subsea reservoir run by the Shell/Equinor/TotalEnergies Northern Lights project, due to start operations later this year. \r\n\r\n"We\'re proud to partner with industry leaders like Heidelberg Materials and Hartmann to deliver scalable carbon capture solutions," said Alisha Fredriksson, CEO and Co-founder of Seabound. "We\'re especially excited to be advancing this work in Brevik, a strategic location that\'s rapidly establishing itself as a global hub for CCS."', 'services/8sFa4uB8Mv7wTYnD7dWONhq8kvSOlJvdrBCBNVQT.jpg', 0, '2025-07-14 20:32:48', '2025-07-14 20:32:48'),
	(10, 'Transhipment port competitiveness assessment', 'transhipment-port-competitiveness-assessment', 'the importance of port location', 'In recent decades, ports and maritime transport have become key pillars of the development of world economies. The main reason for this is that the majority of all cargo delivered in the world is transported by sea, with maritime transport accounting for 75% of the modal share in 2020 (UNCTAD 2021). Needless to say, industries are strongly dependent on shipping, with ports consequently playing a central role in global supply chains. Thus, ports are considered essential nodes that facilitate companies’ access to international markets and countries’ integration into international transport networks (Mohamed-Chérif and Ducruet 2016; Fugazza and Hoffmann 2017).\r\n\r\nWithin these maritime transport networks, the performance of transhipment container ports deserves special attention. The transhipment operation refers to the shipment of containers to an intermediate port before they are taken to the final market destination; it plays a critical role in the network due to infrastructure limitations in minor ports and shipping lines calling at a limited number of transhipment terminals (Kavirathna et al. 2018). In this regard, a hub port acts as an intermodal platform to support regional supply chains in smaller markets that may not be directly served by large vessels. This kind of port is strategically located close to the main shipping routes, where the largest container ships are deployed. Along with the employment of ever-larger deep-sea vessels, the number of direct shipping connections has been reduced in recent years, and they have been replaced by transhipment services (Fugazza and Hoffmann 2017).\r\n\r\nTherefore, not surprisingly, countries around the world have been making substantial investments in port infrastructure in an effort to become a hub for the region. For this reason, the present research aims to measure port competitiveness by constructing a composite index, which is applied to transhipment container ports. So far, the development of composite indexes based on the current performance of ports has not yet been widely explored, so there is a lack of papers that seek to aggregate several factors into a single measure to provide a global evaluation of port competitiveness (Kim 2016; Yang and Chen 2016; Kammoun and Abdennadher 2022). In fact, the number of papers is especially scarce for the study of transhipment ports (Munim et al. 2022; Wang and Yeo 2019). In our paper, an in-depth analysis of transhipment ports is undertaken to identify the set of variables and the corresponding data to measure their current performance in terms of efficiency, connectivity, infrastructure and location.\r\n\r\nMoreover, the Transhipment Port Competitiveness Index (TPCI) proposed is applied to The Mediterranean Sea, which is considered an interesting case to study because of the fierce competition between the large number of pure transhipment and mixed ports that meet the requirements to become a hub. In this regard, large investment projects have been carried out, aimed at developing new container terminals or expanding the capacity of the existing ones, such as Tanger and Port Said. These investment projects have resulted in even stronger competition between ports, especially in their efforts to become a hub. The availability of more alternatives for shipping lines and their alliances when selecting a port have increased the pressure on port authorities to enhance their competitiveness.\r\n\r\nTo do so, we use the Benefit-of-the-Doubt (BoD) approach to Data Envelopment Analysis (DEA) and apply a Common Set of Weights (CSW) for the objective selection of the weighting scheme, which is considered a critical issue in the construction of composite indexes.\r\n\r\nOur results have important implications for policy-makers and port managers. The TPCI developed here can be used as a benchmarking tool which provides useful information to port managers, supporting their decision-making on the implementation of new measures to improve their relative competitiveness. Moreover, the TPCI provides ports with a tool to self-assess the degree of implementation of measures to enhance their competitiveness score.\r\n\r\nThus, the present research makes four main contributions: first, the development of a port competitiveness index, which includes some novel variables specifically addressing key determinants of port competitiveness for transshipment traffic. Thus, the index includes a proxy for location with respect to the main navigation routes, which, as far as we know, had not been considered until now, despite its relevance in network configuration. The indicators used to approximate port productivity and infrastructure are equally novel, as they explicitly capture critical operational aspects of the interoceanic main routes, such as ship turnaround time and the capacity to accommodate the largest vessels used on these routes; second, the analysis of transhipment port competitiveness based on the current performance of ports; third, the application of the index to analyse the competitiveness of the major transhipment container ports located in the Mediterranean Sea, which remains an underexplored area despite the intense container activity and, fourth, the first paper that applied the BoD-DEA-CSW methodological approach to develop a port competitiveness index.\r\n\r\nThe rest of the paper is structured as follows: Sect. 2 provides the literature review; Sect. 3 details the methodology used for the weighting scheme and describes the data used and the port competitiveness variables under study; Sect. 4 reports the competitiveness scores of the major Mediterranean transhipment container ports; Sect. 5 presents the main conclusions of the study.', 'services/LTZN0cmFngZulHPwBDXjrIpXxEmyBRkz3iwsyze7.jpg', 0, '2025-07-17 19:46:44', '2025-07-17 19:46:44');

-- Dumping structure for table whs_maritime.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.sessions: ~2 rows (approximately)
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('38ry6BjlI2UcGkiV9eCvcbkcg5ZRQ94zFpwqvkcM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS203Znl6dEk2QnZZSWYxVktkVkhveE9iR0tpbktDaTJJRXNiTnZTQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1752554375),
	('qUkcDiujJkUrFGOi4PCkaIkaqiiOx5wp7j3ZAen6', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaE55Vjl5ZlJEaHRUdmt1WXMyMGdSa2RHVEtiazIzUG5Sd0tabUg5dyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1752548268);

-- Dumping structure for table whs_maritime.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table whs_maritime.users: ~0 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Admin', 'admin@example.com', '2025-07-13 02:03:23', '$2y$12$aaflhGe3UIQDExir2Xv42etfzvQPrZ3JX6D0etN2uopNdDDg/yHmu', 'JAejdx4TMz', '2025-07-13 02:03:23', '2025-07-13 02:03:23');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
