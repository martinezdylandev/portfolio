ALTER TABLE projects
    ADD COLUMN IF NOT EXISTS project_slug TEXT UNIQUE;

UPDATE projects SET project_slug = 'julieta-abdon'        WHERE project_id = 1;
UPDATE projects SET project_slug = 'abv'  WHERE project_id = 2;
UPDATE projects SET project_slug = 'en-marte'              WHERE project_id = 3;
UPDATE projects SET project_slug = 'issas'   WHERE project_id = 4;
UPDATE projects SET project_slug = 'pem' WHERE project_id = 5;

ALTER TABLE projects
    ALTER COLUMN project_slug SET NOT NULL;
