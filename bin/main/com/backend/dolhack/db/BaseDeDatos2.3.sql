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
/*!40000 ALTER TABLE `clase` ENABLE KEYS */;
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
  UNIQUE KEY `correo_UNIQUE` (`correo`),
  KEY `fk_correo_usuario_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_correo_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `correo`
--

LOCK TABLES `correo` WRITE;
/*!40000 ALTER TABLE `correo` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
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
  `idopcion` int(11) NOT NULL AUTO_INCREMENT,
  `opcion` varchar(1) NOT NULL,
  `respuesta` varchar(100) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `pregunta_idpregunta` varchar(30) NOT NULL,
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
  `idpregunta` varchar(30) NOT NULL,
  `pregunta` text NOT NULL,
  `puntos` float NOT NULL,
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
  `publicado` BOOLEAN DEFAULT FALSE,
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
  `pregunta_idpregunta` varchar(30) NOT NULL,
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
DROP TABLE IF EXISTS `notificacion`;

CREATE TABLE `notificacion`(
  `idnotificacion` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_notificacion` varchar(150) NOT NULL,
  `texto_notificacion` varchar(250) NOT NULL,
  `usuario_idusuario` varchar(30) NOT NULL,
  PRIMARY KEY (`idnotificacion`),
  KEY `fk_notificacion_usuario1_idx` (`usuario_idusuario`),
  CONSTRAINT `fk_notificacion_usuario1` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `notificacion` WRITE;

UNLOCK TABLES;

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
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

DROP TABLE IF EXISTS `estado_clase`;

CREATE TABLE `estado_clase`(
  `idestado` int(11) NOT NULL AUTO_INCREMENT,
  `estado_clase` BOOLEAN DEFAULT TRUE,
  `estado_calificacion` BOOLEAN DEFAULT TRUE,
  `clase_idclase` varchar(30) NOT NULL,
  PRIMARY KEY (`idestado`),
  KEY `fk_estado_clase_clase1_idx` (`clase_idclase`),
  CONSTRAINT `fk_estado_clase_clase1` FOREIGN KEY (`clase_idclase`) REFERENCES `clase` (`idclase`) ON DELETE NO ACTION ON UPDATE NO ACTION
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

LOCK TABLES `estado_clase` WRITE;

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-15 18:42:42
