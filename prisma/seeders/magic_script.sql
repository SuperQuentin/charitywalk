insert into "Event" (id, name, "date", location, organisation, updated_at)
values ('be264a08-197b-4b3d-a5ae-3a480f5734dc', 'Help ukranian', '2023-12-15 17:45:30', 'Yverdon',
        'Amnesty international', CURRENT_TIMESTAMP),
       ('80e528af-3e84-4f4e-8445-c86dcfcf6bdf', 'Quatar boycot', '2023-12-8 17:45:30', 'Lausanne',
        'Amnesty international', CURRENT_TIMESTAMP),
       ('45857fe7-e508-4978-8942-2af059c8914f', 'La marche de la santé', '2023-08-03 17:45:30', 'Saint-Croix',
        'La croix rouge', CURRENT_TIMESTAMP);

insert into "Route" (id, name, description, created_at, updated_at)
values ('96e0e8a8-6441-4603-ba0e-d5478c7d0ed9', 'Migros world tour', 'gonna go fast', CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP);

INSERT INTO "Waypoint" (id, coords, "order", "routeId", created_at, updated_at)
values (gen_random_uuid(), ST_MakePoint('6.563261', '46.518873'), 1, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563588', '46.519104'), 2, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563583', '46.519121'), 3, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563129', '46.518873'), 4, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563635', '46.519156'), 5, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563662', '46.519157'), 6, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563685', '46.519172'), 7, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563684', '46.519191'), 8, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563736', '46.519227'), 9, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.56377', '46.519227'), 10, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563856', '46.519296'), 11, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563939', '46.519298'), 12, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564141', '46.519452'), 13, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564177', '46.519479'), 14, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564176', '46.519596'), 15, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564195', '46.519607'), 16, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564229', '46.519608'), 17, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564285', '46.519591'), 18, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564371', '46.51965'), 19, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564368', '46.519687'), 20, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564398', '46.519707'), 21, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564409', '46.519699'), 22, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564493', '46.51976'), 23, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564474', '46.519771'), 24, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564384', '46.519754'), 25, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564316', '46.519793'), 26, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564251', '46.519798'), 27, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564213', '46.519815'), 28, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564234', '46.519848'), 29, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564242', '46.519925'), 30, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564189', '46.519984'), 31, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564191', '46.520271'), 32, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564408', '46.520272'), 33, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564649', '46.520274'), 34, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565115', '46.520278'), 35, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565406', '46.520283'), 36, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565399', '46.520559'), 37, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565398', '46.520581'), 38, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565393', '46.521095'), 39, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.56585', '46.5211'), 40, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565846', '46.52179'), 41, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565846', '46.52187'), 42, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565848', '46.521967'), 43, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565839', '46.522047'), 44, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.565057', '46.522062'), 45, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564618', '46.522094'), 46, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564482', '46.522114'), 47, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564453', '46.522119'), 48, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564288', '46.522145'), 49, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564237', '46.522045'), 50, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564195', '46.521998'), 51, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564152', '46.521963'), 52, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564204', '46.52189'), 53, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564072', '46.521843'), 54, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.564009', '46.521835'), 55, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563739', '46.521818'), 56, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563488', '46.521806'), 57, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563361', '46.521777'), 58, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.56332', '46.521759'), 59, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563288', '46.521745'), 60, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563179', '46.521666'), 61, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563134', '46.521612'), 62, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.563055', '46.521498'), 63, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562976', '46.521355'), 64, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562955', '46.5213'), 65, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562898', '46.521201'), 66, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562889', '46.521186'), 67, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562507', '46.520545'), 68, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562454', '46.520452'), 69, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562396', '46.520352'), 70, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562319', '46.520361'), 71, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562248', '46.520251'), 72, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.562012', '46.519815'), 73, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.561582', '46.519058'), 74, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (gen_random_uuid(), ST_MakePoint('6.56184', '46.519058'), 75, '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9',
        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

insert into "RoutesOnEvents" ("eventId", "routeId", created_at, updated_at)
values ('be264a08-197b-4b3d-a5ae-3a480f5734dc', '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('80e528af-3e84-4f4e-8445-c86dcfcf6bdf', '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ('45857fe7-e508-4978-8942-2af059c8914f', '96e0e8a8-6441-4603-ba0e-d5478c7d0ed9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);