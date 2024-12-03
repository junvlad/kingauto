DROP DATABASE IF EXISTS kingauto;
create database kingauto;
CREATE USER kingauto WITH PASSWORD 'kingauto';
GRANT ALL PRIVILEGES ON DATABASE kingauto to kingauto;
ALTER USER kingauto CREATEDB;
