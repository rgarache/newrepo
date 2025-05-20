-- Insert Tony Stark's Record
INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Modify Tony Stark's Account type
UPDATE account
SET account_type= 'Admin'
WHERE account_email = 'tony@starkent.com';

-- Delete Tony Stark's record
DELETE FROM account
WHERE account_email = 'tony@starkent.com';

-- Modify the "GM Hummer" record to read "a huge interior" rather than "small interiors"
UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inventory.inv_make = 'GM' AND inventory.inv_model = 'Hummer';

-- Sport Category
SELECT inventory.inv_make, inventory.inv_model, classification.classification_name
FROM inventory
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';

-- Update Inventory
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
	inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
	

