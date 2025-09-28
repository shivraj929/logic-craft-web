-- Insert test roles for existing users to test different dashboards
-- Update one user to be a teacher
UPDATE user_roles 
SET role = 'teacher' 
WHERE user_id = '1c6caf1e-4e37-4689-8f7e-55e9ac1853f9'
AND role = 'student';

-- Add school_admin role for the first user (they can have multiple roles)
INSERT INTO user_roles (user_id, role)
VALUES ('eaa09fef-7a77-4ad2-a5fd-883aeb26f14a', 'school_admin')
ON CONFLICT (user_id, role) DO NOTHING;