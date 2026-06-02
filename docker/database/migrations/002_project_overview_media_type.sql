ALTER TABLE projects
    ADD COLUMN IF NOT EXISTS project_overview_main_media_type TEXT NOT NULL DEFAULT 'images'
    CHECK (project_overview_main_media_type IN ('video', 'images'));
