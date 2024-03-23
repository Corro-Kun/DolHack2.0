-- MariaDB dump 10.19-11.1.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: dolhack
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calificacion` (
  `idcalificacion` varchar(30) NOT NULL,
  `preguntas` int(11) NOT NULL,
  `respuestas` int(11) NOT NULL,
  `calificacion` float DEFAULT NULL,
  `quiz_idquiz` varchar(30) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  `clase_idclase` varchar(30) NOT NULL,
  PRIMARY KEY (`idcalificacion`),
  KEY `fk_calificacion_quiz1_idx` (`quiz_idquiz`),
  KEY `fk_calificacion_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_calificacion_clase1_idx` (`clase_idclase`),
  CONSTRAINT `fk_calificacion_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_calificacion_quiz1` FOREIGN KEY (`quiz_idquiz`) REFERENCES `quiz` (`idquiz`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_calificacion_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clase`
--

DROP TABLE IF EXISTS `clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clase` (
  `idclase` varchar(30) NOT NULL,
  `titulo` varchar(225) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  `lista_idlista` int(11) NOT NULL,
  `tipo_idtipo` int(11) NOT NULL,
  `nivel_idnivel` int(11) NOT NULL,
  `imagen` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`idclase`),
  UNIQUE KEY `idclase_UNIQUE` (`idclase`),
  KEY `fk_clase_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_clase_lista1_idx` (`lista_idlista`),
  KEY `fk_clase_tipo1_idx` (`tipo_idtipo`),
  KEY `fk_clase_nivel1_idx` (`nivel_idnivel`),
  CONSTRAINT `fk_clase_lista1` FOREIGN KEY (`lista_idlista`) REFERENCES `lista` (`idlista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clase_nivel1` FOREIGN KEY (`nivel_idnivel`) REFERENCES `nivel` (`idnivel`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clase_tipo1` FOREIGN KEY (`tipo_idtipo`) REFERENCES `tipo` (`idtipo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_clase_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clase`
--

LOCK TABLES `clase` WRITE;
/*!40000 ALTER TABLE `clase` DISABLE KEYS */;
INSERT INTO `clase` VALUES
('gmxdfImLu5CFM9WDzhNJczfhfWAGGw','Creación de vídeo juegos','¿Quieres crear tu primer juego multiplataforma?, que esperas!?, únete con nosotros donde aprenderemos a usar todas las herramientas para programar vídeo juegos.','2023-09-10','2023-09-30','366E6LY7vCGOIocOA00x9lHfdk9t2a',3,1,2,'https://res.cloudinary.com/dy58wbxo1/image/upload/v1694221003/DolHack2.0/clase/vrv7bhbixqo7fo5upeul.gif'),
('t9Z0z4NIpyFLDY4iGazoLdfadkyRFx','Inteligencia artificial','Interesado en la programación con redes neuronales o las IA, pues esta clase es para ti, aprenderás todo eso y mas.','2023-09-18','2023-09-30','LZ89iUzSgvIb26Z2ewLF3rONZiw8U8',4,1,3,'https://res.cloudinary.com/dy58wbxo1/image/upload/v1694223702/DolHack2.0/clase/baggkz1rzxpdn6xya6hy.gif');
/*!40000 ALTER TABLE `clase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentario` (
  `idcomentario` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` text NOT NULL,
  `clase_idclase` varchar(30) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idcomentario`),
  KEY `fk_comentario_clase1_idx` (`clase_idclase`),
  KEY `fk_comentario_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_comentario_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `correo`
--

DROP TABLE IF EXISTS `correo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `correo` (
  `idcorreo` varchar(30) NOT NULL,
  `correo` varchar(120) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idcorreo`),
  KEY `fk_correo_usuario_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_correo_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `correo`
--

LOCK TABLES `correo` WRITE;
/*!40000 ALTER TABLE `correo` DISABLE KEYS */;
INSERT INTO `correo` VALUES
('BahYnuKZy74fGv9W4bI2fp0XdcsLf6','test2@gmail.com','LZ89iUzSgvIb26Z2ewLF3rONZiw8U8'),
('gJWRX4M0RmDZYoBt8S7Ky23hbrVvlr','networpava@gmail.com ','366E6LY7vCGOIocOA00x9lHfdk9t2a'),
('Gq5p9zfBxp4BZCtmJHX1yYOzBTStFF','test6@gmail.com','yHp2SFqfKLsjmqDeG9PVzLq3YR7FKI'),
('hvfV6UihbPzb78hKGQVlTmFxWZBUjk','test@gmail.com','QEwl3AzVNWfqRQJwUiZl2Y2QCsuO8d'),
('IsUTItB5yVftMZXQiXy6Z4dcojWuEL','test@gmail.com','d9JGhqgOfnBJyCCSUUIL9RwyCdx3kz'),
('jbNyiABZrU4RljazGJIrd0WFL3p6kx','test9@gmail.com','oC7qIqTH7BgeSJNaDupzKfN2mX3SJa'),
('MVRbl38LRhyF6z8uNXY5MHlM1FvIYY','test5@gmail.com','ii3oLabTHLZsxJ95QlV9ZzAM87KrLm'),
('OIhef742C5wIwNyGIxdWNjG074SbJR','test4@gmail.com','DQ6zDpZwSKPZiqkzj6ZaD6jXjxxi4a'),
('xsQZV4gUWAkY6ptLetszxLCHmndl8X','test3@gmail.com','OcWvCeA85bHEuqIMfwCZwYHM4kSVgF'),
('zcopUmgScVQjDWiX2cPBX7PEtMrE7k','test7@gmail.com','eoXFjTuM3OlYsq1A1bQEFjWYtWQHDA');
/*!40000 ALTER TABLE `correo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista` (
  `idlista` int(11) NOT NULL AUTO_INCREMENT,
  `clase` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idlista`),
  UNIQUE KEY `idlista_UNIQUE` (`idlista`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
INSERT INTO `lista` VALUES
(1,'zqgYcYZMu4sOkno3LLTtqOpIK86euF'),
(2,'1oj2E1P7nSyg1XcLBJokip48SbfgBV'),
(3,'gmxdfImLu5CFM9WDzhNJczfhfWAGGw'),
(4,'t9Z0z4NIpyFLDY4iGazoLdfadkyRFx');
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_has_usuario`
--

DROP TABLE IF EXISTS `lista_has_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_has_usuario` (
  `lista_idlista` int(11) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`lista_idlista`,`usuario_idusuario`),
  KEY `fk_lista_has_usuario_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_lista_has_usuario_lista1_idx` (`lista_idlista`),
  CONSTRAINT `fk_lista_has_usuario_lista1` FOREIGN KEY (`lista_idlista`) REFERENCES `lista` (`idlista`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_lista_has_usuario_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_has_usuario`
--

LOCK TABLES `lista_has_usuario` WRITE;
/*!40000 ALTER TABLE `lista_has_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista_has_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nivel`
--

DROP TABLE IF EXISTS `nivel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nivel` (
  `idnivel` int(11) NOT NULL AUTO_INCREMENT,
  `nombrenivel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idnivel`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nivel`
--

LOCK TABLES `nivel` WRITE;
/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
INSERT INTO `nivel` VALUES
(1,'Principiante'),
(2,'Intermedio'),
(3,'Avanzado');
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opcion`
--

DROP TABLE IF EXISTS `opcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opcion` (
  `idopcion` int(11) NOT NULL,
  `opcion` varchar(1) NOT NULL,
  `respuesta` varchar(100) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `pregunta_idpregunta` int(11) NOT NULL,
  PRIMARY KEY (`idopcion`),
  KEY `fk_opcion_pregunta1_idx` (`pregunta_idpregunta`),
  CONSTRAINT `fk_opcion_pregunta1` FOREIGN KEY (`pregunta_idpregunta`) REFERENCES `pregunta` (`idpregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opcion`
--

LOCK TABLES `opcion` WRITE;
/*!40000 ALTER TABLE `opcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `opcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pregunta` (
  `idpregunta` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` text NOT NULL,
  `quiz_idquiz` varchar(30) NOT NULL,
  PRIMARY KEY (`idpregunta`),
  KEY `fk_pregunta_quiz1_idx` (`quiz_idquiz`),
  CONSTRAINT `fk_pregunta_quiz1` FOREIGN KEY (`quiz_idquiz`) REFERENCES `quiz` (`idquiz`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta`
--

LOCK TABLES `pregunta` WRITE;
/*!40000 ALTER TABLE `pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `idpublicacion` int(11) NOT NULL AUTO_INCREMENT,
  `texto` text NOT NULL,
  `imagen` varchar(225) DEFAULT NULL,
  `clase_idclase` varchar(30) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  KEY `fk_publicacion_clase1_idx` (`clase_idclase`),
  KEY `fk_publicacion_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_publicacion_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_publicacion_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `idquiz` varchar(30) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `clase_idclase` varchar(30) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idquiz`),
  KEY `fk_quiz_clase1_idx` (`clase_idclase`),
  KEY `fk_quiz_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_quiz_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_quiz_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuesta`
--

DROP TABLE IF EXISTS `respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuesta` (
  `idrespuesta` varchar(30) NOT NULL,
  `opcion` varchar(1) NOT NULL,
  `respuesta` varchar(100) DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `quiz_idquiz` varchar(30) NOT NULL,
  `pregunta_idpregunta` int(11) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  `clase_idclase` varchar(30) NOT NULL,
  PRIMARY KEY (`idrespuesta`),
  KEY `fk_respuesta_quiz1_idx` (`quiz_idquiz`),
  KEY `fk_respuesta_pregunta1_idx` (`pregunta_idpregunta`),
  KEY `fk_respuesta_usuario1_idx` (`usuario_idusuario`),
  KEY `fk_respuesta_clase1_idx` (`clase_idclase`),
  CONSTRAINT `fk_respuesta_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_respuesta_pregunta1` FOREIGN KEY (`pregunta_idpregunta`) REFERENCES `pregunta` (`idpregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_respuesta_quiz1` FOREIGN KEY (`quiz_idquiz`) REFERENCES `quiz` (`idquiz`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_respuesta_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuesta`
--

LOCK TABLES `respuesta` WRITE;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `idrol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES
(1,'profesor'),
(2,'estudiante');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefono`
--

DROP TABLE IF EXISTS `telefono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `telefono` (
  `idtelefono` varchar(30) NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idtelefono`),
  KEY `fk_telefono_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_telefono_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefono`
--

LOCK TABLES `telefono` WRITE;
/*!40000 ALTER TABLE `telefono` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `idtipo` int(11) NOT NULL AUTO_INCREMENT,
  `nombretipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES
(1,'Programación'),
(2,'Lenguas');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idusuario` varchar(30) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `contraseña` varchar(225) NOT NULL,
  `biografia` text DEFAULT NULL,
  `foto` varchar(225) DEFAULT NULL,
  `banner` varchar(225) DEFAULT NULL,
  `rol_idrol` int(11) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `idusuario_UNIQUE` (`idusuario`),
  KEY `fk_usuario_rol1_idx` (`rol_idrol`),
  CONSTRAINT `fk_usuario_rol1` FOREIGN KEY (`rol_idrol`) REFERENCES `rol` (`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES
('366E6LY7vCGOIocOA00x9lHfdk9t2a','Kevin','Pava','d33f357cb1a313f8be6588132bb504625b34a6cef9551162bcdb572acfa5f44e','Soy Kevin el Creador de esta plataforma epica.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694050196/DolHack2.0/perfil/ywo9ucuutxys0db6qabv.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694050238/DolHack2.0/banner/thu21cwemvf6e2zmprab.gif',1),
('d9JGhqgOfnBJyCCSUUIL9RwyCdx3kz','Patricia','Ramírez','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Test para creación de clases.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049970/DolHack2.0/perfil/wjrwbc0xdsdlfye1l0ir.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049994/DolHack2.0/banner/eovtcjegw4qmj60zblsl.gif',1),
('DQ6zDpZwSKPZiqkzj6ZaD6jXjxxi4a','Laura','González','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Soy test para organizar datos.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049037/DolHack2.0/perfil/j0p8rfhv8e3beazo2gfw.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049491/DolHack2.0/banner/pfqvpfzcy6xsoznp9cek.jpg',2),
('eoXFjTuM3OlYsq1A1bQEFjWYtWQHDA','Manuel','Torres','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','soy Test y fui creado para generar mas resultados.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049858/DolHack2.0/perfil/x4kfe1p2ctg0ptuzp5y3.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049894/DolHack2.0/banner/l2zvk9tpju3cvuivalkj.gif',2),
('ii3oLabTHLZsxJ95QlV9ZzAM87KrLm','Alejandro ','Martínez','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','test para subida de archivos','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049601/DolHack2.0/perfil/gbsgspqbmzmh8j9c9jt9.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049604/DolHack2.0/banner/pfohkjwexixyq6g2lnqd.gif',2),
('LZ89iUzSgvIb26Z2ewLF3rONZiw8U8','María','Rodríguez','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Soy el test 2 que comprueba la posición de los usuarios y el filter.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694045256/DolHack2.0/perfil/t8to4nqhd0n6iwveu2gt.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694045258/DolHack2.0/banner/fumke83ikxiqeczs047v.gif',1),
('oC7qIqTH7BgeSJNaDupzKfN2mX3SJa','Javier','Morales','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','soy test para el desarrollo de dolhack','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694050062/DolHack2.0/perfil/svxjrca7y0m0fojbvkk4.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694050089/DolHack2.0/banner/v3w2l28wq5r9xnnxfauy.gif',1),
('OcWvCeA85bHEuqIMfwCZwYHM4kSVgF','Carlos ','Sánchez','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','un test hecho para probar el filtre.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694047727/DolHack2.0/perfil/yd1c8xzvnv2fmtkollbw.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694048941/DolHack2.0/banner/kcmfljoarzsxqsvzwlkf.gif',1),
('QEwl3AzVNWfqRQJwUiZl2Y2QCsuO8d','Juan','Pérez','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Soy el primer test que se creo despues de formatiar la base de datos.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694043475/DolHack2.0/perfil/sva4npxtskrlhlgpnve8.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694043478/DolHack2.0/banner/t2kdpn4ynxfram0uxeew.gif',1),
('yHp2SFqfKLsjmqDeG9PVzLq3YR7FKI','Andrea','López','03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4','Test para aumentar la cantidad de usuarios.','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049713/DolHack2.0/perfil/uy8ga8bblupztlca2v9h.gif','https://res.cloudinary.com/dy58wbxo1/image/upload/v1694049756/DolHack2.0/banner/avc8fje5kfk9qsnu3ihg.jpg',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-08 20:44:16
