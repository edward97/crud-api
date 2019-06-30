/*
 Navicat Premium Data Transfer

 Source Server         : Local - MariaDB
 Source Server Type    : MariaDB
 Source Server Version : 100314
 Source Host           : localhost:3306
 Source Schema         : db_testing

 Target Server Type    : MariaDB
 Target Server Version : 100314
 File Encoding         : 65001

 Date: 30/06/2019 15:51:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `salary` decimal(10, 2) NOT NULL,
  `description` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT current_timestamp,
  `updated_at` timestamp(0) NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (2, 'kimhud@mail.com', 'kimhu', 255123.00, NULL, 'kimhu', '2019-06-30 15:15:56', '2019-06-30 15:49:26');
INSERT INTO `tbl_user` VALUES (4, 'edward@mail.com', 'edward', 1000000.00, 'null', 'edward', '2019-06-30 15:17:10', '2019-06-30 15:17:10');
INSERT INTO `tbl_user` VALUES (5, 'edward@mail.com', 'edward', 1000000.00, 'null', 'edward', '2019-06-30 15:17:33', '2019-06-30 15:17:33');
INSERT INTO `tbl_user` VALUES (6, 'edward@mail.com', 'edward', 1000000.00, 'null', 'edward', '2019-06-30 15:17:40', '2019-06-30 15:17:40');
INSERT INTO `tbl_user` VALUES (7, 'edward@mail.com', 'edward', 1000000.00, 'null', 'edward', '2019-06-30 15:22:26', '2019-06-30 15:22:26');

SET FOREIGN_KEY_CHECKS = 1;
