-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2023 a las 19:16:41
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lemone`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_customuser`
--

CREATE TABLE `authentication_customuser` (
  `id` bigint(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `authentication_customuser`
--

INSERT INTO `authentication_customuser` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `is_staff`, `is_active`, `date_joined`, `email`) VALUES
(1, 'pbkdf2_sha256$600000$5IgrNI3ve8iynHhTBeGhIh$bFzhKApYkhkWm/4fIW7Wb3rNLfNZav77+yKFNnlOx2k=', '2023-06-02 15:46:26.544697', 1, 'admin', '', '', 1, 1, '2023-06-02 01:57:24.521195', 'admin@admin.com'),
(5, 'pbkdf2_sha256$600000$IRNfhFLTuHyAVoQ4UGoRqE$fHDug6VLHUnVU6zhRo/cV9kSgXbJGjmMO0rkOnY1Y+c=', NULL, 0, 'melisaapaz', '', '', 0, 1, '2023-06-02 15:49:17.648145', 'melisaapaz@gmai.com'),
(6, 'pbkdf2_sha256$600000$BIjvAKvLpeRVTxXhZrg1uL$+SzUxZxay/9tmeY4eaXYlDpembPWxTdPBZ2s4pYEnQw=', NULL, 0, 'mateoantunez', '', '', 0, 1, '2023-06-02 15:53:03.499632', 'mateoantunez0@gmail.com'),
(7, 'pbkdf2_sha256$600000$ibwDATKXCSNcNSElyRtZGa$yfMvY35RRCUyHeDSmV+oP5MiPR86rKtOF9tD3dWDoQk=', NULL, 0, 'marceloapaz', '', '', 0, 1, '2023-06-02 15:53:27.615189', 'marceysoleapazvidela@gmail.com'),
(8, 'pbkdf2_sha256$600000$kqKf1yuEKdagMbRaqnuyCO$2UBQIaD0mgr9gIvk0/I75eqxzwg+u7FKVRmFBC1Ngjs=', NULL, 0, 'salvadorberon', '', '', 0, 1, '2023-06-02 15:53:41.519142', 'salvadorberon@gmail.com'),
(9, 'pbkdf2_sha256$600000$o1mdhekvXbSCTy6A9Wonrg$njZKQ79P8r4sYZAEdd9MEMPAVqUxdQ/noGtrhAmHCFU=', NULL, 0, 'fabiolabenitez', '', '', 0, 1, '2023-06-02 15:54:05.230730', 'fabiolaben03@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_customuser_groups`
--

CREATE TABLE `authentication_customuser_groups` (
  `id` bigint(20) NOT NULL,
  `customuser_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authentication_customuser_user_permissions`
--

CREATE TABLE `authentication_customuser_user_permissions` (
  `id` bigint(20) NOT NULL,
  `customuser_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_customuser'),
(22, 'Can change user', 6, 'change_customuser'),
(23, 'Can delete user', 6, 'delete_customuser'),
(24, 'Can view user', 6, 'view_customuser'),
(25, 'Can add Password Reset Token', 7, 'add_resetpasswordtoken'),
(26, 'Can change Password Reset Token', 7, 'change_resetpasswordtoken'),
(27, 'Can delete Password Reset Token', 7, 'delete_resetpasswordtoken'),
(28, 'Can view Password Reset Token', 7, 'view_resetpasswordtoken'),
(29, 'Can add Producto', 8, 'add_producto'),
(30, 'Can change Producto', 8, 'change_producto'),
(31, 'Can delete Producto', 8, 'delete_producto'),
(32, 'Can view Producto', 8, 'view_producto'),
(33, 'Can add Categoria', 9, 'add_categoria'),
(34, 'Can change Categoria', 9, 'change_categoria'),
(35, 'Can delete Categoria', 9, 'delete_categoria'),
(36, 'Can view Categoria', 9, 'view_categoria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` longtext NOT NULL,
  `activoactualmente` tinyint(1) NOT NULL,
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`, `activoactualmente`, `estado`) VALUES
(1, 'Tintos', 'Categoría para vinos tintos', 1, 'A'),
(2, 'Rosados', 'Rosados', 1, 'A'),
(3, 'Blanco', 'Vinos blancos', 1, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-06-02 12:59:16.450440', '2', 'test@test.com', 3, '', 6, 1),
(2, '2023-06-02 13:53:19.344029', '1', 'Tintos', 1, '[{\"added\": {}}]', 9, 1),
(3, '2023-06-02 13:53:26.917344', '1', 'Vino tinto', 1, '[{\"added\": {}}]', 8, 1),
(4, '2023-06-02 14:14:03.398040', '2', 'Rosados', 1, '[{\"added\": {}}]', 9, 1),
(5, '2023-06-02 14:14:13.982513', '2', 'Vino Rosado', 1, '[{\"added\": {}}]', 8, 1),
(6, '2023-06-02 15:49:48.475140', '3', 'test@test.com', 3, '', 6, 1),
(7, '2023-06-02 15:49:53.245152', '4', 'test2@test.com', 3, '', 6, 1),
(8, '2023-06-02 15:55:07.333451', '2', 'Vino Rosado', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 8, 1),
(9, '2023-06-02 15:55:17.622114', '1', 'Vino tinto', 2, '[{\"changed\": {\"fields\": [\"Imagen\"]}}]', 8, 1),
(10, '2023-06-02 15:56:18.739701', '3', 'Vino blanco', 1, '[{\"added\": {}}]', 9, 1),
(11, '2023-06-02 15:57:13.159778', '3', 'Dancing Flame', 1, '[{\"added\": {}}]', 8, 1),
(12, '2023-06-02 15:57:24.658057', '3', 'Blanco', 2, '[{\"changed\": {\"fields\": [\"Nombre\"]}}]', 9, 1),
(13, '2023-06-02 15:58:08.162797', '2', '19 Crimes', 2, '[{\"changed\": {\"fields\": [\"Nombre\", \"Descripcion\", \"Imagen\"]}}]', 8, 1),
(14, '2023-06-02 15:58:28.789836', '1', 'Grand Vin de Bordeaux', 2, '[{\"changed\": {\"fields\": [\"Nombre\", \"Descripcion\", \"Imagen\"]}}]', 8, 1),
(15, '2023-06-02 16:43:36.754187', '4', 'Jacobs Creek', 1, '[{\"added\": {}}]', 8, 1),
(16, '2023-06-02 16:44:50.710937', '1', 'Grand Vin de Bordeaux', 2, '[{\"changed\": {\"fields\": [\"Usuariomodificacion\", \"Fehamodificacion\"]}}]', 8, 1),
(17, '2023-06-02 16:44:56.773213', '2', '19 Crimes', 2, '[{\"changed\": {\"fields\": [\"Usuariomodificacion\", \"Fehamodificacion\"]}}]', 8, 1),
(18, '2023-06-02 16:45:02.888928', '3', 'Dancing Flame', 2, '[{\"changed\": {\"fields\": [\"Usuariomodificacion\", \"Fehamodificacion\"]}}]', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(9, 'apilemone', 'categoria'),
(8, 'apilemone', 'producto'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(6, 'authentication', 'customuser'),
(4, 'contenttypes', 'contenttype'),
(7, 'django_rest_passwordreset', 'resetpasswordtoken'),
(5, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-06-02 01:55:45.949077'),
(2, 'contenttypes', '0002_remove_content_type_name', '2023-06-02 01:55:46.005754'),
(3, 'auth', '0001_initial', '2023-06-02 01:55:46.215119'),
(4, 'auth', '0002_alter_permission_name_max_length', '2023-06-02 01:55:46.263052'),
(5, 'auth', '0003_alter_user_email_max_length', '2023-06-02 01:55:46.269051'),
(6, 'auth', '0004_alter_user_username_opts', '2023-06-02 01:55:46.276053'),
(7, 'auth', '0005_alter_user_last_login_null', '2023-06-02 01:55:46.283085'),
(8, 'auth', '0006_require_contenttypes_0002', '2023-06-02 01:55:46.286056'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2023-06-02 01:55:46.299110'),
(10, 'auth', '0008_alter_user_username_max_length', '2023-06-02 01:55:46.310119'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2023-06-02 01:55:46.318115'),
(12, 'auth', '0010_alter_group_name_max_length', '2023-06-02 01:55:46.341430'),
(13, 'auth', '0011_update_proxy_permissions', '2023-06-02 01:55:46.354523'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2023-06-02 01:55:46.364748'),
(15, 'authentication', '0001_initial', '2023-06-02 01:55:46.656150'),
(16, 'admin', '0001_initial', '2023-06-02 01:55:46.774339'),
(17, 'admin', '0002_logentry_remove_auto_add', '2023-06-02 01:55:46.781300'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2023-06-02 01:55:46.790302'),
(19, 'sessions', '0001_initial', '2023-06-02 01:55:46.837422'),
(20, 'django_rest_passwordreset', '0001_initial', '2023-06-02 13:02:09.153913'),
(21, 'django_rest_passwordreset', '0002_pk_migration', '2023-06-02 13:02:10.670148'),
(22, 'django_rest_passwordreset', '0003_allow_blank_and_null_fields', '2023-06-02 13:02:10.716649'),
(23, 'apilemone', '0001_initial', '2023-06-02 13:50:53.325924'),
(24, 'apilemone', '0002_producto_fehamodificacion_producto_imagen_and_more', '2023-06-02 15:38:05.880508'),
(25, 'apilemone', '0003_alter_producto_fehamodificacion_and_more', '2023-06-02 16:38:45.751891'),
(26, 'apilemone', '0004_alter_producto_fehamodificacion_and_more', '2023-06-02 16:42:47.863249');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_rest_passwordreset_resetpasswordtoken`
--

CREATE TABLE `django_rest_passwordreset_resetpasswordtoken` (
  `created_at` datetime(6) NOT NULL,
  `key` varchar(64) NOT NULL,
  `ip_address` char(39) DEFAULT NULL,
  `user_agent` varchar(256) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('5h1lsksaj9y3rhwr8q3dtg3q5nvzhps7', '.eJxVjEEOwiAQRe_C2hCgwKBL9z0DmWFAqoYmpV0Z765NutDtf-_9l4i4rTVuPS9xYnERWpx-N8L0yG0HfMd2m2Wa27pMJHdFHrTLceb8vB7u30HFXr91SMbRGRJRKTwYDd4HULlYz4EggyZFFm1yKoOFoKx3zhlGpc3ABZJ4fwDnQTel:1q55Cb:xpOYTcRZSIM6A5dbN9RUCZbrNt3qsxdZSOhh14EuaQ8', '2023-06-16 13:52:25.566724'),
('9opb5z003guwcjzafszuok8w3a7lpp5e', '.eJxVjEEOwiAQRe_C2hCgwKBL9z0DmWFAqoYmpV0Z765NutDtf-_9l4i4rTVuPS9xYnERWpx-N8L0yG0HfMd2m2Wa27pMJHdFHrTLceb8vB7u30HFXr91SMbRGRJRKTwYDd4HULlYz4EggyZFFm1yKoOFoKx3zhlGpc3ABZJ4fwDnQTel:1q56yw:V4Sh4OS94mdww3lBraqOlrJuYGrn9a2ADCybLYXNfWk', '2023-06-16 15:46:26.548682'),
('fa5fwp2xbn6pryezqu49xb29013jywbq', '.eJxVjEEOwiAQRe_C2hCgwKBL9z0DmWFAqoYmpV0Z765NutDtf-_9l4i4rTVuPS9xYnERWpx-N8L0yG0HfMd2m2Wa27pMJHdFHrTLceb8vB7u30HFXr91SMbRGRJRKTwYDd4HULlYz4EggyZFFm1yKoOFoKx3zhlGpc3ABZJ4fwDnQTel:1q4u3F:cHwDabUQNyuJYn1vfWIq1Jd55O4h4FB6Czx6blogMZw', '2023-06-16 01:58:01.866486');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` longtext NOT NULL,
  `inventariominimo` int(11) NOT NULL,
  `preciodecosto` decimal(10,2) NOT NULL,
  `preciodeventa` decimal(10,2) NOT NULL,
  `activoactualmente` tinyint(1) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `fechaalta` date NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `fehamodificacion` date DEFAULT NULL,
  `imagen` varchar(150) NOT NULL,
  `usuarioalta_id` bigint(20) NOT NULL,
  `usuariomodificacion_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `codigo`, `nombre`, `descripcion`, `inventariominimo`, `preciodecosto`, `preciodeventa`, `activoactualmente`, `estado`, `fechaalta`, `categoria_id`, `fehamodificacion`, `imagen`, `usuarioalta_id`, `usuariomodificacion_id`) VALUES
(1, '420101', 'Grand Vin de Bordeaux', 'Esprit de Puisseguin - 2016 - France', 20, '1950.99', '950.99', 1, 'A', '2023-06-02', 1, NULL, 'assets/img/catalogo/Vino13.jpg', 1, NULL),
(2, '420102', '19 Crimes', 'Pinot Noir', 50, '9000.00', '15000.00', 1, 'A', '2023-06-02', 2, NULL, 'assets/img/catalogo/Vino12.jpg', 1, NULL),
(3, '420103', 'Dancing Flame', 'Ojos del Salado - 2018 - Chardonnay', 20, '7900.00', '18000.00', 1, 'A', '2023-06-02', 3, NULL, 'assets/img/catalogo/Vino11.jpg', 1, NULL),
(4, '420104', 'Jacobs Creek', 'Classic - Vintage 2018 - Australia', 20, '2000.00', '2000.00', 1, 'A', '2023-06-02', 1, NULL, '', 1, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authentication_customuser`
--
ALTER TABLE `authentication_customuser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `authentication_customuser_groups`
--
ALTER TABLE `authentication_customuser_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authentication_customuse_customuser_id_group_id_8a637646_uniq` (`customuser_id`,`group_id`),
  ADD KEY `authentication_custo_group_id_c5ef1d10_fk_auth_grou` (`group_id`);

--
-- Indices de la tabla `authentication_customuser_user_permissions`
--
ALTER TABLE `authentication_customuser_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authentication_customuse_customuser_id_permission_923704b1_uniq` (`customuser_id`,`permission_id`),
  ADD KEY `authentication_custo_permission_id_e47332af_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_authentic` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_rest_passwordreset_resetpasswordtoken`
--
ALTER TABLE `django_rest_passwordreset_resetpasswordtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_rest_passwordreset_resetpasswordtoken_key_f1b65873_uniq` (`key`),
  ADD KEY `django_rest_password_user_id_e8015b11_fk_authentic` (`user_id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_categoria_id_67131168_fk_categoria_id` (`categoria_id`),
  ADD KEY `producto_usuarioalta_id_259663e6_fk_authentication_customuser_id` (`usuarioalta_id`),
  ADD KEY `producto_usuariomodificacion__c3842c66_fk_authentic` (`usuariomodificacion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authentication_customuser`
--
ALTER TABLE `authentication_customuser`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `authentication_customuser_groups`
--
ALTER TABLE `authentication_customuser_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `authentication_customuser_user_permissions`
--
ALTER TABLE `authentication_customuser_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `django_rest_passwordreset_resetpasswordtoken`
--
ALTER TABLE `django_rest_passwordreset_resetpasswordtoken`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authentication_customuser_groups`
--
ALTER TABLE `authentication_customuser_groups`
  ADD CONSTRAINT `authentication_custo_customuser_id_a7d1343c_fk_authentic` FOREIGN KEY (`customuser_id`) REFERENCES `authentication_customuser` (`id`),
  ADD CONSTRAINT `authentication_custo_group_id_c5ef1d10_fk_auth_grou` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `authentication_customuser_user_permissions`
--
ALTER TABLE `authentication_customuser_user_permissions`
  ADD CONSTRAINT `authentication_custo_customuser_id_33d2a5f7_fk_authentic` FOREIGN KEY (`customuser_id`) REFERENCES `authentication_customuser` (`id`),
  ADD CONSTRAINT `authentication_custo_permission_id_e47332af_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_authentic` FOREIGN KEY (`user_id`) REFERENCES `authentication_customuser` (`id`);

--
-- Filtros para la tabla `django_rest_passwordreset_resetpasswordtoken`
--
ALTER TABLE `django_rest_passwordreset_resetpasswordtoken`
  ADD CONSTRAINT `django_rest_password_user_id_e8015b11_fk_authentic` FOREIGN KEY (`user_id`) REFERENCES `authentication_customuser` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_categoria_id_67131168_fk_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  ADD CONSTRAINT `producto_usuarioalta_id_259663e6_fk_authentication_customuser_id` FOREIGN KEY (`usuarioalta_id`) REFERENCES `authentication_customuser` (`id`),
  ADD CONSTRAINT `producto_usuariomodificacion__c3842c66_fk_authentic` FOREIGN KEY (`usuariomodificacion_id`) REFERENCES `authentication_customuser` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
