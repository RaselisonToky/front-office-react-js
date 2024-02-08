INSERT INTO public.person (birth_date, gender, id_person, first_name, last_name) VALUES ('1999-01-25', 1, 2, null, 'Mirindra Razafindrasoava');
INSERT INTO public.person (birth_date, gender, id_person, first_name, last_name) VALUES ('2004-01-02', 1, 1, 'admin', null);

INSERT INTO public.person_user (id_person, id_person_user, role, email, password) VALUES (1, 1, 0, 'admin@gmail.com', '$2a$10$tjAKNe6D9SE1ZQQDj7nSJuum35KdXMzeTuRShfEXJGp5uQA/uw2Ee');
INSERT INTO public.person_user (id_person, id_person_user, role, email, password) VALUES (2, 2, 0, '123@gmail.com', '$2a$10$POvsStevdKB0OrezN7GXe.HO7h.uyocnSvzg8ghuOT4Jlm0eldPWW');


INSERT INTO public.model (id_brand, id_model, model) VALUES (1, 1, 'Yaris');

INSERT INTO public.fuel_type (id_fuel_type, label) VALUES (1, 'Essence');
INSERT INTO public.fuel_type (id_fuel_type, label) VALUES (2, 'Diesel');
INSERT INTO public.fuel_type (id_fuel_type, label) VALUES (3, 'Hydrogène');
INSERT INTO public.fuel_type (id_fuel_type, label) VALUES (4, 'Electrique');


INSERT INTO public.category (id_category, category) VALUES (1, 'SUV');
INSERT INTO public.category (id_category, category) VALUES (2, 'Berlin');
INSERT INTO public.category (id_category, category) VALUES (3, 'Off Road');
INSERT INTO public.category (id_category, category) VALUES (4, '4x4');
INSERT INTO public.category (id_category, category) VALUES (5, '4x2');
INSERT INTO public.category (id_category, category) VALUES (6, 'Camionette');
INSERT INTO public.category (id_category, category) VALUES (7, 'Coupé');
INSERT INTO public.category (id_category, category) VALUES (8, 'Sport');

INSERT INTO public.transmission (id_transmission, name) VALUES (1, 'Manuel');
INSERT INTO public.transmission (id_transmission, name) VALUES (2, 'Automatique');
INSERT INTO public.transmission (id_transmission, name) VALUES (3, 'Manuel à double embrayage');

INSERT INTO public.brand (id_brand, brand) VALUES (1, 'Toyota');
INSERT INTO public.brand (id_brand, brand) VALUES (2, 'Mercedes');
INSERT INTO public.brand (id_brand, brand) VALUES (3, 'Mazda');
INSERT INTO public.brand (id_brand, brand) VALUES (4, 'Peugeot');
INSERT INTO public.brand (id_brand, brand) VALUES (5, 'Citroen');

INSERT INTO public.version (id_version, intitule) VALUES (1, 'XE');
INSERT INTO public.version (id_version, intitule) VALUES (2, 'XLE');
INSERT INTO public.version (id_version, intitule) VALUES (3, 'LE');
INSERT INTO public.version (id_version, intitule) VALUES (4, 'SE');
INSERT INTO public.version (id_version, intitule) VALUES (5, 'GTi');
INSERT INTO public.version (id_version, intitule) VALUES (6, 'TDi');

INSERT INTO public.model_category (id_model_category, id_model, id_category) VALUES (1, 1, 7);
INSERT INTO public.model_category (id_model_category, id_model, id_category) VALUES (2, 1, 5);


INSERT INTO public.model_category_motorisation (id_model_category_motorisation, id_model_category, engine_power, description) VALUES (1, 1, 150, 'B5 4.4 BiTurbo');
INSERT INTO public.model_category_motorisation (id_model_category_motorisation, id_model_category, engine_power, description) VALUES (2, 2, 170, 'B5 4.4 BiTurbo');

INSERT INTO public.motorisation_version (id_motorisation_version, id_version, id_motorisation, details) VALUES (1, 1, 1, 'sportif avec intérieur raffiné');
INSERT INTO public.motorisation_version (id_motorisation_version, id_version, id_motorisation, details) VALUES (2, 2, 1, 'C''est super puissant');

INSERT INTO public.motorisation_transmission (id_motorisation_transmission, id_motorisation, id_transmission) VALUES (1, 1, 1);
INSERT INTO public.motorisation_transmission (id_motorisation_transmission, id_motorisation, id_transmission) VALUES (2, 1, 2);

INSERT INTO public.motorisation_fuel_type (id_motorisation_fuel_type, id_motorisation, id_fuel_type) VALUES (1, 1, 1);
INSERT INTO public.motorisation_fuel_type (id_motorisation_fuel_type, id_motorisation, id_fuel_type) VALUES (2, 1, 2);
INSERT INTO public.motorisation_fuel_type (id_motorisation_fuel_type, id_motorisation, id_fuel_type) VALUES (3, 2, 1);


