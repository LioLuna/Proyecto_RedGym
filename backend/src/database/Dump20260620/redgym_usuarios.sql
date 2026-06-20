-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: redgym
-- ------------------------------------------------------
-- Server version	9.7.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '27b4b784-6b7c-11f1-b6c8-e070eacdbb79:1-54';

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `rol` enum('admin','usuario') DEFAULT 'usuario',
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `dni` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Lionel Fabrizzio','Luna','lioluna21@gmail.com','$2b$10$1w.BOdl5ewUkP3/wV92INei9/qHk7Dxu0djEZI2UA4.8IfvrfAbVy','3512618917','usuario','2026-06-19 21:27:43',NULL),(2,'Jorge','Ordoñez','admin@email.com','$2b$10$XzvLhuTSCicTh5i/nXAlhu3h.WMOqQ.e5acIb1rVP9qqGpWdrablK','3513333333','admin','2026-06-19 22:00:56',NULL),(3,'Juan','Perez','JuanP@email.com','$2b$10$i1CaIW4xh893cZUAtWV4YOGZP1T95y1DAwnHD.hLtbHAty/6guy/6','3516218916','usuario','2026-06-20 01:04:40',NULL),(4,'Pedro','Novillo','Pnovillo@gmail.com','$2b$10$JkxjMlNSqTOBZvacNwVDzOTyAuy172.knSTC65ugU3.pEKibnjheS','3516218914','usuario','2026-06-20 03:57:31',NULL),(5,'Maria','Viopi','Mviopi@gmail.com','$2b$10$o9DmYCjRS99u7Ht7YUSDZ.pOsFkqFpTcIhe0aP4HZ1zfTd7hn2.3u','3516218916','usuario','2026-06-20 04:03:23',NULL),(6,'nuevo','hola','hola@gmail.com','$2b$10$prUGlduf8qHkhjg7hIHnVulxiRQfJUEapCbCMx0rAJYRQd1Hdh0Oa','153165165','usuario','2026-06-20 04:33:58',NULL),(7,'Lionel Fabrizzio','Luna','lioluna03@gmail.com','$2b$10$YmIpYuPIJ15jzGc7ezhEDuLfAyb3Gs0GBppM01WED6HN88Y7tTaWa','3516218917','usuario','2026-06-20 16:21:14',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-20 16:57:55
